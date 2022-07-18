import { useEffect, useState } from "react";
import { PostCard, arrangeGrid } from "../library";
import { useParams } from "react-router-dom";

interface Model {
  id: string;
  index: number;
  title: string;
  description: string;
  passed?: boolean;
}

export const ProblemList = () => {
  const [data, setData] = useState(<></>);

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/problems");
      const body: Model[] = await res.json();

      const visible = [];
      for (const p of body) {
        visible.push(p);
        if (!p.passed) {
          break;
        }
      }

      const posts: PostCard[] = visible.map(p => {
        const enabled = p.index === 1 || p.passed;

        return {
          title: `Problem ${p.index}`,
          subtitle: p.title,
          text: p.description,
          topic: "math",
          link: enabled ? `/problems/${p.index}` : undefined,
          disabled: !enabled,
        };
      });

      const html = arrangeGrid(posts, 4);
      setData(html);
    };

    // Run the function
    get();
  }, []);


  return data;
};

export const Problem = () => {
  const { index } = useParams();

  return (
    <div>
      <h1>Problem {index}</h1>
    </div>
  )
};

export const ProblemStatus = () => (<h1>Status</h1>);

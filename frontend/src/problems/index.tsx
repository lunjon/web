import Media from "react-media";
import { PostCard, arrangeGrid, arrangeList } from "../library";
import { useParams } from "react-router-dom";

interface ProblemSummary {
  id: number;
  title: string;
  description: string;
  passed?: boolean;
}

export const ProblemList = () => {
  const problems: ProblemSummary[] = [
    { id: 1, title: "Function Approximation", description: "Numerical solution to equation.", passed: true },
    { id: 2, title: "Numerical Integration", description: "Numerical solution to integral.", passed: true },
    { id: 3, title: "TODO", description: "TODO" },
  ];

  const visible = [];
  for (const p of problems) {
    if (p.passed) {
      visible.push(p);
    } else {
      visible.push(p);
      break;
    }
  }

  const posts: PostCard[] = problems.map(p => {
    return {
      title: `Problem ${p.id}`,
      subtitle: p.title,
      text: p.description,
      topic: "math",
      link: p.passed ? `/problems/${p.id}` : undefined,
      disabled: !p.passed,
    };
  });

  return (
    <Media queries={{
      small: '(max-width: 700px)',
    }}>
      {(size) => size.small ? arrangeList(posts) : arrangeGrid(posts, 4)}
    </Media >
  )
};

export const Problem = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Problem {id}</h1>
    </div>
  )
};

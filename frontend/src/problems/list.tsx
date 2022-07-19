import { ReactNode, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { chunks } from "../common";
import Model from "./model";

function modelToCard(m: Model) {
  const enabled = m.index === 1 || m.passed;
  let variant = enabled ? "Primary" : "Light";
  if (m.passed) {
    variant = "Success";
  }


  const text = enabled ? "light" : "dark";
  const title = enabled
    ? <a className="link-light" href={"/problems/"+m.index.toString()}>{m.title}</a>
    : <>{m.title}</>;


  return (<Card
    bg={variant.toLowerCase()}
    key={variant}
    text={text}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>
      {title}
    </Card.Header>
    <Card.Body>
      <Card.Title>{m.title}</Card.Title>
    </Card.Body>
  </Card>);
}

// function arrangeList(posts: ReactNode[]) {
//   const list = posts.map(post => {
//     return (<Stack gap={2}>
//       {post}
//     </Stack>)
//   });

//   return (<Container>
//     {list}
//   </Container>);
// }

function arrangeGrid(posts: ReactNode[], width: number) {
  const chs = chunks(posts, width);
  const stacks = chs.map(row => {
    return (<Stack direction="horizontal" gap={2}>{row}</Stack>);
  })

  return (<Container>
    {stacks}
  </Container>);
}

async function fetchProblems(): Promise<Model[]> {
  const res = await fetch("/api/problems");
  const body: Model[] = await res.json();
  return body;
}


export const ProblemList = () => {
  const [data, setData] = useState(<></>);

  useEffect(() => {
    const get = async () => {
      const models = await fetchProblems();
      const posts = models.map(modelToCard);
      const html = arrangeGrid(posts, 4);
      setData(html);
    };

    get();
  }, []);


  return data;
};

import { ReactNode, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { chunks } from "../common";
import {ProblemResponse} from "./model";
import Library from "./library";

function responseToCard(m: ProblemResponse) {
  const passed = m.status.passed;
  const enabled = m.index === 1 || passed;
  let variant = enabled ? "Primary" : "Light";
  if (passed) {
    variant = "Success";
  }

  const info = Library.getByIndex(m.index);

  const header = `Problem ${m.index}`;
  const title = enabled
    ? <a className="link-light" href={"/problems/"+m.index.toString()}>{header}</a>
    : <>{header}</>;


  return (<Card
    bg={variant.toLowerCase()}
    key={variant}
    text={enabled ? "light" : "dark"}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>
      {title}
    </Card.Header>
    <Card.Body>
      <Card.Title>{info.title}</Card.Title>
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

async function fetchProblems(): Promise<ProblemResponse[]> {
  // TODO: handle errors
  const res = await fetch("/api/problems");
  return await res.json();
}


export const ProblemList = () => {
  const [data, setData] = useState(<></>);

  useEffect(() => {
    const get = async () => {
      // TODO: merge statuses with titles from library
      const models = await fetchProblems();
      const posts = models.map(responseToCard);
      const html = arrangeGrid(posts, 4);
      setData(html);
    };

    get();
  }, []);


  return data;
};

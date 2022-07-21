import React from "react";
import { ReactNode, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { chunks } from "../common";
import { StatusResponse } from "./model";
import {nanoid} from "nanoid";
import Library from "./library";

function toCard(info: Info) {
  const passed = info.passed;
  let variant = info.enabled ? "Primary" : "Light";
  if (passed) {
    variant = "Success";
  }

  const header = `Problem ${info.index}`;
  const title = info.enabled
    ? <a className="link-light" href={"/problems/" + info.index.toString()}>{header}</a>
    : <>{header}</>;


  return (<Card
    bg={variant.toLowerCase()}
    key={nanoid()}
    text={info.enabled ? "light" : "dark"}
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
    return (<Stack key={nanoid()} direction="horizontal" gap={2}>{row}</Stack>);
  })

  return (<Container>
    {stacks}
  </Container>);
}

async function fetchStatuses(): Promise<StatusResponse[]> {
  // TODO: handle errors
  const res = await fetch("/api/problems");
  const results: StatusResponse[] = await res.json();
  return results;
}

interface Info {
  index: number;
  title: string;
  passed: boolean;
  enabled: boolean;
}

function toInfo(res: StatusResponse): Info {
  return {
    index: res.index,
    title: Library.getByIndex(res.index).title,
    passed: res.status.passed,
    enabled: true,
  }
}

/**
* Displays a list of problems.
*/
export const ProblemList = () => {
  const [data, setData] = useState(<></>);

  useEffect(() => {
    const get = async () => {
      const statuses = await fetchStatuses();

      const infos = statuses.map(toInfo);

      const cards = infos.map(toCard);
      const html = arrangeGrid(cards, 4);
      setData(html);
    };

    get();
  }, []);


  return data;
};

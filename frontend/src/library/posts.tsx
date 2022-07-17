import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { chunks } from "./util";

export type Topic = "default" | "programming" | "science" | "math";

export interface PostCard {
  title: string;
  subtitle: string;
  text: string;
  topic?: Topic;
  disabled?: boolean;
}

/**
* Creates a new card component that is used to link to a specific
* post (blog post, proglem post, etc.) in the site.
*/
export function createCard(post: PostCard) {
  let topic = post.topic;
  if (!post.topic) {
    topic = "default";
  }

  let variant: string;
  switch (topic) {
    case "math":
      variant = "Success";
      break;
    case "programming":
      variant = "Secondary";
      break;
    case "science":
      variant = "Primary";
      break;
    default:
      variant = "Light";
  }

  const text = variant.toLowerCase() === "light" ? "dark" : "white";
  if (post.disabled) {
    variant = "Light";
  }

  return (<Card
    bg={variant.toLowerCase()}
    key={variant}
    text={post.disabled ? "muted" : text}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>
      {post.disabled ? post.title : <strong>{post.title}</strong>}
    </Card.Header>
    <Card.Body>
      <Card.Title>{post.subtitle}</Card.Title>
      <Card.Text>{post.text}</Card.Text>
    </Card.Body>
  </Card>);
}

export function arrangeList(posts: PostCard[]) {
  const list = posts.map(post => {
    return (<Stack gap={2}>
      {createCard(post)}
    </Stack>)
  });

  return (<Container>
    {list}
  </Container>);
}

export function arrangeGrid(posts: PostCard[], width: number) {
  const chs = chunks(posts, width);
  const stacks = chs.map(row => {
    const cols = row.map(post => {
      return createCard(post);
    });

    return (<Stack direction="horizontal" gap={2}>{cols}</Stack>);
  })

  return (<Container>
    {stacks}
  </Container>);
}

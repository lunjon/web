import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { chunks } from "./util";

export type Variant = "Primary" | "Secondary" | "Success" | "Danger" | "Warning" | "Info" | "Light" | "Dark";

export interface PostCard {
  title: string;
  subtitle: string;
  text: string;
  variant?: Variant;
  link?: string;
}

/**
* Creates a new card component that is used to link to a specific
* post (blog post, proglem post, etc.) in the site.
*/
export function createCard(post: PostCard) {
  let variant = post.variant || "Primary";
  const text = variant.toLowerCase() === "light" ? "dark" : "white";
  const title = post.link
    ? <a className="link-light" href={post.link}>{post.title}</a>
    : <>{post.title}</>;


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

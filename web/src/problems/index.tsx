import Media from "react-media";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { createCardPost, PostSummary } from "../library";

interface Props {
  posts: PostSummary[];
}

const SmallScreen = (props: Props) => {
  const rows = props.posts.map(post => {
    return (<Row>
      <Col>{createCardPost(post.title, post.subtitle, post.text)}</Col>
    </Row>)
  });

  return (<Container>
    {rows}
  </Container>);
};

const BigScreen = (props: Props) => {
  // TODO: limit number of cols per row
  const cols = props.posts.map(post => {
    return (<Col>
      {createCardPost(post.title, post.subtitle, post.text, post.topic)}
    </Col>)
  });
  return (<Container>
    <Row>
      {cols}
    </Row>
  </Container>);
};

export const ProblemList = () => { 
  const posts: PostSummary[] = [
    { title: "Problem 1", subtitle: "Integral", text: "Numerical solution to integral.", topic: "math" },
  ];

  return (
    <Media queries={{
      small: '(max-width: 700px)',
    }}>
      {(size) => size.small ? <SmallScreen posts={posts} /> : <BigScreen posts={posts} />}
    </Media >
  )
};

export const Problem = () => {
  return (
    <p>
      Text.
    </p>
  )
};

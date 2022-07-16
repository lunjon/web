import Card from "react-bootstrap/Card";

export type Topic = "default" | "programming" | "science" | "math";

/**
* Creates a new card component that is used to link to a specific
* post (blog post, proglem post, etc.) in the site.
*/
export function createCardPost(
  header: string,
  title: string,
  text: string,
  topic?: Topic,
) {
  if (!topic) {
    topic = "default";
  }

  console.log(topic);
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

  return (<Card
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>{header}</Card.Header>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>);
}

export interface PostSummary {
  title: string;
  subtitle: string;
  text: string;
  topic?: Topic;
}

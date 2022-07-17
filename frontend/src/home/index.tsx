import Media from "react-media";
import { PostCard, arrangeGrid, arrangeList } from "../library";

const Home = () => {
  let posts: PostCard[] = [];
  for (let i = 1; i <= 5; i++) {
    posts.push({
      title: `Post ${i}`,
      subtitle: `About #${i}`,
      text: `${i}!`,
    });
  }

  return (
    <Media queries={{
      small: '(max-width: 700px)',
    }}>
      {(size) => size.small ? arrangeList(posts) : arrangeGrid(posts, 3)}
    </Media >
  )
};

export default Home;

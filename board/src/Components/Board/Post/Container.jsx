import PostComponent from "./Component";
import axios from "axios";

const PostContainer = () => {
  const onClick = async () => {
    await axios.post("/api/post", {
      title: "title",
      text: "text",
      userName: "userName",
      userId: "userId",
    });
  };

  return <PostComponent onClick={onClick}></PostComponent>;
};

export default PostContainer;

import CommentComponent from "./Component";
import axios from "axios";

const CommentContainer = () => {
  const onClick = (text) => {
    axios.post("/api/post/comment", { text });
  };

  return <CommentComponent onClick={onClick} />;
};

export default CommentContainer;

import CommentComponent from "./Component";
import axios from "axios";
import { useEffect } from "react";

const CommentContainer = ({ commentList, setCommentList, id }) => {
  const commentListUp = async () => {
    const tempCommentAxios = await axios.post(
      "http://localhost:8080/api/comment/commentlist"
    );
    setCommentList(tempCommentAxios.data.list);
  };

  const onClick = async (text, id) => {
    await axios.post("http://localhost:8080/api/comment/comment", { text, id });
    await commentListUp();
  };

  useEffect(() => {
    commentListUp();
  }, []);

  return (
    <CommentComponent
      onClick={onClick}
      commentList={commentList}
      setCommentList={setCommentList}
      id={id}
    />
  );
};

export default CommentContainer;

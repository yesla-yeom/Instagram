import CommentComponent from "./Component";
import axios from "axios";
import { useEffect } from "react";

const CommentContainer = ({ commentList, setCommentList }) => {
  const commentListUp = async () => {
    const tempCommentAxios = await axios.post(
      "http://localhost:8080/api/comment/commentlist"
    );
    setCommentList(tempCommentAxios.data.list);
  };

  const onClick = async (text) => {
    await axios.post("http://localhost:8080/api/comment/comment", { text });
    await commentListUp();
  };

  useEffect(() => {
    commentListUp();
  }, []);

  return <CommentComponent onClick={onClick} commentList={commentList} />;
};

export default CommentContainer;

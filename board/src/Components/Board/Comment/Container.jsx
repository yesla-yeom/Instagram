import CommentComponent from "./Component";
import axios from "axios";
import { useEffect } from "react";

const CommentContainer = ({ commentList, setCommentList, id, theme }) => {
  const commentListUp = async () => {
    const tempCommentAxios = await axios.post(
      "http://192.168.0.242:8080/api/comment/commentlist"
    );
    setCommentList(tempCommentAxios.data.list);
  };

  const onClick = async (text, id) => {
    await axios.post("http://192.168.0.242:8080/api/comment/comment", {
      text,
      id,
    });
    await commentListUp();
  };

  const removeComment = async (_id) => {
    await axios.post("http://192.168.0.242:8080/api/comment/deletecomment", {
      id: _id,
    });
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
      removeComment={removeComment}
      theme={theme}
    />
  );
};

export default CommentContainer;

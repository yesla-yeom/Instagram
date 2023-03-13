import ListComponent from "./Component";
import axios from "axios";
import { useEffect } from "react";

const ListContainer = ({
  boardList,
  setBoardList,
  commentList,
  setCommentList,
  theme,
}) => {
  const listUp = async () => {
    const tempAxios = await axios.post(
      "http://192.168.0.107:8080/api/board/list"
    );
    setBoardList(tempAxios.data.list);
  };

  const removePost = async (_id) => {
    await axios.post("http://192.168.0.107:8080/api/board/delete", {
      id: _id,
    });
    await listUp();
  };

  useEffect(() => {
    listUp();
  }, []);

  return (
    <ListComponent
      boardList={boardList}
      removePost={removePost}
      commentList={commentList}
      setCommentList={setCommentList}
      theme={theme}
    ></ListComponent>
  );
};

export default ListContainer;

import ListComponent from "./Component";
import axios from "axios";
import { useEffect } from "react";

const ListContainer = ({ boardList, setBoardList }) => {
  // 큰 index.jsx에서 props로 보내고 받고 rgrg?
  const listUp = async () => {
    const tempAxios = await axios.post("http://localhost:8080/api/board/list");
    setBoardList(tempAxios.data.list);
  };

  const removePost = async (_id) => {
    // 복습!! _id : 정현이의 매개변수 표현 방식 나도 따라하기
    await axios.post("http://localhost:8080/api/board/delete", { id: _id });
    await listUp();
  };

  useEffect(() => {
    listUp();
  }, []);

  return (
    <ListComponent
      boardList={boardList}
      removePost={removePost}
    ></ListComponent>
  );
};

export default ListContainer;

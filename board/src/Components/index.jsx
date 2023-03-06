import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import CommentContainer from "./Board/Comment/Container";
import ListContainer from "./Board/List/Container";
import LogInContainer from "./Users/LogIn/Container";
import PostContainer from "./Board/Post/Container";
import RegistContainer from "./Users/Regist/Container";
import HeaderContainer from "./Header/Container";
import LogOutContainer from "./Header/LogOut/Container";
import EditContainer from "./Board/Edit/Container";

const Instagram = () => {
  const [tempUser, setUser] = useState({
    userId: "",
    userName: "",
  });
  const [_, setRender] = useState(false);
  const [boardList, setBoardList] = useState([]);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    if (document.cookie) {
      setUser({
        userId: JSON.parse(
          window.atob(document.cookie.split("=")[1]?.split(".")[1])
        ).userId,
        userName: JSON.parse(
          window.atob(document.cookie.split("=")[1]?.split(".")[1])
        ).userName,
      });
    }
  }, [document.cookie]);

  return (
    <>
      <HeaderContainer tempUser={tempUser} setRender={setRender} />

      <Routes>
        <Route path="/regist" element={<RegistContainer />} />
        <Route
          path="/"
          element={
            tempUser.userId == "" ? (
              <LogInContainer setRender={setRender} />
            ) : (
              <ListContainer
                setBoardList={setBoardList}
                boardList={boardList}
                commentList={commentList}
                setCommentList={setCommentList}
              />
            )
          }
        />
        <Route
          path="/post"
          element={<PostContainer setBoardList={setBoardList}></PostContainer>}
        />

        <Route
          path="/edit/:editId"
          element={<EditContainer userName={tempUser.userName} />}
        />
      </Routes>
    </>
  );
};

export default Instagram;

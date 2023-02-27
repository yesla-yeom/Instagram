import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import CommentContainer from "./Board/Comment/Container";
import ListContainer from "./Board/List/Container";
import LogInContainer from "./Users/LogIn/Container";
import PostContainer from "./Board/Post/Container";
import RegistContainer from "./Users/Regist/Container";
import styled from "styled-components";
import HeaderContainer from "./Header/Container";
import LogOutContainer from "./Users/LogOut/Container";
import TextContainer from "./Board/Text/Container";

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
      <Routes>
        <Route path="/*" element={<HeaderContainer></HeaderContainer>}></Route>
        <Box>
          {tempUser.userId == "" ? (
            <>
              <Route
                path="/regist"
                element={<RegistContainer></RegistContainer>}
              ></Route>
              <Route
                path="/login"
                element={
                  <LogInContainer setRender={setRender}></LogInContainer>
                }
              ></Route>
            </>
          ) : (
            <Route
              path="/"
              element={
                <LogOutContainer
                  userName={tempUser.userName}
                  setRender={setRender}
                ></LogOutContainer>
              }
            ></Route>
          )}
          <Route
            path="/"
            element={
              <>
                <ListContainer
                  setBoardList={setBoardList}
                  boardList={boardList}
                />
                {tempUser.userId == "" ? (
                  <></>
                ) : (
                  <PostContainer setBoardList={setBoardList} />
                )}
              </>
            }
          />
          <Route
            path="/post/:postId"
            element={
              <>
                <TextContainer userName={tempUser.userName} />
                <CommentContainer
                  setCommentList={setCommentList}
                  commentList={commentList}
                />
              </>
            }
          />
        </Box>
      </Routes>
    </>
  );
};

export default Instagram;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

// const LogInRow = styled.div`
//   display: flex;
//   flex-direction: space-evenly;
// `;

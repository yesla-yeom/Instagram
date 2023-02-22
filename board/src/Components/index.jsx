import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import CommentContainer from "./Board/Comment/Container";
import ListContainer from "./Board/List/Container";
import LogInContainer from "./Users/LogIn/Container";
import PostContainer from "./Board/Post/Container";
import RegistContainer from "./Users/Regist/Container";
import styled from "styled-components";
import HeaderContainer from "./Header/Container";
// import AdminContainer from "./Admin/Container";
import LogOutContainer from "./Users/LogOut/Container";
import TextContainer from "./Board/Text/Container";

const Instagram = () => {
  const [tempUser, setUser] = useState({
    userId: "",
    userName: "",
  });
  const [_, setRender] = useState(false);
  const [boardList, setBoardList] = useState([]);

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
      <HeaderContainer></HeaderContainer>
      <Box>
        {tempUser.userId == "" ? (
          <>
            <RegistContainer></RegistContainer>
            <LogInContainer setRender={setRender}></LogInContainer>
          </>
        ) : (
          <LogOutContainer userName={tempUser.userName} setRender={setRender} />
        )}

        {tempUser.userId == "" ? (
          <></>
        ) : (
          <>
            <PostContainer setBoardList={setBoardList}></PostContainer>
            <CommentContainer></CommentContainer>
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <ListContainer
                setBoardList={setBoardList}
                boardList={boardList}
              ></ListContainer>
            }
          />
          <Route path="/post/:postId" element={<TextContainer />} />
          {/* 목록이 사라진 게 아님!!!!! 출력하는 컴포넌트가 달라진 것 */}
        </Routes>
      </Box>
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

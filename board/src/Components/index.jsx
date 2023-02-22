// import { Routes, Route } from "react-router-dom";
import CommentContainer from "./Board/Comment/Container";
import EditContainer from "./Board/Edit/Container";
import InfoContainer from "./Users/Info/Container";
import ListContainer from "./Board/List/Container";
import LogInContainer from "./Users/LogIn/Container";
import PostContainer from "./Board/Post/Container";
import RegistContainer from "./Users/Regist/Container";
import styled from "styled-components";
import HeaderContainer from "./Header/Container";
// import AdminContainer from "./Admin/Container";

const Instagram = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Box>
        <RegistContainer></RegistContainer>
        <LogInRow>
          <InfoContainer></InfoContainer>
          <LogInContainer></LogInContainer>
        </LogInRow>
        <PostContainer></PostContainer>
        <EditContainer></EditContainer>
        <CommentContainer></CommentContainer>
        <ListContainer></ListContainer>
        {/* <Routes> */}
        {/* <Route path="/*" element={}></Route> */}
        {/* <Route path="/*" element={}></Route> */}
        {/* <Route
          path="/regist"
          element={}
        ></Route> */}
        {/* <Route path="/post" element={}></Route> */}
        {/* <Route path="/edit" element={}></Route> */}
        {/* <Route
          path="/comment"
          element={}
        ></Route> */}
        {/* <Route path="/post" element={}></Route> */}
        {/* <Route
          path="/admin"
          element={<AdminContainer></AdminContainer>}
        ></Route> */}
        {/* </Routes> */}
      </Box>
    </>
  );
};

export default Instagram;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogInRow = styled.div`
  display: flex;
  flex-direction: space-evenly;
`;

// import { Routes, Route } from "react-router-dom";
import CommentContainer from "./Comment/Container";
import EditContainer from "./Edit/Container";
import InfoContainer from "./Info/Container";
import ListContainer from "./List/Container";
import LogInContainer from "./LogIn/Container";
import PostContainer from "./Post/Container";
import RegistContainer from "./Regist/Container";
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

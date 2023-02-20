import { Routes, Route } from "react-router-dom";
import CommentContainer from "./Comment/Container";
import EditContainer from "./Edit/Container";
import InfoContainer from "./Info/Container";
import ListContainer from "./List/Container";
import LogInContainer from "./LogIn/Container";
import PostContainer from "./Post/Container";
import RegistContainer from "./Regist/Container";
import styled from "styled-components";
import AdminContainer from "./Admin/Container";

const Instagram = () => {
  return (
    <Box>
      <Routes>
        <Route
          path="/login"
          element={<LogInContainer></LogInContainer>}
        ></Route>

        <Route path="/info" element={<InfoContainer></InfoContainer>}></Route>

        <Route
          path="/regist"
          element={<RegistContainer></RegistContainer>}
        ></Route>

        <Route path="/post" element={<PostContainer></PostContainer>}></Route>

        <Route path="/edit" element={<EditContainer></EditContainer>}></Route>

        <Route
          path="/comment"
          element={<CommentContainer></CommentContainer>}
        ></Route>

        <Route path="/list" element={<ListContainer></ListContainer>}></Route>

        <Route
          path="/admin"
          element={<AdminContainer></AdminContainer>}
        ></Route>
      </Routes>
    </Box>
  );
};

export default Instagram;

const Box = styled.div``;

import styled from "styled-components";
import React, { useState } from "react";

const PostComponent = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  return (
    <LogInBox>
      <input
        type={"text"}
        value={title}
        onInput={(e) => {
          setUserId(e.target.value);
        }}
        placeholder={"TITLE"}
      />

      <input
        type={"text"}
        value={text}
        onInput={(e) => {
          setUserPw(e.target.value);
        }}
        placeholder={"TEXT"}
      />

      <button
      // onClick={() => {
      //   onClick(title, text);
      // }}
      >
        Add Text
      </button>
    </LogInBox>
  );
};

export default PostComponent;

const LogInBox = styled.div``;

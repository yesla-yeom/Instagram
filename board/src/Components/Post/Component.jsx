import styled from "styled-components";
import React, { useState } from "react";

const PostComponent = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <PostBox>
      <input
        type={"text"}
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
        placeholder={"TITLE"}
      />

      <input
        type={"text"}
        value={text}
        onInput={(e) => {
          setText(e.target.value);
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
    </PostBox>
  );
};

export default PostComponent;

const PostBox = styled.div``;

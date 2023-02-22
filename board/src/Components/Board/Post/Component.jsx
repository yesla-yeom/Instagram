import styled from "styled-components";
import React, { useState } from "react";

const PostComponent = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <PostBox>
      <PostFrame>
        <input
          type={"text"}
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
          placeholder={"TITLE"}
          className="title"
        />

        <textarea
          type={"text"}
          value={text}
          onInput={(e) => {
            setText(e.target.value);
          }}
          placeholder={"TEXT"}
          className="text"
          cols={"80"}
          rows={"15"}
        />

        <button
          className="registBtn"
          onClick={() => {
            onClick(title, text);
          }}
        >
          Add Text
        </button>
      </PostFrame>
    </PostBox>
  );
};

export default PostComponent;

const PostBox = styled.div`
  width: 100vw;
`;

const PostFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%;
  margin: 3rem auto;

  & .title {
    background-color: aliceblue;
    border-radius: 5px;
    margin: 5px;
    padding: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  & .text {
    width: 100%;
    resize: none;
    background-color: #921d7b;
    color: white;
    border: 1 px #000;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  & .registBtn {
    font-size: 1rem;
    padding: 5px;
    border: none;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
  }
`;

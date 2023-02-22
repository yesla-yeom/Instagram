import styled from "styled-components";
import React, { useState } from "react";

const CommentComponent = ({ onClick }) => {
  const [text, setText] = useState("");

  return (
    <CommentBox>
      <CommentFrame>
        <textarea
          type={"text"}
          value={text}
          onInput={(e) => {
            setText(e.target.value);
          }}
          placeholder={"COMMENT"}
          className="text"
          cols={"10"}
          rows={"4"}
        />

        <button
          className="registBtn"
          onClick={() => {
            onClick(text);
          }}
        >
          Add Text
        </button>
      </CommentFrame>
    </CommentBox>
  );
};

export default CommentComponent;

const CommentBox = styled.div`
  width: 100vw;
`;

const CommentFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 3rem auto;

  & .text {
    width: 100%;
    resize: none;
    background-color: #771d92;
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

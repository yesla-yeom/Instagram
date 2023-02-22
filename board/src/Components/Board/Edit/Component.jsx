import React, { useState } from "react";
import styled from "styled-components";

const EditComponent = ({ onClick, item }) => {
  const [title, setTitle] = useState(item.title);
  const [text, setText] = useState(item.text);

  return (
    <EditBox>
      <EditFrame>
        <input
          type={"text"}
          value={title}
          inInput={(e) => {
            setTitle(e.target.value);
          }}
          placeholder={"Title"}
        />
        userName : {item.userName} - {item.createdAt}
        <p>
          <textarea
            type={"text"}
            value={text}
            inInput={(e) => {
              setText(e.target.value);
            }}
            placeholder={"Text"}
          />
        </p>
        <button
          onClick={() => {
            onClick(title, text);
          }}
          className={"editBtn"}
        >
          Edit
        </button>
      </EditFrame>
    </EditBox>
  );
};

export default EditComponent;

const EditBox = styled.div`
  width: 100vw;
`;

const EditFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
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

  & .editBtn {
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

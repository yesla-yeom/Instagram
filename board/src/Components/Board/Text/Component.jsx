import React from "react";
import styled from "styled-components";

const TextComponent = ({
  titleDetail,
  textDetail,
  inputTitle,
  setInputTitle,
  inputText,
  setInputText,
  onClick,
  checkEdit,
  updateContent,
}) => {
  return (
    <TextBox>
      <p>{titleDetail}</p>
      <p>{textDetail}</p>
      <PostFrame>
        {checkEdit ? (
          <>
            {" "}
            <input
              type={"text"}
              value={inputTitle}
              className="title"
              onInput={(e) => {
                setInputTitle(e.target.value);
              }}
            />
            <textarea
              type={"text"}
              value={inputText}
              className="text"
              cols={"80"}
              rows={"15"}
              onInput={(e) => {
                setInputText(e.target.value);
              }}
            />
          </>
        ) : (
          <></>
        )}
        <button
          className="EditBtn"
          onClick={() => {
            onClick();
            updateContent(inputTitle, inputText);
          }}
        >
          Edit Text
        </button>
      </PostFrame>
    </TextBox>
  );
};

export default TextComponent;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: tomato;

  & .EditBtn {
    font-size: 1rem;
    padding: 7px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
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

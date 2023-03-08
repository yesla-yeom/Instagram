import React, { useEffect } from "react";
import styled from "styled-components";

const EditComponent = ({
  inputTitle,
  setInputTitle,
  inputText,
  setInputText,
  updateContent,
  takeValues,
}) => {
  useEffect(() => {
    takeValues();
  }, []);

  return (
    <TextBox>
      <PostFrame>
        {
          <>
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
              cols={"5"}
              rows={"10"}
              onInput={(e) => {
                setInputText(e.target.value);
              }}
            />
            <button
              className="EditBtn"
              onClick={() => {
                updateContent(inputTitle, inputText);
              }}
            >
              수정
            </button>
          </>
        }
      </PostFrame>
    </TextBox>
  );
};

export default EditComponent;

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
    background-color: #2c82c9;
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

  @media ${(props) => props.theme.tabletL} {
    width: 70%;
    margin: 10% auto;
  }

  @media ${(props) => props.theme.mobileL} {
    width: 100%;
    margin: 10% auto;
  }
`;

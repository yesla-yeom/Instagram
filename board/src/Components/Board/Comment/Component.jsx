import styled from "styled-components";
import React, { useState } from "react";

const CommentComponent = ({ onClick, commentList, id, removeComment }) => {
  const [text, setText] = useState("");

  return (
    <CommentBox>
      <CommentFrame>
        <ListBox>
          {[...commentList].map((item, index) => (
            <ItemBox>
              <div key={`commentList-${index}`}>{item.text}</div>
              <div key={`commentList-${index}`}>
                {item.createdAt.slice(5, 10)}
              </div>
              <div
                className="deleteBtn"
                onClick={() => {
                  removeComment(item.id);
                }}
              >
                삭제
              </div>
            </ItemBox>
          ))}
        </ListBox>
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
          className="commentBtn"
          onClick={() => {
            onClick(text, id);
            setText("");
          }}
        >
          Add Comment
        </button>
      </CommentFrame>
    </CommentBox>
  );
};

export default CommentComponent;

const CommentBox = styled.div`
  width: 100%;
`;

const CommentFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem auto;
  flex-wrap: nowrap;

  & .text {
    width: 100%;
    resize: none;
    background-color: #e1dee2b1;
    color: #000000;
    border: 1 px #000;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  & .commentBtn {
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

const ListBox = styled.div`
  text-align: center;
  border: 1px solid #000;

  .deleteBtn {
    background-color: #d3d3d387;
    cursor: pointer;
  }

  div {
    border: 1px dashed #000;
    padding: 10px;
  }

  @media ${(props) => props.theme.mobileM} {
    margin: 0 auto;
  }
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

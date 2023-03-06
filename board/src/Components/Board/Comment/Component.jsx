import styled from "styled-components";
import React, { useState } from "react";

const CommentComponent = ({
  onClick,
  commentList,
  // setCommentList,
  id,
  removeComment,
}) => {
  const [text, setText] = useState("");
  // const onChange = (e) => setText(e.target.value);

  return (
    <CommentBox>
      <CommentFrame>
        <ListBox>
          {[...commentList].map((item, index) => (
            <>
              <div key={`commentList-${index}`} className="comment">
                {item.text}
              </div>
              {/* <div key={`commentList-${index}`}>{item.userName}</div> */}
              <div key={`commentList-${index}`} className="created">
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
            </>
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
          // onChange={onChange}
        >
          Add Comment
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
  flex-wrap: nowrap;

  & .text {
    width: 100%;
    resize: none;
    background-color: #e1dee2b1;
    color: white;
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
  display: flex;
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
`;

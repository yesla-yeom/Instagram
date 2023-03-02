import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommentContainer from "../Comment/Container";

const ListComponent = ({
  boardList,
  removePost,
  commentList,
  setCommentList,
}) => {
  console.log(boardList);
  return (
    <ListBox>
      <ListFrame>
        {[...boardList].reverse().map((item, index) => (
          <div>
            <Link to={`/feed`}>
              <div>{item.userName}</div>
            </Link>
            <div>
              <img
                src={`http://localhost:8080/uploads/${item.photo}`}
                alt="asd"
              />
            </div>

            <div>{item.title}</div>
            <div>{item.text}</div>
            <CommentContainer
              commentList={commentList}
              setCommentList={setCommentList}
              id={item.id}
            />
            <div className="btn">
              <Link to={`/edit/${item.id}`}>수정</Link>
            </div>
            <div
              className="btn"
              onClick={() => {
                removePost(item.id);
              }}
            >
              삭제
            </div>
          </div>
        ))}
      </ListFrame>
    </ListBox>
  );
};

export default ListComponent;

const ListBox = styled.div`
  width: 100vw;
`;

const ListFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 3rem auto;
  padding: 3rem;
  text-align: center;

  & img {
    width: 400px;
  }

  & .btn {
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  & > div > div:nth-child(6) {
    margin-bottom: 7rem;
  }

  a:first-child {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
`;

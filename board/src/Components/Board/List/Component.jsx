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
  for (let i = 0; i < boardList.length; i++) {
    console.log(boardList[i]);
  }
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
                src={`http://localhost:8080/uploads/${item.photo1}`}
                alt="asd"
              />
              <img src={`http://localhost:8080/uploads/${item.photo2}`} />
              <img src={`http://localhost:8080/uploads/${item.photo3}`} />
              <img src={`http://localhost:8080/uploads/${item.photo4}`} />
              <img src={`http://localhost:8080/uploads/${item.photo5}`} />
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5%;
    margin: auto;
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  & > div > div:nth-child(7) {
    margin-bottom: 7rem;
  }

  a:first-child {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
`;

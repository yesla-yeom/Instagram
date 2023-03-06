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
  return (
    <ListBox>
      <ListFrame>
        {[...boardList].reverse().map((item, index) => (
          <div>
            {/* <Link to={`/feed`}> */}
            <div className="userName">{item.userName}</div>
            {/* </Link> */}
            <div>
              {[...new Array(10)].map(
                (_, idx) =>
                  item[`photo${idx + 1}`] && (
                    <img
                      src={`http://localhost:8080/uploads/${
                        item[`photo${idx + 1}`]
                      }`}
                    />
                  )
              )}
            </div>
            <div className="title">{item.title}</div>
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

  & .userName {
    font-weight: 900;
    font-size: x-large;
    color: #178cdf;
  }

  & img {
    width: 400px;
  }

  & .title {
    font-weight: 900;
    color: #00000093;
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
  }
`;

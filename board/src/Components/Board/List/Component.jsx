import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListComponent = ({ boardList, removePost }) => {
  console.log(boardList);
  return (
    <ListBox>
      <ListFrame>
        {boardList?.map((item, index) => (
          <div>
            <div>{item.userName}</div>
            <div>
              <img
                src={`http://localhost:8080/uploads/${item.photo}`}
                alt="asd"
              />
            </div>
            <div>{item.title}</div>
            <div>{item.text}</div>
            <div
              className="writeBtn"
              onClick={() => {
                removePost(item.id);
              }}
            >
              Del
            </div>
          </div>
        ))}

        {/* {boardList?.map((item, index) => (
          <tr key={`tr-${index}`}>
            <td key={`id-${index}`}>{item.id}</td>
            <td key={`title-${index}`}>
              <Link to={`/post/${item.id}`}>{item.title}</Link>
            </td>
            <td key={`name-${index}`}>
              {item.userName ? item.userName : "익명"}
            </td>
            <td key={`createdAt-${index}`}>
              {new Date(item.createdAt).toLocaleString()}
              {/* Date.toLocaleString() 날짜 현지화 */}
        {/* </td>
            <div
              className="writeBtn"
              onClick={() => {
                removePost(item.id);
              }}
            >
              Del
            </div>
          </tr> */}
        {/* // ))} */}
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

  & .writeBtn {
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin-bottom: 50px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  /* th {
    border-bottom: 1px solid black;
  }

  td {
    border-bottom: 1px dashed black;
    text-align: center;
  } */
`;

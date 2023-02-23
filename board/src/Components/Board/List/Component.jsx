import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListComponent = ({ boardList, removePost }) => {
  return (
    <ListBox>
      <ListFrame>
        <colgroup>
          <col width={"10%"} />
          <col width={"50%"} />
          <col width={"20%"} />
          <col width={"20%"} />
        </colgroup>
        <thead>
          <tr>
            <th>index</th>
            <th>Title</th>
            <th>name</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {boardList?.map((item, index) => (
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
              </td>
              <td
                className="writeBtn"
                onClick={() => {
                  removePost(item.id);
                }}
              >
                Del
              </td>
            </tr>
          ))}
        </tbody>
      </ListFrame>
    </ListBox>
  );
};

export default ListComponent;

const ListBox = styled.div`
  width: 100vw;
`;

const ListFrame = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem auto;

  & .writeBtn {
    font-size: 1rem;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  th {
    border-bottom: 1px solid black;
  }

  td {
    border-bottom: 1px dashed black;
    text-align: center;
  }
`;

import React from "react";
import styled from "styled-components";

const ListComponent = () => {
  return (
    <ListBox>
      <ListFrame>
        난! 게시판 목록이다!
        <button className="writeBtn">Write</button>
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
`;

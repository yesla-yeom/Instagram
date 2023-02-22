import styled from "styled-components";
import React from "react";

const InfoComponent = ({ onClick, setTest, userName }) => {
  return (
    <InfoBox>
      <InfoFrame>
        <div>{userName}님 어서오세요😝</div>
        <button
          className="logoutBtn"
          onClick={() => {
            setTest(false);
            onClick();
          }}
        >
          Log Out
        </button>
      </InfoFrame>
    </InfoBox>
  );
};

export default InfoComponent;

const InfoBox = styled.div`
  width: 60vw;
`;

const InfoFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;

  & .logoutBtn {
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
`;

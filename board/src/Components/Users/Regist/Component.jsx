import { useState } from "react";
import styled from "styled-components";

const RegistComponent = ({ onClick, theme }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <RegistBox>
      <RegistFrame theme={theme}>
        <input
          type={"text"}
          value={userId}
          onInput={(e) => {
            setUserId(e.target.value);
          }}
          placeholder={"ID"}
          className="id"
        />

        <input
          type={"password"}
          value={userPw}
          onInput={(e) => {
            setUserPw(e.target.value);
          }}
          placeholder={"PW"}
          className="pw"
        />

        <input
          type={"text"}
          value={userName}
          onInput={(e) => {
            setUserName(e.target.value);
          }}
          placeholder={"NAME"}
          className="name"
        />

        <button
          onClick={() => {
            onClick(userId, userPw, userName);
            setUserId("");
            setUserPw("");
            setUserName("");
          }}
          className="registBtn"
        >
          Regist
        </button>
      </RegistFrame>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  width: 100%;
`;

const RegistFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 7rem auto;

  & .id {
    background-color: pink;
    border: 1 px #000;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }

  & .pw {
    background-color: aliceblue;
    border: 1 px #000;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }

  & .name {
    background-color: #2c82c972;
    color: white;
    border: 1 px #000;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
  }

  & .registBtn {
    font-size: 1rem;
    padding: 7px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  @media ${(props) => props.theme.mobileS} {
    width: fit-content;
    margin: 2rem auto;
  }
`;

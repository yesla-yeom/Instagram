import { useState } from "react";
import styled from "styled-components";

const RegistComponent = ({ onClick }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <RegistBox>
      <input
        type={"text"}
        value={userId}
        onInput={(e) => {
          setUserId(e.target.value);
        }}
        placeholder={"ID"}
      />

      <input
        type={"password"}
        value={userPw}
        onInput={(e) => {
          setUserPw(e.target.value);
        }}
        placeholder={"PW"}
      />

      <input
        type={"text"}
        value={userName}
        onInput={(e) => {
          setUserName(e.target.value);
        }}
        placeholder={"NAME"}
      />

      <button
        onClick={() => {
          onClick(userId, userPw, userName);
        }}
      >
        Regist
      </button>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  input {
    padding: 5px;
  }
`;

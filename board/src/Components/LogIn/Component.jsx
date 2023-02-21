import styled from "styled-components";
import React, { useState } from "react";

const PostComponent = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  return (
    <LogInBox>
      <LogInFrame>
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

        <button className="logInBtn">Log In</button>
      </LogInFrame>
    </LogInBox>
  );
};

export default PostComponent;

const LogInBox = styled.div`
  width: 20vw;
`;

const LogInFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;

  & .id {
    background-color: aliceblue;
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

  & .logInBtn {
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
`;

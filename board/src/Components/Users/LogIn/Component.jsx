import styled from "styled-components";
import React, { useState } from "react";
import logo from "./img/instalogo.png";
import bottom from "./img/bottom.png";
import instaimg from "./img/instaimg.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const PostComponent = ({ logInClick }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const screen850 = useMediaQuery({ minWidth: 850 });

  return (
    <div style={{ display: "flex" }}>
      {screen850 ? (
        <>
          <BigBox>
            <img
              src={instaimg}
              alt=""
              style={{ width: "400px", marginTop: "30px" }}
            />
          </BigBox>
          <LogInBox>
            <img
              src={logo}
              alt=""
              style={{ width: "200px", marginTop: "30px" }}
            />
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

              <button
                className="logInBtn"
                onClick={() => {
                  logInClick(userId, userPw);
                  setUserId("");
                  setUserPw("");
                }}
              >
                로그인
              </button>
            </LogInFrame>
            <GoRegist>
              <Link to={`/regist`}>가입하기</Link>
            </GoRegist>
            <img
              src={bottom}
              alt=""
              style={{ width: "300px", marginTop: "30px" }}
            />
          </LogInBox>
        </>
      ) : (
        <>
          <LogInBox>
            <img
              src={logo}
              alt=""
              style={{ width: "200px", marginTop: "30px" }}
            />
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

              <button
                className="logInBtn"
                onClick={() => {
                  logInClick(userId, userPw);
                  setUserId("");
                  setUserPw("");
                }}
              >
                로그인
              </button>
            </LogInFrame>
            <GoRegist>
              <Link to={`/regist`}>가입하기</Link>
            </GoRegist>
            <img
              src={bottom}
              alt=""
              style={{ width: "300px", marginTop: "30px" }}
            />
          </LogInBox>
        </>
      )}
    </div>
  );
};

export default PostComponent;

const BigBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
`;

const LogInBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
`;

const LogInFrame = styled.div`
  width: 100%;
  border: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .id {
    background-color: aliceblue;
    border: 1px solid #dadada80;
    border-radius: 5px;
    margin: 20px auto 1px;
    padding: 3% 10%;
  }

  & .pw {
    background-color: aliceblue;
    border: 1px solid #dadada80;
    border-radius: 5px;
    margin: 5px;
    padding: 3% 10%;
  }

  & .logInBtn {
    font-size: 0.8rem;
    padding: 3% 25%;
    border: none;
    border-radius: 5px;
    margin: 3% auto 10%;
    cursor: pointer;
    color: white;
    background-color: rgb(123, 180, 246);
    box-shadow: 0 2px 8px rgb(210, 220, 232);
  }
`;

const GoRegist = styled.div`
  width: 100%;
  border: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin: 5% auto;
  padding: 5% 0;
`;

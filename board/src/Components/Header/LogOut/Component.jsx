import styled from "styled-components";
import { Link } from "react-router-dom";

const LogOutComponent = ({ onClick, userName }) => {
  return (
    <LogOutBox>
      <Link to={`/post`}>글쓰기</Link>
      <div>{userName}님</div>
      <button
        className="logOutBtn"
        onClick={() => {
          onClick();
        }}
      >
        로그아웃
      </button>
    </LogOutBox>
  );
};

export default LogOutComponent;

const LogOutBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 3rem 0 3rem 10rem; */
  flex-wrap: nowrap;

  div {
    margin: auto 20px;
  }

  & .logOutBtn {
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(166, 191, 249, 0.26);
  }

  a {
    text-decoration: none;
    color: #1070c4a9;
    font-weight: 700;
  }
`;

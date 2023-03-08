import styled from "styled-components";
import { Link } from "react-router-dom";

const LogOutComponent = ({ onClick, userName, screen770 }) => {
  return (
    <LogOutBox>
      {screen770 && <Link to={`/post`}>글쓰기</Link>}
      <div>{userName}님</div>
      {screen770 && (
        <button
          className="logOutBtn"
          onClick={() => {
            onClick();
          }}
        >
          로그아웃
        </button>
      )}
    </LogOutBox>
  );
};

export default LogOutComponent;

const LogOutBox = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
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

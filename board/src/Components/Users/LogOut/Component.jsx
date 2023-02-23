import styled from "styled-components";

const LogOutComponent = ({ onClick, userName }) => {
  return (
    <LogOutBox>
      <div>{userName}님</div>{" "}
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;

  & .logOutBtn {
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(232, 80, 80, 0.26);
  }
`;

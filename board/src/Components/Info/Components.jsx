import styled from "styled-components";

const InfoComponent = () => {
  return (
    <InfoBox>
      <div>{userName}님 어서오세요😝</div>
      <button
        onClick={() => {
          onClick();
        }}
      >
        Log Out
      </button>
    </InfoBox>
  );
};

export default InfoComponent;

const InfoBox = styled.div``;

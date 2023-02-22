import styled from "styled-components";
import logo from "./img/instalogo.png";

const COLOR = "#921d7b";

const HeaderComponent = ({ moveTo, screen650 }) => {
  return (
    <HeaderBox>
      <FuncFrame>
        <FuncBar>
          <LeftFunc>
            <HoverBox>
              <div
                className="colorText"
                onClick={() => {
                  moveTo("/");
                }}
              >
                HOME
              </div>
              <div className="colorText">SEARCH</div>
              {screen650 && (
                <>
                  {" "}
                  <div className="colorText">REELS</div>
                  <div>ALARM</div>
                  <div>DM</div>
                </>
              )}
            </HoverBox>
            <img
              src={logo}
              alt=""
              style={{ width: "200px", marginLeft: "20%", cursor: "pointer" }}
              onClick={() => {
                moveTo("/");
              }}
            />
          </LeftFunc>
        </FuncBar>
      </FuncFrame>
    </HeaderBox>
  );
};

export default HeaderComponent;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: solid 2px ${COLOR};
`;

const FuncFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  border-top: solid 1px lightgray;
`;

const FuncBar = styled.div`
  width: 100%;
  max-width: 1268px;
  display: flex;
  min-width: 360px;
  justify-content: space-between;
`;

const HoverBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    width: fit-content;
    font-weight: 900;
    padding: 15px;
  }
  div:hover {
    color: white;
    background-color: ${COLOR};
  }
  & .colorText {
    color: ${COLOR};
  }
`;

const LeftFunc = styled.div`
  display: flex;
`;

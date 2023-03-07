// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/instalogo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogOutContainer from "./LogOut/Container";

const COLOR = "#1070c4a9";

const HeaderComponent = ({
  screen450,
  screen500,
  screen650,
  tempUser,
  setRender,
  theme,
}) => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  // const [view, setView] = useState(false);
  // 크기 줄이면 (500이 되면) 다운화살표 생기고
  // ~님 로그아웃 버튼 사라지고
  // 다운화살표 누르면 팝업 뜨게 setView(true)
  // 근데 이걸 반응형이랑 어떻게 합치(?)는지 모르겠음!

  // 반응형라이브러리 말고 CSS(스타일컴포넌트)로

  return (
    <HeaderBox>
      <FuncFrame>
        <LeftFunc>
          <HoverBox>
            {screen450 && (
              <>
                <div className="colorText" onClick={goMain}>
                  HOME
                </div>
                <div className="colorText">SEARCH</div>
              </>
            )}
            {screen650 && (
              <>
                <div className="colorText">REELS</div>
                <div>ALARM</div>
                <div>DM</div>
              </>
            )}
          </HoverBox>
          {screen650 ? (
            <img
              src={logo}
              alt=""
              style={{
                width: "15vw",
                margin: "5%",
                cursor: "pointer",
              }}
              onClick={goMain}
            />
          ) : (
            <img
              src={logo}
              alt=""
              style={{
                width: "20vw",
                margin: "5%",
                cursor: "pointer",
              }}
              onClick={goMain}
            />
          )}
          {tempUser.userId == "" ? (
            <></>
          ) : (
            <LogOutContainer
              userName={tempUser.userName}
              setRender={setRender}
              theme={theme}
            />
          )}
          {screen500 ? (
            <></>
          ) : (
            <ArrowDropDownIcon
              // onClick={goMain}
              style={{ cursor: "pointer" }}
            ></ArrowDropDownIcon>
          )}
        </LeftFunc>
      </FuncFrame>
    </HeaderBox>
  );
};

export default HeaderComponent;

const HeaderBox = styled.div`
  /* display: flex;
  align-items: center; */
  width: 100%;
  border-bottom: solid 2px ${COLOR};
`;

const FuncFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

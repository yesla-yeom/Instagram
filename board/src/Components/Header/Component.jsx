import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./img/instalogo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogOutContainer from "./LogOut/Container";

const COLOR = "#2c82c9";

const HeaderComponent = ({
  screen770,
  tempUser,
  setRender,
  theme,
  dropDownFunc,
  dropDown,
  onClick,
}) => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  const goPost = () => {
    navigate("/post");
  };

  return (
    <HeaderBox>
      <FuncFrame>
        <LeftFunc>
          <HoverBox>
            {screen770 ? (
              <>
                <div className="colorText" onClick={goMain}>
                  HOME
                </div>
                <div className="colorText">SEARCH</div>
                <div className="colorText">REELS</div>
              </>
            ) : (
              <>
                <ArrowDropDownIcon
                  className="arrowDown"
                  onClick={dropDownFunc}
                ></ArrowDropDownIcon>

                <div className={dropDown ? "dropList" : "dropListOff"}>
                  <div>
                    <li className="dropDownColorText" onClick={goMain}>
                      HOME
                    </li>
                    {tempUser.userId == "" ? (
                      <></>
                    ) : (
                      <>
                        <li onClick={goPost}>글쓰기</li>
                        <li onClick={onClick}>로그아웃</li>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </HoverBox>
          <div className="logoBox">
            {screen770 ? (
              <img src={logo} alt="" className="logoImage" onClick={goMain} />
            ) : (
              <img src={logo} alt="" className="logoImage" onClick={goMain} />
            )}
          </div>
          {tempUser.userId == "" ? (
            <></>
          ) : (
            <LogOutContainer
              userName={tempUser.userName}
              setRender={setRender}
              theme={theme}
              screen770={screen770}
            />
          )}
        </LeftFunc>
      </FuncFrame>
    </HeaderBox>
  );
};

export default HeaderComponent;

const HeaderBox = styled.div`
  width: 100%;
  border-bottom: solid 2px ${COLOR};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  background-color: rgba(255, 255, 255, 1);
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
  width: 38%;

  div {
    width: fit-content;
    font-weight: 900;
    padding: 5px;
  }

  & .colorText:hover {
    color: white;
    background-color: ${COLOR};
  }

  & .colorText {
    color: ${COLOR};
  }

  & .dropList:hover {
    border: 1px solid beige;
    background-color: aliceblue;
  }

  & .dropListOff {
    font-size: 0.7rem;
  }

  @media ${(props) => props.theme.mobileL} {
    width: 40%;
    position: relative;
    flex-direction: column;

    & .arrowDown {
      cursor: pointer;
      position: absolute;
      left: 13%;
      top: 3%;
      z-index: 20;
      padding: 0;
    }

    & .dropList {
      position: relative;
      top: 12%;
      left: -26%;
      font-size: 0.7rem;
    }

    & .dropListOff {
      opacity: 0;
    }

    & .colorText {
      display: none;
    }

    li {
      list-style: none;
      padding: 2px 0;
    }
  }

  @media ${(props) => props.theme.mobileM} {
    width: 40%;
    position: relative;
    flex-direction: column;

    & .arrowDown {
      left: 12%;
      top: 3%;
    }

    & .dropList {
      top: 13%;
      left: -20%;
    }
  }

  @media ${(props) => props.theme.mobileS} {
    width: 40%;
    position: relative;
    flex-direction: column;

    & .arrowDown {
      left: 10%;
      top: 3%;
    }

    & .dropList {
      top: 13%;
      left: -25%;
    }
  }
`;

const LeftFunc = styled.div`
  display: flex;
  width: 60%;

  & .logoBox {
    width: 30%;
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  & .logoImage {
    width: 80%;
  }

  @media ${(props) => props.theme.tabletS} {
    width: 100%;
    margin: 0;

    & .logoBox {
      width: 30%;
      margin: 0;
    }
  }

  @media ${(props) => props.theme.mobileM} {
    & .logoBox {
      width: 30%;
    }
  }

  @media ${(props) => props.theme.mobileL} {
    & .logoImage {
      width: 80%;
    }
  }
`;

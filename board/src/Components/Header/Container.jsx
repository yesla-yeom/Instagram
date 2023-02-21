import HeaderComponent from "./Component";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const HeaderContainer = () => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  const [keyWord, setKeyWord] = useState("");
  const screen500 = useMediaQuery({ minWidth: 500 });
  const screen650 = useMediaQuery({ minWidth: 650 });
  const screen450 = useMediaQuery({ minWidth: 450 });
  return (
    <HeaderComponent
      moveTo={moveTo}
      dropDown={dropDown}
      setDropDown={setDropDown}
      keyWord={keyWord}
      setKeyWord={setKeyWord}
      screen500={screen500}
      screen425={screen450}
      screen650={screen650}
    ></HeaderComponent>
  );
};

export default HeaderContainer;

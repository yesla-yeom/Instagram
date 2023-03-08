import HeaderComponent from "./Component";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import axios from "axios";

const HeaderContainer = ({ tempUser, setRender, theme }) => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const moveTo = (where) => {
    navigate(`/${where}`);
  };
  const screen770 = useMediaQuery({ minWidth: 770 });

  const dropDownFunc = () => {
    setDropDown((dropDown) => !dropDown);
  };

  const onClick = async () => {
    const data = await axios.post("http://192.168.0.242:8080/api/users/logout");

    if (data.status === 200) {
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <HeaderComponent
      moveTo={moveTo}
      dropDown={dropDown}
      setDropDown={setDropDown}
      screen770={screen770}
      tempUser={tempUser}
      setRender={setRender}
      theme={theme}
      dropDownFunc={dropDownFunc}
      onClick={onClick}
    ></HeaderComponent>
  );
};

export default HeaderContainer;

import RegistComponent from "./Component";
import axios from "axios";

const RegistContainer = ({ theme }) => {
  const onClick = (userId, userPw, userName) => {
    const data = axios.post("http://192.168.0.107:8080/api/users/regist", {
      userId,
      userPw,
      userName,
    });

    window.location.reload();
  };

  return <RegistComponent onClick={onClick} theme={theme} />;
};

export default RegistContainer;

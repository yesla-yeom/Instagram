import axios from "axios";
import LogInComponent from "./Component";

const LogInContainer = ({ setRender }) => {
  const onClick = async (userId, userPw) => {
    const data = await axios.post("http://192.168.0.107:8080/api/users/login", {
      userId: userId,
      userPw: userPw,
    });
    if (data.data === "로그인 완료") {
      setRender((state) => !state);
    }
  };

  return <LogInComponent logInClick={onClick}></LogInComponent>;
};

export default LogInContainer;

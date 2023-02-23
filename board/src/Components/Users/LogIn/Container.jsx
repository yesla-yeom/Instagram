import axios from "axios";
import LogInComponent from "./Component";

const LogInContainer = ({ setRender }) => {
  const onClick = async (userId, userPw) => {
    const data = await axios.post("http://localhost:8080/api/users/login", {
      userId: userId,
      userPw: userPw,
    });
    console.log(data.data);
    if (data.data === "로그인 완료") {
      alert("로그인 되었습니다");
      setRender((state) => !state);
    }
  };

  return <LogInComponent logInClick={onClick}></LogInComponent>;
};

export default LogInContainer;

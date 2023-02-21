import { useEffect } from "react";
import axios from "axios";
import LogInComponent from "./Component";

const LogInContainer = ({ userId, userPw }) => {
  useEffect(() => {});
  const onClick = async (userId, userPw) => {
    console.log("헤헤");
    const data = await axios.post("/api/login", {
      id: userId,
      pw: userPw,
    });
    console.log(data.data);
    if (data.data === "로그인 완료") {
      alert("로그인 되었습니다");
    }
  };

  return <LogInComponent logInClick={onClick}></LogInComponent>;
};

export default LogInContainer;

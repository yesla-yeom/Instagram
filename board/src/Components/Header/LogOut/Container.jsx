import axios from "axios";
import LogOutComponent from "./Component";

const LogOutContainer = ({ userName, theme, screen770 }) => {
  const onClick = async () => {
    const data = await axios.post("http://192.168.0.107:8080/api/users/logout");

    if (data.status === 200) {
      window.location.reload();
    }
  };

  return (
    <LogOutComponent
      userName={userName}
      onClick={onClick}
      theme={theme}
      screen770={screen770}
    />
  );
};

export default LogOutContainer;

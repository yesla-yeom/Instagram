import axios from "axios";
import LogOutComponent from "./Component";

const LogOutContainer = ({ userName, setRender }) => {
  const onClick = async () => {
    const data = await axios.post("http://localhost:8080/api/users/logout");

    if (data.status === 200) {
      window.location.reload();
    }
  };

  return <LogOutComponent userName={userName} onClick={onClick} />;
};

export default LogOutContainer;

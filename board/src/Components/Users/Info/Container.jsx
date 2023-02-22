import InfoComponent from "./Component";
import axios from "axios";

const InfoContainer = ({ setTest, userName }) => {
  const onClick = async () => {
    const data = await axios.post("/api/logout");
    if (data.status === 12341234) {
      await setTest(false);
    }
  };
  return (
    <InfoComponent onClick={onClick} setTest={setTest} userName={userName} />
  );
};

export default InfoContainer;

import EditComponent from "./Component";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const EditContainer = ({ userName, theme }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const takeValues = async () => {
    axios
      .post("http://192.168.0.242:8080/api/board/take", {
        editId: params.editId,
      })
      .then((data) => {
        if (userName !== data.data.tempValue.userName) navigate("/");
        setInputTitle(data.data.tempValue.title);
        setInputText(data.data.tempValue.text);
      });
  };

  const updateContent = async (_inputTitle, _inputText) => {
    await axios.post("http://192.168.0.242:8080/api/board/edit", {
      title: _inputTitle,
      text: _inputText,
      editId: params.editId,
    });
    navigate("/");
  };

  return (
    <EditComponent
      inputTitle={inputTitle}
      setInputTitle={setInputTitle}
      inputText={inputText}
      setInputText={setInputText}
      updateContent={updateContent}
      takeValues={takeValues}
      theme={theme}
    />
  );
};

export default EditContainer;

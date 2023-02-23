import TextComponent from "./Component";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const TextContainer = ({ userName }) => {
  const [titleDetail, setTitleDetail] = useState("");
  const [textDetail, setTextDetail] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [checkEdit, setCheckEdit] = useState(false);
  const params = useParams();

  const findDetail = async () => {
    const tempAxios = await axios.post(
      "http://localhost:8080/api/board/textdetail",
      {
        postId: params.postId,
      }
    );
    setTitleDetail(tempAxios.data.title);
    setTextDetail(tempAxios.data.text);
    setInputTitle(titleDetail);
    setInputText(textDetail);
  };

  const onClick = async () => {
    const tempAxios = await axios.post(
      "http://localhost:8080/api/board/editcheck",
      {
        postId: params.postId,
        userName,
      }
    );
    if (tempAxios.data.msg == "dif") return;
    else setCheckEdit(true);
  };

  const updateContent = async (_inputTitle, _inputText) => {
    await axios.post("http://localhost:8080/api/board/edit", {
      title: _inputTitle,
      text: _inputText,
      postId: params.postId,
    });
    window.location.reload();
  };

  useEffect(() => {
    findDetail();
  }, [checkEdit]);

  return (
    <TextComponent
      titleDetail={titleDetail}
      textDetail={textDetail}
      inputTitle={inputTitle}
      setInputTitle={setInputTitle}
      inputText={inputText}
      setInputText={setInputText}
      onClick={onClick}
      checkEdit={checkEdit}
      updateContent={updateContent}
      setCheckEdit={setCheckEdit}
    />
  );
};

export default TextContainer;

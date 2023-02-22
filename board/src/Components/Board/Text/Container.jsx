import TextComponent from "./Component";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const TextContainer = () => {
  const [titleDetail, setTitleDetail] = useState("");
  const [textDetail, setTextDetail] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [checkEdit, setCheckEdit] = useState(false);
  const params = useParams();
  console.log(params.postId);

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
    // 정보 띄워줌
  };

  const onClick = () => {
    setCheckEdit((state) => !state);
  };

  const updateContent = (_inputTitle, _inputText) => {
    axios.post("http://localhost:8080/api/board/edit", {
      title: _inputTitle,
      text: _inputText,
      postId: params.postId,
    });
  };

  useEffect(() => {
    findDetail();
    // 호출
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
    />
  );
};

export default TextContainer;
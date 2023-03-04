import styled from "styled-components";
import React, { useState } from "react";

const PostComponent = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoUpload, setPhotoUpload] = useState("");
  const [isImg, setIsImg] = useState(false);
  const [tempArr, setArr] = useState([]);

  const imgChange = (imgFile) => {
    if (imgFile.files && imgFile.files[0]) {
      const readImg = new FileReader();
      readImg.onload = (e) => {
        setPhoto(e.target.result);
        setIsImg(true);
      };
      readImg.readAsDataURL(imgFile.files[0]);
      setPhotoUpload(imgFile.files[0]);
    } else if (imgFile.files.length === 0) {
      setPhoto("");
    }
  };

  return (
    <PostBox>
      <MulterName></MulterName>
      {isImg ? <Photo src={photo}></Photo> : <></>}
      <MulterContainer>
        <MulterBox
          onChange={(e) => {
            setArr(e.target.files);
            imgChange(e.target);
          }}
          type={"file"}
          name={"photoUpload"}
          id={"photoUpload"}
          placeholder={"사진"}
          autocomplete={"off"}
          multiple
        />
      </MulterContainer>

      <PostFrame>
        <input
          type={"text"}
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
          placeholder={"TITLE"}
          className="title"
        />

        <textarea
          type={"text"}
          value={text}
          onInput={(e) => {
            setText(e.target.value);
          }}
          placeholder={"TEXT"}
          className="text"
          cols={"30"}
          rows={"15"}
        />

        <button
          className="registBtn"
          onClick={() => {
            onClick(title, text, tempArr);
            setTitle("");
            setText("");
            setIsImg(false);
          }}
        >
          Add Post
        </button>
      </PostFrame>
    </PostBox>
  );
};

export default PostComponent;

const PostBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 400px;
`;

const MulterName = styled.span`
  color: grey;
  display: flex;
  justify-content: center;
`;

const MulterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MulterBox = styled.input``;

const PostFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30%;
  margin: 3rem auto;

  & .title {
    background-color: aliceblue;
    border-radius: 5px;
    margin: 5px;
    padding: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  & .text {
    width: 100%;
    resize: none;
    background-color: #921d7b;
    color: white;
    border: 1 px #000;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  & .registBtn {
    font-size: 1rem;
    padding: 5px;
    border: none;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
  }
`;

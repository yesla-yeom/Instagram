import PostComponent from "./Component";
import axios from "axios";

const PostContainer = ({ setBoardList, theme }) => {
  const listUp = async () => {
    const tempAxios = await axios.post(
      "http://192.168.0.242:8080/api/board/list"
    );
    console.log(tempAxios.data.list);
    setBoardList(tempAxios.data.list);
  };
  const onClick = async (title, text, photoUpload) => {
    let formData = new FormData();
    console.log(photoUpload);
    formData.append("title", title);
    formData.append("text", text);
    for (let i = 0; i < photoUpload.length; i++) {
      formData.append("photoUpload", photoUpload[i]);
    }

    await axios.post("http://192.168.0.242:8080/api/board/post", formData);
    await listUp();
  };
  return <PostComponent onClick={onClick} theme={theme}></PostComponent>;
};

export default PostContainer;

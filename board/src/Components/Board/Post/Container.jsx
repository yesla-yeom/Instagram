import PostComponent from "./Component";
import axios from "axios";

const PostContainer = ({ setBoardList }) => {
  const listUp = async () => {
    const tempAxios = await axios.post("http://localhost:8080/api/board/list");
    setBoardList(tempAxios.data.list);
  };
  const onClick = async (title, text, photoUpload) => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("photoUpload", photoUpload);

    await axios.post("http://localhost:8080/api/board/post", formData);
    await listUp();
  };
  return <PostComponent onClick={onClick}></PostComponent>;
};

export default PostContainer;

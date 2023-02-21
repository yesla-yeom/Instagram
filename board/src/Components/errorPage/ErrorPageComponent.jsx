import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img1 from "./images/warning.gif";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <ErrorBox>
      <div className="title1">JOBKOREA</div>
      <div className="title2">BY JJOB KOREA</div>{" "}
      <div className="warning">
        <img src={img1} alt="asd" onClick={goHome} />
      </div>
      <div className="notFound" onClick={goHome}>
        404
        <br />
        Page not found
      </div>
    </ErrorBox>
  );
};

export default ErrorPage;

const ErrorBox = styled.div`
  background-color: black;
  background-repeat: no-repeat;
  color: white;
  width: 100%;
  height: 100%;
  position: relative;

  & .title1 {
    font-size: 5.5em;
    font-weight: 700;
    padding: 0.5em 0 0 1em;
  }
  & .title2 {
    font-size: 4em;
    font-weight: 600;
    padding-left: 1.3em;
  }
  & .notFound {
    font-size: 8em;
    font-weight: 600;
    padding: 0 0em 1em 0em;
    color: gray;
    text-align: center;
  }
  & .warning {
    font-size: 3em;
    font-weight: 500;
    padding: 1em 1em;
    color: white;
    display: flex;
    justify-content: center;
  }
  & .homeIcon {
    display: flex;
    justify-content: center;
    color: white;
    cursor: pointer;
    position: absolute;
    right: 200px;
    top: 150px;
    width: 300px;
    height: 100px;
  }
`;

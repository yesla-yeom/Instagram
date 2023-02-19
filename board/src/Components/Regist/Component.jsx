import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DaumPostcode from "react-daum-postcode";

const COLOR = "#dc2cbc";

const Component = ({
  registClick,
  handle,
  openPostcode,
  individualAddress,
}) => {
  const [individualName, setIndividualName] = useState("");
  const [individualId, setIndividualId] = useState("");
  const [individualPw, setIndividualPw] = useState("");
  const [individualPwCheck, setIndividualPwCheck] = useState("");
  const [individualEmail, setIndividualEmail] = useState("");
  const [individualTel, setIndividualTel] = useState("");
  const [individualInfoValid, setIndividualInfoValid] = useState("");
  const [pwCheck, setPwCheck] = useState(false);
  const [individualPhoto, setIndividualPhoto] = useState("");
  const [individualPhotoUpload, setIndividualPhotoUpload] = useState("");

  const imgChanage = (imgFile) => {
    if (imgFile.files && imgFile.files[0]) {
      const readImg = new FileReader();
      readImg.onload = (e) => {
        setIndividualPhoto(e.target.result);
      };
      readImg.readAsDataURL(imgFile.files[0]);
      setIndividualPhotoUpload(imgFile.files[0]);
      console.log(imgFile.files[0]);
    } else if (imgFile.files.length === 0) {
      setIndividualPhoto("");
    }
  };

  const smallScreen = useMediaQuery({ minWidth: 300 });
  const navigate = useNavigate();

  const handlieClickRadio = (e) => {
    console.log(e.target.value);
    setIndividualInfoValid(e.target.value);
  };
  useEffect(() => {
    if (individualPw.length > 0 && individualPw === individualPwCheck) {
      setPwCheck(true);
    } else {
      setPwCheck(false);
    }
  }, [individualPw, individualPwCheck]);

  return (
    <IndividualRegistBox>
      <IndividualRegistFrame>
        <Header>
          <Title className={smallScreen ? "" : "TitleSmall"}>JJOBKOREA</Title>

          <WhoRegist>
            <MemberRegist className={smallScreen ? "" : "RegistSmall"}>
              회원가입
            </MemberRegist>
          </WhoRegist>
        </Header>

        <MemberRegistDiv>
          <RegistMessage className={smallScreen ? "" : "MessageSmall"}>
            회원가입하고 다양한 혜택을 누리세요!
          </RegistMessage>
        </MemberRegistDiv>

        <Multername>사진을 등록해주세요</Multername>
        <IndividualPhoto src={individualPhoto}></IndividualPhoto>
        <Multercontainer>
          <MulterBox
            onChange={(e) => {
              imgChanage(e.target);
            }}
            type={"file"}
            name={"individualPhotoUpload"}
            id={"individualPhotoUpload"}
            placeholder={"개인 사진"}
            autocomplete={"off"}
          />
        </Multercontainer>

        <InputDiv>
          <input
            type="text"
            className={smallScreen ? "input" : "InputSmall"}
            value={individualName}
            placeholder="이름(실명) *"
            onInput={(e) => {
              setIndividualName(e.target.value);
            }}
          />
          <input
            type="text"
            className={smallScreen ? "input" : "InputSmall"}
            value={individualId}
            placeholder="아이디 *"
            onInput={(e) => {
              setIndividualId(e.target.value);
            }}
          />
          <input
            type="password"
            className={smallScreen ? "input" : "InputSmall"}
            value={individualPw}
            placeholder="비밀번호(8자 이상의 16자리 이하의 영문, 숫자, 특수기호) *"
            onInput={(e) => {
              setIndividualPw(e.target.value);
            }}
          />
          <input
            type="password"
            className={smallScreen ? "input" : "InputSmall"}
            value={individualPwCheck}
            placeholder="비밀번호 확인 *"
            onInput={(e) => {
              setIndividualPwCheck(e.target.value);
            }}
          />
          {individualPwCheck.length > 0 ? (
            pwCheck ? (
              <div>비밀번호가 동일합니다.</div>
            ) : (
              <div>비밀번호가 다릅니다.</div>
            )
          ) : (
            <></>
          )}
          <input
            type="email"
            className={smallScreen ? "input" : "InputSmall"}
            value={individualEmail}
            placeholder="이메일 *"
            onInput={(e) => {
              setIndividualEmail(e.target.value);
            }}
          />
          <input
            type="tel"
            className={smallScreen ? "input" : "InputSmall"}
            value={individualTel}
            placeholder="휴대폰번호 *"
            onInput={(e) => {
              setIndividualTel(e.target.value);
            }}
          />
          <input
            type="text"
            className={smallScreen ? "input" : "InputSmall"}
            value={individualAddress}
            placeholder="주소 *"
            onClick={handle.clickButton}
            onInput={(e) => {
              e.preventDefault();
            }}
          />

          {openPostcode && (
            <DaumPostcode
              onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
              autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
            />
          )}
        </InputDiv>

        <RadioTitle>개인정보 유효기간 선택 *</RadioTitle>
        <Radio>
          <input
            type="radio"
            name="infoValid"
            className="radio"
            value="1year"
            onChange={handlieClickRadio}
          />
          1년
          <input
            type="radio"
            name="infoValid"
            className="radio"
            value="3years"
            onChange={handlieClickRadio}
          />
          3년
          <input
            type="radio"
            name="infoValid"
            className="radio"
            value="withdraw"
            onChange={handlieClickRadio}
          />
          회원탈퇴시
        </Radio>

        <MemberRegistBtn
          className={smallScreen ? "" : "SmallBtn"}
          onClick={() => {
            const nameRegExp = /^[가-힣|a-z|A-Z]/;
            const idRegExp = /^[a-zA-Z0-9]{6,13}$/;
            const pwRegExp =
              /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,17}$/;
            const emailRegExp =
              /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            const telRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

            const name = nameRegExp.test(individualName);
            const id = idRegExp.test(individualId);
            const pw = pwRegExp.test(individualPw);
            const email = emailRegExp.test(individualEmail);
            const tel = telRegExp.test(individualTel);
            if (
              name &&
              id &&
              pw &&
              email &&
              tel &&
              individualAddress != "" &&
              pwCheck &&
              individualPhoto &&
              individualInfoValid != ""
            ) {
              registClick(
                individualPhotoUpload,
                individualName,
                individualId,
                individualPw,
                individualEmail,
                individualTel,
                individualInfoValid,
                individualAddress
              );
              navigate("/");
            } else if (!name) {
              alert("이름을 한글 또는 영문으로 입력하세요.");
            } else if (!id) {
              alert(
                "아이디를 6자리 이상 ~ 12자리 미만의 영문, 숫자만 입력하세요."
              );
            } else if (!pw) {
              alert(
                "비밀번호를 8자리 이상 ~ 16자리 이하의 영문 대/소문자, 숫자, 특수기호(!@#$%^*+=-)만 입력하세요."
              );
            } else if (!email) {
              alert("이메일 형식이 올바르지 않습니다");
            } else if (!tel) {
              alert("휴대폰번호 형식이 올바르지 않습니다.");
            } else if (!individualAddress) {
              alert("주소를 입력하세요.");
            } else if (!pwCheck) {
              alert("비밀번호를 확인하세요.");
            } else if (individualPhoto == "") {
              alert("사진을 넣어주세요.");
            } else if (individualInfoValid == "") {
              alert("개인정보 유효기간을 선택해주세요.");
            }
          }}
        >
          가입하기
        </MemberRegistBtn>
      </IndividualRegistFrame>
    </IndividualRegistBox>
  );
};

export default Component;

const IndividualRegistBox = styled.div`
  width: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IndividualRegistFrame = styled.div`
  background-color: #fff;
  max-width: 700px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  position: sticky;
  & .TitleSmall {
    font-size: 2em;
  }
`;

const Title = styled.div`
  font-size: 3em;
  font-weight: 700;
  color: ${COLOR};
`;

const WhoRegist = styled.div`
  display: flex;
  justify-content: center;
  max-width: 700px;
  width: 100%;
  background-color: white;
  color: ${COLOR};
  font-size: 2em;
  font-weight: 700;
  & .RegistSmall {
    font-size: 18px;
  }
`;

const MemberRegistDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & .MessageSmall {
    font-size: 13px;
  }
`;

const MemberRegist = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  padding: 15px 0;
  background-color: ${COLOR};
  color: white;
  font-size: 25px;
  font-weight: 700;
  border-bottom: 1px solid ${COLOR};
`;

const RegistMessage = styled.div`
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px;
`;

const IndividualPhoto = styled.img`
  width: 15%;
  padding-left: 20%;
`;

const Multername = styled.span`
  color: grey;

  display: flex;
  justify-content: end;
`;

const Multercontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const MulterBox = styled.input``;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.inputSmall {
    padding: 10px;
    margin: 10px;
    width: 50%;
  }
  & .input {
    padding: 20px;
    margin: 10px 0;
    width: 80%;
  }
`;

const MemberRegistBtn = styled.div`
  border: none;
  display: flex;
  justify-content: center;
  bottom: 0;
  padding: 10px;
  background-color: ${COLOR};
  color: white;
  font-size: 1.7em;
  font-weight: 700;
  cursor: pointer;
  & .SmallBtn {
    font-size: 10px;
    color: red;
  }
`;

const RadioTitle = styled.div`
  margin: 5px;
  text-align: center;
`;

const Radio = styled.div`
  margin: 5px auto;
  text-align: center;
`;

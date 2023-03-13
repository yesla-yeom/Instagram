import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommentContainer from "../Comment/Container";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Pagination, Navigation } from "swiper";

const ListComponent = ({
  boardList,
  removePost,
  commentList,
  setCommentList,
  theme,
}) => {
  return (
    <ListBox>
      <ListFrame theme={theme}>
        {[...boardList].reverse().map((item, index) => (
          <div style={{ width: "100%" }} key={`boardListBox - ${index}`}>
            <div className="userName" key={`boardBox - ${index}`}>
              {item.userName}
            </div>
            <div className="swiperBox" key={`innerText - ${index}`}>
              <Swiper
                pagination={{
                  type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {[...new Array(10)].map(
                  (_, idx) =>
                    item[`photo${idx + 1}`] && (
                      <SwiperSlide>
                        <img
                          src={`http://192.168.0.242:8080/uploads/${
                            item[`photo${idx + 1}`]
                          }`}
                        />
                      </SwiperSlide>
                    )
                )}
              </Swiper>
            </div>
            <div className="title">{item.title}</div>
            <div>{item.text}</div>
            <CommentContainer
              commentList={commentList}
              setCommentList={setCommentList}
              id={item.id}
            />
            <div className="btn">
              <Link to={`/edit/${item.id}`}>수정</Link>
            </div>
            <div
              className="btn"
              onClick={() => {
                removePost(item.id);
              }}
            >
              삭제
            </div>
          </div>
        ))}
      </ListFrame>
    </ListBox>
  );
};

export default ListComponent;

const ListBox = styled.div`
  width: 100vw;
  padding-top: 5%;

  @media ${(props) => props.theme.tabletS} {
    padding-top: 20%;
    width: 100%;
  }
  @media ${(props) => props.theme.mobileM} {
    padding-top: 30%;
    width: 100%;
  }
`;

const ListFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 3rem auto;
  padding: 3rem;
  text-align: center;

  @media ${(props) => props.theme.tabletL} {
    padding-top: 10%;
    width: 100%;

    & .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  & .swiperBox {
    width: 100%;
    position: relative;
    margin: 0 auto;

    & .swiper-button-prev,
    .swiper-button-next {
      z-index: 10;
    }

    @media ${(props) => props.theme.mobileL} {
      padding-top: 10%;
      width: 100%;

      & .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  }

  & .userName {
    font-weight: 900;
    font-size: x-large;
    color: #178cdf;
  }

  & .title {
    font-weight: 900;
    color: #00000093;
  }

  & .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin: auto;
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  & > div > div:nth-child(7) {
    margin-bottom: 7rem;
  }

  a:first-child {
    text-decoration: none;
    color: black;
  }

  @media ${(props) => props.theme.tabletS} {
    width: 100%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.mobileM} {
    width: 100%;
  }

  @media ${(props) => props.theme.mobileS} {
    width: 150%;
  }
`;

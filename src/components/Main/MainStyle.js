import styled from "styled-components";
import topImg from "../../assets/images/image33.png";
import tree from "../../assets/images/tree.svg";
import bulut from "../../assets/images/bulut.png";
import about__bg from "../../assets/images/about_bg.svg";

const MainSytles = styled.main`
  background-image: url(${tree});
  background-position: 0 0;
  background-repeat: no-repeat;
  & .top {
    background-image: url(${topImg});
    width: 100%;
    height: 152px;
    background-repeat: repeat-x;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    /* background-position: center; */
    /* background-size: cover; */
  }
  & .production__title {
    font-family: "Gilroy";
    font-weight: 800;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin-top: 117px;
  }
  & .production__desc {
    font-family: "Roboto";
    font-size: 1rem;
    margin: 15px 0 42px;
  }
  & .production__items {
    display: grid;
    grid-gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(492px, 1fr));
    & .production__card {
    }
  }
  & #about {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      background-image: url(${bulut});
      background-repeat: no-repeat;
      background-position: right;
      width: 400px;
      height: 525px;
      right: 0;
      top: -300px;
      z-index: -1;
    }
    margin-top: 10.688rem;
    .about__inners {
      display: flex;
      .about__left {
        flex: 1;
        padding-top: 59px;
        .about__title {
          font-family: "Gilroy";
          font-weight: 800;
          font-size: 3.5rem;
          line-height: 3.5rem;
          text-transform: uppercase;
        }
        .about__desc {
          font-family: "Roboto";
          font-size: 1rem;
          margin: 35px 0;
        }
        .about__more-links {
          color: var(--green);
          padding: 11px 35px;
          border-radius: 26px;
          border: 2px solid transparent;
          transition: all 0.1s;
          &:hover {
            border: 2px solid var(--green);
          }
        }
      }
      .about__right {
        flex: 1;
        position: relative;
        .about__img {
          position: absolute;
        }
        .img3 {
          right: 0;
          z-index: -5;
        }
        .img1 {
          top: 167px;
          left: 59px;
          z-index: -3;
        }
        .img2 {
          z-index: -4;
        }
      }
    }
    & .about__bottom {
      height: 170px;
      background-image: url(${about__bg});
      background-repeat: repeat-x;
      margin-top: 16rem;
      .about__carusel {
        /* display: flex; */
        height: 170px;
        padding: 68px 0;
      }
    }
    .ant-carousel .slick-prev,
    .ant-carousel .slick-prev:focus,
    .ant-carousel .slick-prev:hover {
      left: 10px;
      z-index: 2;
      color: var(--green);
    }

    .ant-carousel .slick-next,
    .ant-carousel .slick-next:focus,
    .ant-carousel .slick-next:hover {
      right: 10px;
      z-index: 2;
      color: var(--green);
      border-radius: 50%;
      border: 2px solid var(--green);
      padding: 10px;
      width: 53px;
      height: 53px;
    }
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      top: 18%;
    }
    .slick-dots {
      display: none !important;
    }
  }
`;

export default MainSytles;

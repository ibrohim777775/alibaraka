import styled from "styled-components";
import topImg from "../../assets/images/image33.png";
import tree from "../../assets/images/tree.svg";
import bulut from "../../assets/images/bulut.png";
import about__bg from "../../assets/images/about_bg.svg";
import flag from "../../assets/images/flag.png";

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
  .ant-collapse {
    background: none;
  }

  .ant-collapse > .ant-collapse-item {
    /* color: var(--green); */
    border: none;
    &:nth-child(even) {
      color: #fcbd17;
    }
    &:nth-child(odd) {
      color: var(--green);
    }
  }
  .ant-collapse-header {
    color: currentColor !important;
    font-family: "Gilroy";
    font-weight: 800;
    font-size: 1rem;
    & div {
      & svg {
        /* font-family: "Gilroy"; */
        /* font-weight: 800; */
        font-size: 18px !important;
      }
    }
  }
  .acc__icon {
  }
  & #blog {
    background-image: url(${flag});
    background-repeat: no-repeat;
    background-position: 0 0;
    .blog__top {
      display: flex;
      justify-content: right;
      .blog__right {
        width: 50%;
        & .blog__title {
          font-size: 2.5rem;
          color: var(--green);
          font-family: "Gilroy";
          font-weight: 800;
          line-height: 2.188rem;
          margin-top: 7.688rem;
        }
        & .blog__desc {
          font-size: 1rem;
          line-height: 1.625rem;
          color: #1e252b;
          margin-bottom: 1.75rem;
        }
      }
    }
    .blog__bottom {
      & .bottom__title {
        color: #444444;
        font-size: 1.75rem;
        font-family: "Gilroy";
        font-weight: 800;
        padding-top: 6.938rem;
        margin-bottom: 19px;
      }
      .bottom__items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(492px, 1fr));
        & .bottom__left {
          position: relative;
          .bottom__img {
            box-shadow: 10px 19px 20px 20px #f1f1f1;
          }
          .bottom__info {
            position: absolute;
            width: 276px;
            height: 336px;
            bottom: 0;
            left: -60px;
            box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            padding: 30px 34px 30px 30px;
            .info__title {
              font-size: 1.125rem;
              font-family: "Gilroy";
              font-weight: 800;
              line-height: 1.563rem;
              color: var(--green);
            }
            .info__desc {
              font-family: "Poppins";
              color: #050505;
              font-size: 0.813rem;
              line-height: 1.438rem;
              margin: 22px 0 18px;
            }
            .info__author {
              color: var(--green);
              font-family: "Gilroy";
              font-weight: 800;
              font-size: 0.813rem;
              line-height: 1.438rem;
            }
          }
          & .bottom__link {
            background-color: var(--green);
            box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.3);
            border-radius: 49px;
            color: #fff;
            padding: 11px 30px;
            font-size: 15px;
            line-height: 23px;
            font-family: "Gilroy";
            position: absolute;
            bottom: 35px;
            right: 110px;
            transition: all 0.2s;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        & .bottom__right {
          .bottom__right-title {
            font-weight: 800;
            font-family: "Gilroy";
            color: #444444;
            font-size: 2.625rem;
            line-height: 2.493rem;
            margin-bottom: 19px;
          }
          .right__items {
            border-top: 1px solid #dadada;
            padding: 14px 0 19px;
            .right__items-title {
              font-family: "Gilroy";
              font-style: normal;
              font-weight: 800;
              font-size: 20px;
              line-height: 25px;
              color: var(--green);
            }
            .right__items-desc {
              font-family: "Gilroy";
              font-style: normal;
              /* font-weight: 300; */
              font-size: 15px;
              line-height: 23px;
              color: #363636;
              margin: 8px 0 24px;
            }
            .right__items-link {
              font-family: "Gilroy";
              font-style: normal;
              font-size: 14px;
              line-height: 23px;
              color: var(--green);
              transition: all 0.2s;
              &:hover {
                font-weight: 800;
              }
            }
          }
        }
      }
    }
  }
  & #contact {
    margin-top: 14rem;
    margin-bottom: 10.313rem;
    .contact__wrapper {
      margin: 0 auto;
      max-width: 540px;
      box-shadow: 0px 8px 28px rgba(83, 83, 83, 0.15);
      border-radius: 15px;
      .contact__img {
        width: 100%;
      }
      .contact__items {
        padding: 0 40px 48px 40px;
        display: flex;
        flex-direction: column;
        position: relative;
        & .circle {
          position: absolute;
          width: 206px;
          height: 206px;
          border-radius: 50%;
          background-color: #fed372;
          right: -161px;
          bottom: 69px;
          @media (max-width: 992px) {
            /* display: none; */
            right: 0;
            z-index: -56;
          }
        }
        & .left {
          position: absolute;
          left: -131px;
          top: -25px;
        }
        .contact__title {
          font-family: "Gilroy";
          font-style: normal;
          font-weight: 800;
          font-size: 29px;
          line-height: 28px;
          text-align: center;
          text-transform: uppercase;
          color: #000000;
          margin: 40px 22px;
        }
        .contact__desc {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          text-align: center;
          color: #000000;
        }
        .form__top {
          display: flex;
          gap: 25px;
          margin-top: 1.375rem;
          margin-bottom: 2.438rem;
          & .contact__input {
            /* line-height: 60px; */
            flex: 1;
          }
        }
        .contact__input {
          outline: none;
          background: #f8f8f8;
          border: 1px solid #e7e7e7;
          box-sizing: border-box;
          border-radius: 6px;
          font-family: "Gilroy";
          font-style: normal;
          font-size: 15px;
          color: #000000;
          padding: 10px 14px;
        }
        & textarea {
          height: 140px;
          resize: none;
          margin-bottom: 2.625rem;
        }
        & .contact__btn {
          background: #037b35;
          border-radius: 30px;
          border: none;
          outline: none;
          height: 52px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Gilroy";
          font-style: normal;
          font-weight: 800;
          font-size: 15px;
          color: #ffffff;
          transition: all 0.2s;
          &:hover {
            cursor: pointer;
            transition: all 0.2s;

            transform: scale(1.05);
          }
        }
      }
    }
  }
`;

export default MainSytles;

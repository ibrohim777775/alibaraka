import styled from "styled-components";
import topImg from "../../assets/images/image33.png";

const FooterStyles = styled.footer`
  background-color: var(--green);
  height: 484px;
  .bottom__bg {
    background-image: url(${topImg});
    background-position: bottom left;
    background-repeat: repeat-x;
    background-size: contain;
    height: 81px;
    width: 100%;
  }
  & .footer__top {
    padding-top: 5.625rem;
    padding-bottom: 2.875rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    .footer__left-info {
      margin-top: 1.688rem;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 25px;
      color: #fff;
      .footer__tel,
      .footer__mail {
        color: #fff;
      }
    }
    .footer__right {
      padding-top: 2.5rem;
      display: flex;
      gap: 50px;
      .footer__items {
        .footer__title {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 25px;
          color: #ffffff;
          margin-bottom: 10px;
        }
        & ul {
          list-style: none;
          & .footer__link {
            margin-bottom: 7px;
            & a {
              font-family: "Poppins";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 21px;
              color: #60b45a;
              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  & .footer__bottom {
    display: flex;
    justify-content: space-between;
    padding: 1.688rem 0 2.188rem;
    align-items: center;
    .bottom__text,
    .bottom__right {
      color: #fff;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 400;
      font-size: 13.5px;
      line-height: 17px;
    }
    .bottom__right {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`;
export default FooterStyles;

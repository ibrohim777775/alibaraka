import styled from "styled-components";

const MediaStyles = styled.div`
  @media (max-width: 576px) {
    .container {
      max-width: 576px;
      /* padding: 0; */
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 768px;
    }
    .blog__right {
      width: 100% !important;
    }
  }

  @media (max-width: 992px) {
    .container {
      max-width: 992px;
    }
    .header__right:after {
      display: none;
    }
    .play__icon:after {
      display: none;
    }
    .header__items {
      flex-direction: column;
      margin-top: 10vh;
      & .header__right {
        justify-content: center;
        margin-top: 35px;
        & .play__icon {
          width: 125px;
          height: 125px;
          padding-left: 6px;
        }
      }
    }
    .about__inners {
      flex-direction: column;
      .about__right {
        display: none;
      }
    }
    .production__items,
    .bottom__items {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
    .bottom__left {
      display: flex;
      justify-content: center;
      margin-bottom: 75px;
      .bottom__info {
        left: 0 !important;
      }
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1200px;
    }
  }
`;

export default MediaStyles;

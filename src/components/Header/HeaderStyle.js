import styled from "styled-components";
import bgimg from "../../assets/images/header__bg.png";

const StyledHeader = styled.div`
  /* #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    
  } */
  & .header {
    min-width: 100%;
    min-height: 100vh;
    /* position: relative; */
    background-image: url(${bgimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotateY(180deg);
    & .container {
      transform: rotateY(180deg);
    }
    overflow: hidden;
  }

  /* Add some content at the bottom of the video/page */
  .content {
    position: fixed;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
  }

  /* Style the button used to pause/play the video */
  #myBtn {
    width: 200px;
    font-size: 18px;
    padding: 10px;
    border: none;
    background: #000;
    color: #fff;
    cursor: pointer;
  }

  #myBtn:hover {
    background: #ddd;
    color: black;
  }
  .pages {
    color: #316685;
    text-align: center;
    font-size: calc(1.5rem + 2vw);
    margin-top: 10%;
  }

  .navbar {
    /* height: 80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding-top: 35px;
    /* position: sticky; */
    /* top: 0; */
    /* z-index: 20; */
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    max-width: 1500px;
  }

  .main-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav-logo {
    cursor: pointer;
    text-decoration: none;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    /* margin-right: 2rem; */
    align-items: center;
  }

  .nav-links {
    color: #fff;
    font-family: "Gilroy";
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;
    font-size: 1rem;
  }
  .fa-code {
    margin-left: 1rem;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  .nav-item:hover:after {
    width: 100%;
    background: var(--green);
  }

  .nav-item.active {
    color: #ffdd40;
    border: 1px solid #ffdd40;
  }

  .nav-icon {
    display: none;
  }
  .nav-item-phone {
    color: var(--green);
    display: flex;
    align-items: center;
    gap: 12px;
    & .phone {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid var(--green);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & .phone__icon {
      font-size: 18px;
      /* padding: 8px; */
    }
  }
  .nav-links-phone {
    color: inherit;
    text-decoration: none;
    font-family: "Zona Pro";
    font-size: 0.844rem;
  }
  .header__items {
    display: flex;
    margin-top: 23vh;
    & .header__left {
      flex: 1;
      & .title {
        font-family: "Gilroy";
        font-weight: 800;
        font-size: 4.188rem;
        color: #fff;
        -webkit-text-stroke: 1px var(--green);
      }
      & .header__desc {
        font-size: 1.125rem;
        line-height: 1.875rem;
        color: rgba(255, 255, 255, 0.55);
        margin: 15px 0;
      }
      & .header__left-link {
        text-decoration: none;
        color: #fff;
        padding: 12px 33px;
        background-color: #fcbd17;
        border-radius: 26.5px;
        display: flex;
        align-items: center;
        width: max-content;
        gap: 8px;
        font-family: "Poppins";
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
          box-shadow: 1px 1px 20px 0px #e4e4e4;
        }
      }
    }
    & .header__right {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: end;
      position: relative;
      &:after {
        position: absolute;
        content: "";
        width: 50vw;
        height: 461px;
        border: 1px solid var(--green);
        top: -44px;
        left: 0;
        border-top-left-radius: 240px;
        border-bottom-left-radius: 240px;
        z-index: -500;
      }
      & .play__icon {
        width: 179px;
        height: 179px;
        background: rgb(254, 211, 114, 0.5);
        /* opacity: 0.5; */
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: relative;
        padding-left: 10px;
        &:after {
          content: "";
          position: absolute;
          width: 275px;
          height: 275px;
          border: 1px solid var(--green);
          box-sizing: border-box;
          transform: rotate(45deg) translateX(-10px);
          z-index: -400;
        }
        &:hover {
          cursor: pointer;
        }
        & .play {
          color: #fcbd17;
          opacity: 1;
          font-size: 4rem;
        }
      }
    }
  }
  @media screen and (max-width: 960px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1pxsolid #fff;
      position: absolute;
      top: 95px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #1f5156;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #ffdd40;
      border: none;
    }
    .nav-links {
      padding: 1rem;
      width: 100%;
      display: table;
    }
    .nav-item-phone {
      padding: 1rem;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 28px;
      cursor: pointer;
      color: var(--green);
    }
    .navbar {
      padding-top: 15px;
    }
  }
`;
export default StyledHeader;

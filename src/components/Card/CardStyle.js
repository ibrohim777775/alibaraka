import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 48px 17px 17px;
  border: 1px solid #d9dcec;
  border-radius: 8px;
  box-sizing: border-box;
  gap: 25px;
  @media (max-width: 992px) {
    padding: 17px;
  }
  &:hover {
    border: 3px solid var(--green);
    padding: 15px 46px 15px 15px;
  }
  & .img {
    /* flex: 2; */
    /* width: 40%;   */
    /* max-height: 166px; */
    width: 206px;
    height: 166px;
    & .card__img {
      object-fit: cover;
      border-radius: 8px;
      /* width: 100%; */
      height: 100%;
    }
  }
  & .info {
    /* flex: 3; */
    & .title {
      font-family: "Gilroy";
      font-weight: 800;
      text-transform: uppercase;
      font-size: 1.25rem;
    }
    & .desc {
      font-family: "Roboto";
      font-size: 0.728rem;
      line-height: 1.249rem;
      margin-top: 13px;
    }
  }
`;

export default CardStyle;

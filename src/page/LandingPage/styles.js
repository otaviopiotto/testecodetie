import styled, { keyframes } from 'styled-components';

const motion = keyframes`
0%{
left:-400px;
}
50%{
left:0px;
}
100%{
left:-400px;

}
`;

export const MainContainer = styled.div`
  width: 100%;
  background: #ffffff;
  position: relative;
  overflow-x: hidden;

  @media screen and (max-width: 960px) {
    .division-animation {
      height: 90px !important;
    }
  }

  .instagram-call {
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 48px;
      color: var(--SecondaryColor);
      font-family: 'DIN';
      text-align: center;
    }

    a {
      width: 228px;
      height: 62px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 2px 10px 12px;
      color: var(--SecondaryColor);
      font-family: 'DIN-Regular';
      font-size: 18px;
      border: 1px solid var(--SecondaryColor);
      border-radius: 99px;
      position: relative;

      .instagram-tag {
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        transition: 0.3s;
        z-index: 2;
        color: white;
        transition: 0.4s;
        transition-delay: ease-in 0.3s;
      }

      .hover-animation {
        width: 58px;
        height: 58px;
        border-radius: 99px;
        background: var(--SecondaryColor);
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 1px;
        z-index: 1;
        transition: 0.3s;
      }

      .insta-call {
        opacity: 1;
        transition: 0.3s;
      }
      div {
        width: 58px;
        height: 58px;
        border-radius: 99px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--SecondaryColor);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 74%;
        z-index: 2;
        transition: 0.3s;

        svg {
          font-size: 23px;
          fill: white;
        }
      }

      &:hover {
        .insta-call {
          opacity: 0;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 10px;
        }

        .instagram-tag {
          opacity: 1;
        }

        .hover-animation {
          width: 224px;
          opacity: 1;
        }

        div {
          left: 2%;
        }
      }
    }
  }

  .division-animation {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;

    svg {
      width: 250%;
      position: absolute;

      &:nth-child(1) {
        animation: linear 40s ${motion} infinite;
      }
      &:nth-child(2) {
        animation: linear 52s ${motion} infinite;
      }
      &:nth-child(3) {
        animation: linear 27s ${motion} infinite;
      }
    }

    .top-wave,
    .middle-wave {
      opacity: 0.7;
    }
  }

  .bottom-animation {
    top: 70px;
    background: linear-gradient(
      0deg,
      rgba(1, 85, 140, 1) 50%,
      rgba(89, 193, 225, 1) 100%
    );

    .top-wave,
    .middle-wave,
    .bottom-wave {
      fill: #01558c !important;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: auto;
  margin: 0 auto;
  padding: 0 50px;
`;

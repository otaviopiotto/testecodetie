import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    .top-logo-cultura {
      left: 50% !important;
      transform: translateX(-50%);
    }
  }

  .middle-logo-cultura {
    width: 300px;
    z-index: 3;
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
  }

  video,
  img {
    width: 100%;
    min-width: 1680px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  img {
    width: 120% !important ;
    z-index: 1 !important;
  }
`;

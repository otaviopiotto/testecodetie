import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    .main-info {
      .left-side {
        padding: 200px 0 0 0 !important;

        h1,
        p {
          text-align: center;
        }
      }
    }
  }

  .main-info {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    padding: 0 50px;

    .left-side {
      width: 100%;
      max-width: 700px;
      padding: 240px 0 0 15%;
    }

    h1 {
      font-family: 'Merriweather', serif;

      font-size: 60px;
      color: #ffffff;

      margin-bottom: 26px;
    }
    p {
      color: #ffffff;
      font-family: 'DIN-Regular';
      line-height: 30px;
    }
  }

  .background-animation {
    width: 100%;
    min-width: 1280px;
    position: absolute;
    top: 0;
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 800px;
  padding: 150px 0;
  position: relative;
  overflow: hidden;
  background: var(--SecondaryColor);

  @media screen and (max-width: 960px) {
    .right-side {
      top: 60% !important;
      transform: unset !important;
    }

    .main-info {
      padding: 0 10px !important;

      .left-side {
        padding: 0 !important;
      }
    }
  }

  .main-info {
    width: 100%;
    max-width: 1280px;
    height: auto;
    margin: 0 auto;
    padding: 0 50px;
    position: relative;
    z-index: 2;

    .left-side {
      width: 100%;
      max-width: 600px;
      padding-left: 15%;

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

      ol {
        li {
          list-style: lower-alpha;
          list-style-position: inside;
        }
      }
    }
  }
  .right-side {
    width: 100%;
    max-width: 1000px;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);

    video {
      width: 100%;
    }
  }
`;

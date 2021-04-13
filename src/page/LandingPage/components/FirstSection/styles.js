import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 100px 0 0 0;
  background: var(--SecondaryColor);
  position: relative;

  .main-info {
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    padding: 0 50px;

    h1 {
      font-family: 'Merriweather', serif;
      text-align: center;
      font-size: 60px;
      color: #ffffff;

      margin-bottom: 26px;
    }
    p {
      text-align: center;
      font-family: 'DIN-Regular';
      color: #ffffff;
      line-height: 30px;
    }
  }

  .first-section-background {
    position: relative;

    img {
      width: 100%;

      &:nth-child(1) {
        position: absolute;
        z-index: 2;
      }
    }
  }
`;

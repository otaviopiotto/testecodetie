import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: 80px auto;
  position: relative;

  @media screen and (max-width: 960px) {
    padding: 0 10px !important;
    margin: 50px 0;

    .title-section {
      .section-title {
        font-size: 39px !important;
      }
    }
  }

  .title-section {
    width: 100%;
    max-width: 780px;
    padding: 10px;
    margin: 0 auto;
    .section-title {
      font-size: 130px;
      text-align: center;
      color: var(--SecondaryColor);
    }

    p {
      text-align: center;
      line-height: 30px;
      margin: 27px 0 35px 0;
      font-family: 'DIN-Regular';
      color: var(--SecondaryColor);
    }
  }
`;

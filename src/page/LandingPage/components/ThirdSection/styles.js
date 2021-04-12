import styled, { keyframes } from 'styled-components';

const giggle = keyframes`

0%{
transform:rotate(15deg);

}


50%{
transform:rotate(-15deg);


}

100%{

transform:rotate(15deg);

}

`;

export const Container = styled.section`
  width: 100%;
  position: relative;
  margin: 150px 0;
  padding-left: 10%;

  @media screen and (max-width: 960px) {
    padding-left: 10px !important;
    margin-top: 30px;

    .main-info {
      display: flex !important;
      flex-direction: column;
      justify-content: center;

      .left-side,
      .right-side {
        max-width: unset !important;
      }

      .left-side {
        padding: 0px 0 0 0 !important;

        h1 {
          font-size: 37px !important;
          text-align: center;
        }

        p {
          text-align: center;
        }
      }

      .right-side {
        .celeste-svg,
        .baleinha-svg {
          display: none;
        }
      }
    }
  }

  .main-info {
    width: 100%;
    position: relative;

    .left-side {
      width: 100%;
      max-width: 500px;
      padding-left: 6%;
      display: inline-block;

      h1 {
        font-family: 'Merriweather', serif;
        font-size: 95px;
        color: var(--SecondaryColor);
        margin-bottom: 26px;
        z-index: 2;
        position: relative;
      }
      p {
        color: var(--SecondaryColor);
        font-family: 'DIN-Regular';
        line-height: 30px;
      }
    }

    .right-side {
      width: 100%;
      max-width: 400px;
      height: 300px;
      position: relative;
      top: 80px;
      display: inline-block;

      .celeste-svg {
        width: 270px;
        position: absolute;
        top: -280px;
        right: 30px;
        z-index: 1;
        animation: 15s linear ${giggle} infinite;
      }
      .baleinha-svg {
        width: 120px;
        position: absolute;
        top: -85px;
        right: -50px;
        z-index: 1;
        animation: 10s linear ${giggle} infinite;
      }
    }
  }
`;

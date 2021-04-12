import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: none;

  @media screen and (max-width: 960px) {
    display: unset !important;
  }

  .logoPrincipal {
    width: 200px;
    margin: 10px auto 60px auto;
    img {
      width: 100%;
      height: auto;
    }
  }

  .footer-logos-section {
    display: flex;
    justify-content: space-between;

    &:nth-child(6),
    &:nth-child(8) {
      .logo {
        border: 0;
      }
    }
    &:nth-child(5),
    &:nth-child(7) {
      .logo {
        margin: 6px 10px 20px 0px;
        width: 300px !important;
      }
    }
    &:nth-child(5) {
      img {
        &:nth-child(1),
        &:nth-child(2) {
          max-height: 56px !important;
        }
      }
    }
  }

  .logo-section {
    display: inline-block;
    vertical-align: top;
    margin: 0 auto;

    h4 {
      text-align: center;
      color: #ffffff;
      font-size: 9px;
      font-weight: 400;
      font-family: 'DIN-Regular';
      text-transform: uppercase;
    }

    .logo {
      width: fit-content;
      min-width: 120px;
      display: flex;
      justify-content: center;
      margin: 6px 10px 50px 0px;
      border-top: 1px solid white;
      padding-top: 10px;

      img {
        max-height: 34px;
        vertical-align: top;
        margin-right: 5px;
      }
    }
  }
`;

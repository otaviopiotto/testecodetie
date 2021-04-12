import styled from 'styled-components';

export const MainContainer = styled.footer`
  width: 100%;
  height: auto;
  background: var(--PrincipalColor);
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: auto;
  margin: 0 auto;
  padding: 105px 20px 130px 20px;

  @media screen and (max-width: 960px) {
    display: none;
  }

  .logoPrincipal {
    width: 200px;
    margin: 0 auto 60px auto;
    img {
      width: 100%;
      height: auto;
    }
  }

  .footer-logos-section {
    display: flex;
    justify-content: space-between;
  }

  .logo-section {
    display: inline-block;
    vertical-align: top;
    margin: 0 auto;

    h4 {
      color: #ffffff;
      font-size: 11px;
      font-weight: 400;
      font-family: 'DIN-Regular';
      text-transform: uppercase;
    }

    .logo {
      width: fit-content;
      margin: 6px 10px 60px 0px;
      border-top: 1px solid white;
      padding-top: 30px;

      img {
        max-height: 150px;
        height: auto;
        vertical-align: top;
        margin-right: 30px;
      }
    }
  }
`;

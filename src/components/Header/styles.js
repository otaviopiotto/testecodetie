import styled, { keyframes, css } from 'styled-components';

const motion = keyframes`
from{
top:-476px;
}
to{
top:-122px;
}
`;

const menuAnimation = keyframes`

0%{
top:30%;
right:-500px;
transform: translateY(-70%);

}

25%{
top:30%;
  right:300px;
  transform:rotate(28deg);
}

50%{
  top:40%;
  right:100px;
  transform:rotate(-28deg);
}

75%{
  top:48%;
  right:10px;
  transform:rotate(8deg);
}


100%{

  right: 50px;
  top: 50%;
  transform: translateY(-50%);
}

`;

export const Container = styled.header`
  width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 8;
  animation: linear 3s ${menuAnimation};

  @media screen and (max-width: 960px) {
    width: 50px;
    height: 50px;
    top: 10px;
    right: 10px;
    transform: unset !important;

    .mobile-menu {
      display: flex !important;
    }

    .waveAnimation {
      width: 10px !important;
      height: 30px !important;

      .menuWave {
        width: 10px !important;
      }
    }

    nav {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      right: -600px;
      top: 0;
      background: var(--SecondaryColor);
      padding-top: 40px;

      .logo-mobile {
        width: 180px;
        display: unset !important;
      }
      ul {
        margin-top: 20px;
        li {
          text-align: center;

          a {
            color: white !important;
          }
        }
      }
    }
  }

  ${(props) => {
    if (props.propMenuColor === 3)
      return css`
        width: 100% !important;
        height: 100px;
        top: 0 !important;
        transform: unset !important;
        right: 0 !important;
        justify-content: flex-end;

        .waveAnimation {
          display: none;
        }

        nav {
          width: 100% !important;
          ul {
            width: 100% !important;
            flex-direction: row !important;
            justify-content: space-between;

            li {
              margin: 0 20px !important;

              a {
                color: white !important;
              }
            }
          }
        }
      `;
  }}

  ${(props) => {
    if (props.propMobile) {
      return css`
        width: 100% !important;
        height: 100% !important;
        right: 0 !important;
        top: 0 !important;

        nav {
          width: 100% !important;
          height: 100% !important;
          right: 0;
        }

        .mobile-menu {
          right: 20px;
          top: 20px;
          position: absolute !important;

          span {
            position: absolute;
            top: 50%;
            left: 50%;

            background: white !important;
            transform: translate(-50%, -50%);

            &:nth-child(1) {
              transform: rotate(45deg);
            }

            &:nth-child(2) {
              opacity: 0;
            }
            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          }
        }
      `;
    }
  }}

  .mobile-menu {
    width: 30px;
    height: 18px;
    display: none;
    flex-direction: column;
    position: relative;
    background: none;
    border: 0;
    z-index: 5;
    justify-content: space-between;

    span {
      width: 100%;
      height: 2px;
      background: ${(props) =>
        props.propMenuColor === 1 ? 'white' : 'var(--SecondaryColor)'};
      transition: 0.5s;
    }
  }

  .waveAnimation {
    width: 24px;
    height: 340px;
    overflow: hidden;
    position: relative;
    pointer-events: none;

    .menuWave {
      width: 20px;
      position: absolute;
      animation: 30s linear ${motion} infinite;
    }
  }
  .wave {
    stroke: ${(props) =>
      props.propMenuColor === 1 ? 'white' : 'var(--SecondaryColor)'};
  }

  nav {
    width: 154px;
    transition: 0.5s;

    .logo-mobile {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: column;

      li {
        margin: 10px 0;

        a {
          text-decoration: none;
          color: ${(props) =>
            props.propMenuColor === 1 ? 'white' : 'var(--SecondaryColor)'};
          font-size: 17px;
          font-family: 'DIN';
          text-transform: uppercase;
        }
      }
    }
  }
`;

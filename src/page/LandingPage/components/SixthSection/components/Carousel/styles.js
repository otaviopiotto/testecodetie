import styled, { css, keyframes } from 'styled-components';

const teste = keyframes`



to{opacity:0;}
from{opacity:1;}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 830px;

  @media screen and (max-width: 960px) {
    .carousel-image {
      height: 188px !important;
      button {
        background: white !important;
      }
    }

    img {
      &:nth-child(4) {
        width: 90% !important;
      }
    }

    .dots {
      display: none !important;
    }

    .carousel-controler-mobile {
      display: flex !important;
    }
  }

  .carousel-controler-mobile {
    width: 40%;
    margin: 0 auto;
    display: none;
    justify-content: space-between;

    button {
      width: 44px;
      height: 44px;
      border: 1px solid var(--SecondaryColor);
      border-radius: 99px;
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      svg {
        transition: 0.3s;
        fill: var(--SecondaryColor);
      }

      &:hover {
        background: var(--SecondaryColor);
        svg {
          fill: white;
        }
      }
    }

    .next-button {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .carousel-image {
    width: 100%;
    height: 350px;
    margin-bottom: 22px;
    position: relative;
    overflow: hidden;

    button {
      width: 150px;
      height: 188px;
      background: none;
      border: 0;
      position: absolute;
      z-index: 1;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.2s;

      &:hover {
        backdrop-filter: blur(1px);
      }
    }

    .prev-button {
      left: 0;
    }
    .next-button {
      right: 0;
    }

    img {
      height: 166px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.6s;
      animation: 0.4s linear ${teste};
      box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);

      &:nth-child(3) {
        left: 10px !important;
      }
      &:nth-child(4) {
        width: 600px;
        height: auto !important;
        top: 0 !important;
        left: 50%;
        z-index: 2;
        transform: translateX(-50%);
      }
      &:nth-child(5) {
        right: 10px;
      }
    }
  }

  .dots {
    width: 100%;
    height: 22px;
    display: flex;
    justify-content: center;

    button {
      width: 22px;
      height: 22px;
      margin: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 99px;
      border: solid 1px transparent;
      background: none;
      div {
        width: 16px;
        height: 16px;
        border-radius: 99px;
        background: var(--SecondaryColor);
      }
    }
  }

  .description {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 34px;

    h1 {
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;
      color: var(--SecondaryColor);
    }

    p {
      font-size: 12px;
      line-height: 25px;
      text-align: center;
      padding: 0 10px;
      font-family: 'DIN-Regular';
      color: var(--SecondaryColor);
    }
  }

  ${(props) => {
    if (props.propSlider === 1) {
      return css`
        .dots {
          button:nth-child(1) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 2) {
      return css`
        .dots {
          button:nth-child(2) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 3) {
      return css`
        .dots {
          button:nth-child(3) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 4) {
      return css`
        .dots {
          button:nth-child(4) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 5) {
      return css`
        .dots {
          button:nth-child(5) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 6) {
      return css`
        .dots {
          button:nth-child(6) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 7) {
      return css`
        .dots {
          button:nth-child(7) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 8) {
      return css`
        .dots {
          button:nth-child(8) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 9) {
      return css`
        .dots {
          button:nth-child(9) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 10) {
      return css`
        .dots {
          button:nth-child(10) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 11) {
      return css`
        .dots {
          button:nth-child(11) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
    if (props.propSlider === 12) {
      return css`
        .dots {
          button:nth-child(12) {
            border: solid 1px var(--SecondaryColor) !important;

            div {
              background: var(--SecondaryColor);
            }
          }
        }
      `;
    }
  }}
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
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
  }}

  @media screen and (max-width:960px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .dots {
      justify-content: center !important;
    }
  }
  .carousel-image {
    width: 100%;
    max-width: 400px;
    height: 250px;
    overflow: hidden;
    margin-bottom: 22px;
    position: relative;

    .wave-slide {
      width: 22px !important;
      position: absolute;
      z-index: 1;
      opacity: 1 !important;
      left: -3px;
    }

    img {
      height: 100%;
      opacity: 0;
      transition: 0.3s;
      position: absolute;
    }
  }

  .dots {
    width: 100%;
    height: 22px;
    display: flex;
    justify-content: flex-end;

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
`;

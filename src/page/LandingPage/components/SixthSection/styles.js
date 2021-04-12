import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  position: relative;
  margin: 150px 0;

  @media screen and (max-width: 960px) {
    margin: 50px 0 !important;
    .section-title {
      font-size: 39px !important;
    }
  }

  .main-info {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .section-title {
    font-size: 130px;
    text-align: center;
    padding: 0 50px;
    color: var(--SecondaryColor);
  }
`;

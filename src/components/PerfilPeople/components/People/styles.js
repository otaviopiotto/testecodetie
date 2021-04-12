import styled from 'styled-components';

export const Container = styled.section`
  .show-more-section {
    display: flex;
    flex-direction: column-reverse;
  }

  .show-about-me {
    height: 0px;
    overflow: hidden;
    opacity: 0.7;
    transition: 0.3s;
  }

  .profile-button {
    width: 115px;
    padding: 6px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    font-family: 'DIN-Bold';
    text-transform: uppercase;
    background: var(--PrincipalColor);
    border: 0;
    color: white;
    font-size: 14px;


svg{

  margin-left:5px;
  transform:${(props) => (props.propShowMore ? 'rotate(180deg)' : null)};
    };
    transition:0.3s;
}

  }
`;

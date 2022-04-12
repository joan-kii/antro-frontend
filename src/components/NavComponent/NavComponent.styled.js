import styled from 'styled-components';

const NavComponentStyled = styled.nav`
  margin-bottom: .5em;
  width: 100%;
  display: flex;
  justify-content: space-around;

  &:last-of-type {
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  & > a {
    display: flex;
    width: 100%;
    height: 2em;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-size: .7rem;
    background-color: ${props => props.theme.colors.secondary};

    &:hover {
      transition: .3s;
      background-color: ${props => props.theme.colors.primary};
      text-transform: uppercase;
    }

    @media ${props => props.theme.device.mobileS} {
      font-size: .8rem;
    }

    @media ${props => props.theme.device.mobileM} {
      font-size: .9rem;
    }

    @media ${props => props.theme.device.mobileL} {
      font-size: 1rem;
    }
  }

  .active {
    color: #fff;
    opacity: .8;
    box-shadow: inset 0 -2px 1px ${props => props.theme.colors.primary};
  }
`;

export { NavComponentStyled };

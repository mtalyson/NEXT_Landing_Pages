import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    position: relative;
    text-decoration: none;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.smedium};
    color: ${theme.colors.primaryColor};

    &::after {
      content: '';
      position: absolute;
      bottom: 1.1rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;

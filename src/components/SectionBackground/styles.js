import styled, { css } from 'styled-components';

const containerBackgroungActivate = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: flex;
    align-items: center;

    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};

    ${background && containerBackgroungActivate(theme)};

    min-height: 100vh;
  `}
`;

import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    p {
      font-size: ${theme.font.sizes.small};
      margin: ${({ theme }) => theme.spacings.medium} 0;
    }

    span {
      color: ${theme.colors.secondaryColor};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;

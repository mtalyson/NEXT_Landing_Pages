import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.title};
    margin: ${({ theme }) => theme.spacings.large} 0;
    font-weight: 900;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacings.xmedium};
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  table {
    min-width: 360px;
    width: 100%;
    border-collapse: collapse;
  }

  table caption {
    font-style: italic;
    font-size: 1.6rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  table td, table th {
    white-space: nowrap;
    padding: 1rem;
    text-align: left;
    border: 0.1rem solid ${({ theme }) => theme.colors.mediumGray};;
  }

  tfoot td, table th {
    background: ${({ theme }) => theme.colors.mediumGray};;
  } 

  .responsive-table {
    width: 100%;
    overflow-y: auto;
  }
`;

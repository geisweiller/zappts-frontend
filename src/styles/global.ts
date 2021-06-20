import { createGlobalStyle } from 'styled-components';
import { fontWeight } from '../constants/theme';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body, #root {
  height: 100%;
  width: 100%;
}
#root {
  display: flex;
}

body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
  }

h1, h2, h3, h4, h5, h6, strong {
  font-weight: ${fontWeight.bold};
}

`;

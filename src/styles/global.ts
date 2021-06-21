import { createGlobalStyle } from 'styled-components';
import { fontFamily, fontWeight } from '../constants/theme';

export default createGlobalStyle`
@font-face {
  font-family:"Muli";
  src:url("https://use.typekit.net/yka3cpz.css");
}
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
    font-family: ${fontFamily.muli}, sans-serif;
  }

h1, h2, h3, h4, h5, h6, strong {
  font-weight: ${fontWeight.bold};
}

`;

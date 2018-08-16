/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'styled-components';

import sanitizeCss from '!raw-loader!sanitize.css/sanitize.css'; // eslint-disable-line
import fontFace from './Font';

injectGlobal`${sanitizeCss}`;

injectGlobal`
  ${fontFace('manoz', 'manoz', 'normal', 'normal')}

  :root {
    --primaryColor: #ebebeb;
    --secondaryColor: #d85a94;
    --colorPink: #d85a94;
    --colorDarkBlue: #162636;
    --fontStack: 'Source Serif Pro', Georgia, Cambria, 'Times New Roman', Times, serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --fontMono: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    --fontTitle: 'Raleway', "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
  }

  ::selection {
    color: white;
    background-color: var(--secondaryColor);
  }

  html {
    font-family: sans-serif;
    cursor: auto;
  }

  body {
    padding: 0;
    color: rgba(0, 0, 0, .84);
    font-family: var(--fontStack);
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
  }

  a, a:visited {
    color: #387CC6;
    text-decoration: none;
    transition: color .2s;
  }

  a:hover {
    color: #001f3f;
    text-decoration: underline;
    transition: color .2s;
  }

  a:active {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--fontTitle);
    font-weight: 600;
    margin-top: 0;
    margin-bottom: .5rem;
    letter-spacing: -0.0075em;
  }

  *+h1, *+h2, *+h3, *+h4, *+h5, *+h6 {
    margin-top: 1rem;
  }

  h1 {
    font-size: 42px;
    line-height: 1.04;
    letter-spacing: -.015em;

    @media (max-width: 767px) {
      font-size: 34px;
    }
  }

  h2 {
    font-size: 42px;
    line-height: 1.04;
    letter-spacing: -.015em;

    @media (max-width: 767px) {
      font-size: 34px;
    }
  }

  h3 {
    font-size: 34px;
    line-height: 1.15;
    letter-spacing: -.015em;

    @media (max-width: 767px) {
      font-size: 30px;
    }
  }

  p {
    margin-top: 29px;
    margin-bottom: 0;
    font-size: 21px;
    line-height: 1.5;
    letter-spacing: -.003em;

    @media (max-width: 767px) {
      font-size: 18px;
      letter-spacing: -.004em;
    }
  }

  *+p {
    margin-top: 29px;

    @media (max-width: 767px) {
      margin-top: 21px;
    }
  }

  ol,
  ul {
    padding: 0;
    margin: 1rem 0 1rem 1.11111rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    font-size: 21px;
    line-height: 1.5;
    letter-spacing: -.003em;

    @media (max-width: 767px) {
      font-size: 18px;
      letter-spacing: -.004em;
    }

    p {
      margin-top: 0;
    }

    li {
      font-size: 21px;
      line-height: 1.5;
      letter-spacing: -.003em;

      @media (max-width: 767px) {
        font-size: 18px;
        letter-spacing: -.004em;
      }
    }
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

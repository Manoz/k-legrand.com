/* eslint global-require: 0 */

/**
 * FontFace utility function that generates the font-face for you
 * @param {string} name font-family name
 * @param {string} src file name
 * @param {string} fontWeight any font-weight (default: normal)
 * @param {string} fontStyle any font-style (default: normal)
 * @return {string} Return the complete css
 */
function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal') {
  return `
    @font-face{
      font-family: "${name}";
      src: url(${require(`./fonts/${src}.woff`)}) format("woff"),
          url(${require(`./fonts/${src}.ttf`)}) format("truetype"),
          url(${require(`./fonts/${src}.svg`)}#${name}) format("svg");
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      font-display: swap;
    }

    [class^="icn-"],
    [class*=" icn-"] {
      font-family: '${name}';
      speak: none;
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      line-height: 1;
    }

    .icn-coffee:before {content: "\f900";}
    .icn-codepen:before {content: "\f901";}
    .icn-instagram:before {content: "\f902";}
    .icn-github:before {content: "\f903";}
    .icn-octacat:before {content: "\f903";}
    .icn-twitter:before {content: "\f904";}
    .icn-tweet:before {content: "\f904";}
    .icn-gatsby:before {content: "\f905"; color: #639;}
    .icn-mastodon:before {content: "\f906";}
  `;
}

export default fontFace;

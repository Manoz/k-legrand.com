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
      src: url(${require(`./fonts/${src}.eot`)});
      src: url(${require(`./fonts/${src}.eot`)}?#iefix) format("embedded-opentype"),
          url(${require(`./fonts/${src}.woff`)}) format("woff"),
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

    .icn-envelope-o:before {content: "\f003";}
    .icn-twitter:before {content: "\f099";}
    .icn-facebook:before {content: "\f09a";}
    .icn-facebook-f:before {content: "\f09a";}
    .icn-github:before {content: "\f09b";}
    .icn-globe:before {content: "\f0ac";}
    .icn-linkedin:before {content: "\f0e1";}
    .icn-coffee:before {content: "\f0f4";}
    .icn-angle-down:before {content: "\f107";}
    .icn-stackoverflow:before {content: "\f16c";}
    .icn-instagram:before {content: "\f16d";}
    .icn-wordpress:before {content: "\f19a";}
    .icn-codepen:before {content: "\f1cb";}
    .icn-copyright:before {content: "\f1f9";}
    .icn-grav:before {content: "\f2d6";}
  `;
}

export default fontFace;

module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  plugins: ['stylelint-declaration-use-variable', 'stylelint-scss'],
  rules: {
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'length-zero-no-unit': true,
    'selector-max-id': 0,
    'selector-list-comma-newline-after': 'always',
    'selector-type-case': 'lower',
    'unit-case': 'lower',
    'declaration-property-value-blacklist': {
      border: ['none'],
      'border-right': ['none'],
      'border-bottom': ['none'],
      'border-left': ['none'],
    },
    'sh-waqar/declaration-use-variable': 0,

    // AUTO FIXABLE, FORMATTING RULES, covered by prettier
    indentation: null,
    'number-leading-zero': null,
    'max-line-length': null,
    'function-comma-newline-after': null,
    'function-comma-newline-before': null,
    'function-max-empty-lines': null,
    'value-list-max-empty-lines': null,
    'max-empty-lines': null,
    'function-comma-space-after': null,
    'function-whitespace-after': null,
    'value-list-comma-space-after': null,
    'declaration-bang-space-after': null,
    'declaration-colon-space-after': null,
    'declaration-block-semicolon-space-after': null,
    'block-closing-brace-space-after': null,
    'block-opening-brace-space-after': null,
    'selector-attribute-operator-space-after': null,
    'selector-combinator-space-after': null,
    'selector-list-comma-space-after': null,
    'media-feature-colon-space-after': null,
    'media-feature-range-operator-space-after': null,
    'media-query-list-comma-space-after': null,
    'at-rule-name-space-after': null,
    'function-comma-space-before': null,
    'value-list-comma-space-before': null,
    'declaration-bang-space-before': null,
    'declaration-colon-space-before': null,
    'declaration-block-semicolon-space-before': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-space-before': null,
    'selector-attribute-operator-space-before': null,
    'selector-combinator-space-before': null,
    'selector-list-comma-space-before': null,
    'media-feature-colon-space-before': null,
    'media-feature-range-operator-space-before': null,
    'media-query-list-comma-space-before': null,
    'at-rule-semicolon-space-before': null,
    'no-eol-whitespace': null,
    'function-parentheses-space-inside': null,
    'selector-attribute-brackets-space-inside': null,
    'selector-pseudo-class-parentheses-space-inside': null,
    'media-feature-parentheses-space-inside': null,
    'comment-whitespace-inside': null,
    'declaration-block-trailing-semicolon': null,
    'selector-descendant-combinator-no-non-space': null,
    'function-calc-no-unspaced-operator': null,
    'string-quotes': null,
  },
}

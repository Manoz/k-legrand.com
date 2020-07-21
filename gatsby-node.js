exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    // Load only the raw contents of regular CSS files to support CSS-in-JS
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['raw-loader'],
          },
        ],
      },
    })
  } else if (stage === 'build-css') {
    // Regular CSS files shall not be processed in this stage anymore
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['null'],
          },
        ],
      },
    })
  }
}

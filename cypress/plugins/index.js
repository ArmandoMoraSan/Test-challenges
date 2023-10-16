const webpack = require('@cypress/webpack-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: 'cypress-cucumber-preprocessor/loader',
              },
            ],
          },
        ],
      },
    },
  };

  on('file:preprocessor', webpack(options));
};

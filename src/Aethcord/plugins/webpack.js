const Plugin = require('ac/plugin');
const webpack = require('ac/webpack');

module.exports = class Webpack extends Plugin {
  constructor () {
    super({ stage: 0 });
  }

  start () {
    return webpack.init();
  }
};

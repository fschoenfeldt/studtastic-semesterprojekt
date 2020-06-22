const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/frontend/studtastic.js',
  output: {
    filename: 'studtastic.js',
    path: path.resolve(__dirname, 'web/js'),
  },
  watch: true,
  watchOptions: {
    ignored: ['/src/', '/node_modules/']
  }
};
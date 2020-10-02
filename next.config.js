const path = require('path');

module.exports = {
  basePath: '',
  // trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

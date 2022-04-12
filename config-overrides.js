const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@components': 'src/components',
    '@views': 'src/views',
    '@store': 'src/store',
    '@styles': 'src/styles',
    '@assets': 'src/assets',
    '@utils': 'src/utils'
  })(config);

  return config;
};
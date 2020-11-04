/* global hexo */

// Welcome Message
require('../includes/tasks/welcome');
// Check Hexo Version
require('../includes/tasks/check_hexo')(hexo);

const logger = require('hexo-log')();
logger.info('Loading Sitio Theme Plugins');

// // Helper
require('../includes/helpers/head')(hexo);
// require('../includes/helpers/page')(hexo);
// require('../includes/helpers/tags')(hexo);
// require('../includes/helpers/favicon')(hexo);
// require('../includes/helpers/qrcode')(hexo);

// // Generator
// require('../includes/generator/search')(hexo);

// // Filter
// require('../includes/filter/prism')(hexo);

// Debug helper
hexo.extend.helper.register('console', function () {
  console.log(arguments);
});

if ((/3.[89]/).test(hexo.version)) {
  hexo.extend.filter.unregister('after_render:html', require('../../../node_modules/hexo/lib/plugins/filter/meta_generator'));
}

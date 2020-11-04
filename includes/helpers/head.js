'use strict';

const urlFn = require('url');
const moment = require('moment');
const { escapeHTML, htmlTag, stripHTML } = require('hexo-util');

module.exports = function (hexo) {
  const { helper } = hexo.extend;

  helper.register('_meta_generator', () => `<meta name="generator" content="Hexo 1">`);

}

// 操作结果

require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function() {
    // type: register / pass-reset / cart-add / default
    var type = _mm.getUrlParam('type') || 'default';
    var $element = $('.' + type + '-success');

    // 显示对应的提示元素
    $element.show();
})

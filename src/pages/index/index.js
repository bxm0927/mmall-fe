// 首页
require('./index.css');

// 公共组件
require('pages/common/nav/index.js');
require('pages/common/header/index.js');
require('pages/common/footer/index.js');
var navSide = require('pages/common/nav-side/index.js');

// 工具类
var _mm = require('util/mm.js');
require('plugin/unslider/index.js');
var templateBanner = require('./banner.string');

$(function() {
    // 渲染 banner 的 html
    var bannerHtml = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);

    // 初始化 banner - Unslider
    var $slider = $('.banner').unslider({
        dots: true
    });

    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function() {
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});

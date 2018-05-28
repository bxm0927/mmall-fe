// 个人中心
require('./index.css');

// 组件
require('pages/common/nav/index.js');
require('pages/common/header/index.js');
require('pages/common/footer/index.js');
var navSide = require('pages/common/nav-side/index.js');

// 工具类
var _mm = require('util/mm.js');

// 业务类
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');

// page 逻辑部分
var page = {
    init: function() {
        this.onLoad();
    },
    onLoad: function() {
        // 初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });

        // 加载用户信息
        this.loadUserInfo();
    },
    // 加载用户信息，密码单独修改
    loadUserInfo: function() {
        var userHtml = '';
        _user.getUserInfo(function(res) {
            userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg) {
            _mm.errorTips(errMsg);
        });
    }
};

$(function() {
    page.init();
});

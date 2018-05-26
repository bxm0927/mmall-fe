/* JavaScript 通用工具类设计与封装 */

var hogan = require('hogan.js');

var conf = {
    // serverHost: '' // localhost
    serverHost: 'http://www.lovebxm.com' // online
};

var _mm = {
    // 封装 jQuery-ajax
    request: function(param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function(res) {
                // 请求成功
                if (0 === res.status) {
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                // 请求错误
                else if (1 === res.status) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
                // 没有登录状态，需要强制登录
                else if (10 === res.status) {
                    _this.doLogin();
                }
            },
            error: function(err) {
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    // 统一配置服务器地址
    getServerUrl: function(path) {
        return conf.serverHost + path;
    },
    /**
     * 获取 URL 参数的值
     * origin: http://happymmall.com/product/list.do?keyword=1&page=2
     * getUrlParam(keyword) -> 1
     * getUrlParam(page) -> 2
     */
    getUrlParam: function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    // 利用 hogan 模版引擎渲染 HTML 模板
    renderHtml: function(htmlTemplate, data) {
        var template = hogan.compile(htmlTemplate);
        var result = template.render(data);
        return result;
    },
    // 成功提示
    successTips: function(msg) {
        alert(msg || '操作成功！');
    },
    // 错误提示
    errorTips: function(msg) {
        alert(msg || '哪里不对了~');
    },
    // 字段的验证，支持非空、手机、邮箱的判断
    validate: function(value, type) {
        value = $.trim(value);
        // 非空验证
        if ('require' === type) {
            return !!value; // 转为 boolean
        }
        // 手机号验证
        if ('phone' === type) {
            return /^1\d{10}$/.test(value);
        }
        // 邮箱格式验证
        if ('email' === type) {
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    // 统一登录处理，跳转到登录页面，并携带跳转之前的 URL 信息
    doLogin: function() {
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    // 跳转到首页
    goHome: function() {
        window.location.href = './index.html';
    }
};

module.exports = _mm;

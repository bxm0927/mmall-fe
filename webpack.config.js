/**
 * Webpack 配置文件
 * npm install
 * npm install webpack@1.15.0 -g
 * npm install webpack-dev-server@1.16.5 -g
 */

var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 开发时自动打开浏览器

// Node.js 环境变量的配置 online || dev，该参数在启动命令里面配置
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

// webpack-dev-server 浏览器热刷新
if ('dev' === WEBPACK_ENV) {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

// 获取 html-webpack-plugin 参数的方法
var getHtmlConfig = function(name, title) {
    return {
        template: './src/pages/' + name + '/' + name + '.html', // HTML 原始模板
        filename: 'view/' + name + '.html', // HTML 目标模板
        favicon : './favicon.ico',
        title   : title,
        inject  : true,
        hash    : true,
        chunks  : ['common', name] // 注入的模块，即引入的 JS 文件
    };
};

// webpack config
var config = {
    // 入口
    entry: {
        // 通用模块，与下面的 common 对应，打包到 /dist/js/base.js
        'common'            : ['./src/pages/common/index.js'],
        'index'             : ['./src/pages/index/index.js'],
        'list'              : ['./src/pages/list/index.js'],
        'detail'            : ['./src/pages/detail/index.js'],
        'shopping-cart'     : ['./src/pages/shopping-cart/index.js'],
        'user-login'        : ['./src/pages/user-login/index.js'],
        'user-register'     : ['./src/pages/user-register/index.js'],
        'user-pass-reset'   : ['./src/pages/user-pass-reset/index.js'],
        'user-center'       : ['./src/pages/user-center/index.js'],
        'user-center-update': ['./src/pages/user-center-update/index.js'],
        'user-pass-update'  : ['./src/pages/user-pass-update/index.js'],
        'result'            : ['./src/pages/result/index.js']
    },
    // 输出
    output: {
        // 打包后的文件存放的路径
        path: __dirname + '/dist/',

        // 静态资源访问路径，默认 /
        // publicPath: '/dist/', // dev
        publicPath: '//s.lovebxm.com/mmall-fe/dist/', // online

        // 打包后的文件名，支持路径形式
        filename: 'js/[name].js'
    },
    // 外部依赖的声明
    externals: {
        'jquery': 'window.jQuery'
    },
    // loader 装载
    module: {
        loaders: [
            // 单独打包出 CSS
            {
                test  : /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // 处理图片、字体，可以将小图片转为 base64 形式
            {
                test  : /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=100&name=resource/[name].[ext]'
            },
            // 处理 hogan.js 模版引擎，最小化压缩，且不删除属性的引号
            {
                test  : /\.string$/,
                loader: 'html-loader',
                query : {
                    minimize: true,
                    removeAttributeQuotes: false
                }
            }
        ]
    },
    resolve: {
        // 配置别名，简化路径
        alias: {
            node_modules: __dirname + '/node_modules',
            util        : __dirname + '/src/util',
            pages       : __dirname + '/src/pages',
            service     : __dirname + '/src/service',
            image       : __dirname + '/src/image',
            plugin      : __dirname + '/src/plugin'
        }
    },
    // 插件
    plugins: [
        // 自动打开浏览器
        // new OpenBrowserPlugin({ url: 'http://localhost:8088/dist/view/' }),

        // 通用js打包到 /dist/js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),

        // 把 CSS 单独打包到文件里，而不是混杂在 JS 中
        new ExtractTextPlugin("css/[name].css"),

        // 处理 HTML 模版，自动更新 HTML 文件中引入文件的 hash 值等
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表页')),
        new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情页')),
        new HtmlWebpackPlugin(getHtmlConfig('shopping-cart', '购物车')),
        new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center', '个人中心')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '修改个人信息')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '修改密码')),
        new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果')),
    ]
};

module.exports = config;

# mmall-be

mmall，企业级电商平台前端项目

## 目录结构

```
├─dist                      打包目录
├─node_modules              npm 依赖
└─src                       源代码
    ├─image                     公共图片
    ├─pages                     页面，相关资源就近维护
    │  ├─common                     公共组件
    │  ├─index                      首页（商品展示页）
    │  ├─result                     结果展示页
    │  ├─user-center                用户中心
    │  ├─user-center-update         用户中心 - 更新数据
    │  ├─user-login                 用户登录
    │  ├─user-pass-reset            找回密码（未登录状态下）
    │  ├─user-pass-update           修改密码（登陆状态下）
    │  └─user-register              用户注册
    ├─plugin                插件
    ├─service               业务层，负责接口调用
    ├─util                  工具层
```


## HOW TO RUN

> 部署时修改 webpack 的 publicPath


项目初始化步骤

1. 安装 nodejs 环境,推荐使用 v4.4.7
- 下载地址 : https://nodejs.org/download/release/v4.4.7/

2. 全局安装 webpack v^1.15.0
- `npm install -g webpack@^1.15.0`

3.全局安装 webpack-dev-server v^1.16.5
- `npm install -g webpack-dev-server@^1.16.5`


```
# 安装依赖
npm install

# 安装依赖（淘宝源）
npm install --registry=https://registry.npm.taobao.org

# 本地运行，开发环境（Windows）
npm run dev

# 本地运行，开发环境（Linux/Mac）
npm run dev_mac

# 打包压缩，生产环境（Windows）
npm run dist

# 打包压缩，生产环境（Linux/Mac）
npm run dist_mac
```

开发模式下预览项目，访问：http://localhost:8088/dist/view/index.html

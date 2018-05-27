# mmall-be

mmall，企业级电商平台前端项目

## 目录结构

```
├─dist 打包文件
├─node_modules npm依赖
└─src 源代码文件
    ├─image 公共图片
    ├─page 页面静态资源
    │  ├─common
    │  │  ├─footer
    │  │  ├─header
    │  │  ├─nav
    │  │  ├─nav-side
    │  │  └─nav-simple
    │  ├─index
    │  ├─result
    │  ├─user-center
    │  ├─user-center-update
    │  ├─user-login
    │  ├─user-pass-reset
    │  ├─user-pass-update
    │  └─user-register
    ├─service 业务层，负责接口调用
    ├─util 工具层
    └─view 视图层
        └─common
```


## HOW TO RUN

```
# 安装依赖
npm install

# 本地运行
npm run dev

# 打包压缩
npm run dist
```

# shopmall-management

> 这是一个购物商城的管理后台。

# 技术栈
**Vue2.x + Element UI + Echarts + axios + Eslint**，基于 `vue-cli` 进行构建。

<p align="center">
  <!-- <b>SPONSORED BY</b> -->
</p>
<p align="center">
   <!-- <a href="https://finclip.com?from=vue_element" title="FinClip" target="_blank">
      <img height="200px" src="https://gitee.com/panjiachen/gitee-cdn/raw/master/vue%E8%B5%9E%E5%8A%A9.png" title="FinClip">
   </a> -->
</p>

## Build Setup

```bash
# 克隆项目
git clone https://github.com/yxiuzhu/shopmall-management.git

# 进入项目目录
cd shopmall-management

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 后台数据接口文档
http://39.98.123.211:8170/swagger-ui.html#/

http://39.98.123.211:8510/swagger-ui.html 

## todo
- [x] Echarts的学习
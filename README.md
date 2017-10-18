# toast

* 作者：David Feng
* 邮箱：sublime3@163.com
* 版本：**`0.0.1`**

## 介绍

_toast 提示_

---

## 安装

`flash-*` 组件使用 `npm` 进行管理，命名空间统一为 `flash-`，请使用以下命令进行组件安装。

```
npm i flash-toast --save
```

- 如果你还没有安装 `npm`，可通过以下方式进行 [安装](https://nodejs.org/en/download/)。
- 安装cnpm `npm install -g cnpm --registry=https://registry.npm.taobao.org`


---

## 使用

### 样例文档

- 待开发

### 使用
最少配置参数为：
- 传入`content`增加内容

```
<Toast open={true} content="message" onRequestClose={() => {}} />

```
### 配置参数

| Prop | Type | Default | Description |
| ---- |:----:|:-------:| :----------:|
| **`open`** | `boolean` | `undefined` | 开关 |
| **`content`** | `string` | `undefined` | 主要内容 |
| **`onRequestClose`** | `func` | `args => args` | 请求关闭回调 |
| **`duration`** | `number` | `3000` | 展示时间 |
| **`styles`** | `object` | `{}` | 自定义属性 样式 |

---

## 注意事项

- 组件注意事项

---

## 开发调试

进入项目目录后，使用 `node` 命令启动服务

```
npm run start
```

打包发布可通过 `node` 命令执行

```
npm run build
npm publish
```

---

## 相关资料

* [flash 组件开发规范](http://)

---

## Changelog

### 0.0.1
1. init

---

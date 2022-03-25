---
sidebar_position: 3
slug: blog_comment_frame
title: Blog Comment Frame
---

## blog comment frame
<a href='https://www.npmjs.com/package/blog_comment_frame'> 
<img src='https://img.shields.io/badge/blog__comment__frame-1.2.9-yellowgreen'/>
</a>

blog comment frame 这个包用于在网页中引入 Blog Comment

使用前，请先确保部署好 Blog Comment

### 使用

安装：
```shell
yarn add blog_comment_frame
```

或者
```shell
npm i blog_comment_frame
```

在 React 项目中引入组件：

```js
import BlogCommentFrame from 'blog_comment_frame'

  <BlogCommentFrame
    commentDeployHost={'http://xxxx.vercel.app'}
    pageId={'xxxx'}
    auth={['github', 'anonymous']}
  />
```

框架无关的引入组件：

```js title='javascript'
import { BlogCommentShell } from 'blog_comment_frame'

BlogCommentShell({
  containerId: 'blog-comment-parent-container',
  commentDeployHost: 'http://xxxx.vercel.app',
  pageId: 'xxxx',
  auth: ['github', 'anonymous']
})

```

```html title='html'

<div id='blog-comment-parent-container'/>

```

### props

<details>
  <summary>BlogCommentFrame</summary>

| props | 描述 | required |
| :--: | :-: | :-: |
| commentDeployHost | blog_comment 部署到 vercel 的上线地址| 是 |
| pageId | 网页 id，评论数据将会以这个 pageId 作为索引存储，因此每一个引入 BlogCommentImport 的地方 pageId 都应该是唯一的| 是 |
| auth | 数组，用于配置评论者的身份，默认评论者匿名身份参与评论 ['anonymous']，如果需要 GitHub 授权，可以加上 'github', ['anonymous', 'github'] | 否 |

</details>

<details>
  <summary>BlogCommentShell</summary>

| props | 描述 | required |
| :--: | :-: | :-: |
| commentDeployHost | blog_comment 部署到 vercel 的上线地址| 是 |
| pageId | 网页 id，评论数据将会以这个 pageId 作为索引存储，因此每一个引入 BlogCommentImport 的地方 pageId 都应该是唯一的| 是 |
| auth | 数组，用于配置评论者的身份，默认评论者匿名身份参与评论 ['anonymous']，如果需要 GitHub 授权，可以加上 'github', ['anonymous', 'github'] | 否 |
| containerId | Blog Comment 评论组件被挂载的 document 节点 id | 是 |
</details>

### blog comment frame 做了什么？

1. 用 iframe 嵌套方式在网页中渲染 Blog Comment 评论组件（页面）。
2. iframe 内外页面的跨域通信，实现 iframe 内容高度自适应。
---
sidebar_position: 1
title: 支持评论者登录 Github 账号
---

这一节介绍怎么在 Blog Comment 里加入 GitHub 授权。

Blog Comment 默认匿名评论，可以通过 [Blog Comment Frame](../blog_comment_frame) 的 props `auth` 来控制评论者是否应该得到授权才能评论。

>Blog Comment 目前只支持 Github 授权（正在计划加入微信授权）。

### 一、获取 **Client ID** 和 **Client Secret**，并创建环境变量
按照 [怎么设置 GitHub OAuth application](../FAQ/how-apply-github-OAuth) 得到 **Client ID** 和 **Client Secret**

把 **Client ID** 和 **Client Secret** 复制下来，到 vercel dashboard > Setting > Environment Variables，创建两个环境变量，名字分别是 `github_auth_clientid`, `github_auth_secret`, 这两个变量的值分别是 **Client ID** 和 **Client Secret** 的值。

<img src='/img/github-oauth-3.png' width='70%'/>

然后重新 deploy Blog Comment。
 ### 二、打开 GitHub 授权功能
 在 [Blog Comment Frame](../blog_comment_frame) 的 props `auth`，加入值 'github'

 ```jsx title='React'
  <BlogCommentFrame
    commentDeployUrlHost={'http://xxxx.vercel.app'}
    pageId={'xxxxx'}
    auth={['github', 'anonymous']}
  />
 ```

 或者

 ```js title='非 React'
BlogCommentShell({
  containerId: 'blog-comment-parent-container',
  commentDeployHost: 'http://xxxx.vercel.app',
  pageId: 'xxxx',
  auth: ['github', 'anonymous']
})
```
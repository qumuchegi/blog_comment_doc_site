---
sidebar_position: 2
title: 怎么设置 github OAuth Application
---

首先我们需要在 GitHub 获得用于 OAuth 认证的 client id 和 client secret。进入 [Register a new OAuth application](https://github.com/settings/applications/new)，在这个页面上填写一些信息，

<img src='/img/github-oauth-1.png' width='50%'/>

关注这两个字段 `Homepage URL`, `Authorization callback URL`。 `Homepage URL` 是我们在 vercel 部署 Blog Comment 上线的地址（请转至 [快速开始](/docs/quick-start) 了解怎么部署 Blog Comment），`Authorization callback URL` 是 GitHub 登录时调用的回调接口，这个接口的地址是 

```shell
[Homepage URL]/api/githubLoginCallback

```

填写好了以上字段，点击 `Register application`，转至以下页面：

<img src='/img/github-oauth-2.png' width='50%'/>

 点击 `Generate a new client secret` 生成一个 client secret，它将用于获取 GitHub 授权 token。

 这样我们得到了 **Client ID** 和 **Client Secret**
 


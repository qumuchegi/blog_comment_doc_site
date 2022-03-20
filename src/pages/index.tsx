import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import BlogCommentFrame, { BlogCommentShell } from 'blog_comment_frame'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <a href='https://github.com/qumuchegi/blog-comment'>
          <img src='https://img.shields.io/badge/blog__comment-0.1.0-red'/>
        </a>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start">
            快速开始 - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    BlogCommentShell({
      containerId: 'blog-comment-parent-container',
      commentDeployHost: 'https://blog-comment-mocha.vercel.app',
      pageId: '1234567890',
      auth: ['github']
    })
  }, [siteConfig])

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <div id='blog-comment-parent-container' className={styles['comment-demo']}/>
    </Layout>
  );
}

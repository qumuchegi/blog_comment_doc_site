import React from 'react'
import styles from './styles.module.css'

const WHO_USE_IT = [
  {
    name: '个人博客网站',
    url: 'https://www.chegi.fun/',
    img: ''
  }
]
export default function List() {

  return <div>
    <h3 style={{padding: '10px'}}>谁在使用</h3>
    <div className={styles.list}>
      {
        WHO_USE_IT.map(({
          name,
          url,
          img
        }, i) => {
          return <div
            key={i}
            style={{
              backgroundImage: img
            }}
            className={styles.item}
          >
            <a href={url} target='_blank'>
            {name}
            </a>
          </div>
        })
      }
    </div>
  </div>
}
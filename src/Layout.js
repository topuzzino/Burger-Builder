import React from 'react'
import styles from './Layout.module.css'

const Layout = (props) => {
  console.log(styles)
  return (
    <>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={styles['content']}>
        {props.children}
      </main>
    </>
  )
}

export default Layout
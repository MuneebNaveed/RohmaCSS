import React from "react"
import styles from "./right.module.css"

const Right = ({ toggle }) => (
  <div className="right">
    <div className={styles.titlebar}>
      <h1>Title</h1>
      <h1 onClick={() => toggle()} className={styles.toggle}>
        Close
      </h1>
    </div>
    <div className={styles.content}>Hello</div>
  </div>
)

export default Right

import React from "react"
import styles from "./camera.module.css"

const Stat = ({ LeftTitle, LeftContent, RightContent }) => (
  <div className={styles.stat}>
    <div className={styles.stat__left}>
      <div className={styles.stat__icon}></div>
      <div className={styles.stat__left__content}>
        <h1>{LeftTitle}</h1>
        <p>{LeftContent}</p>
      </div>
    </div>
    <div className={styles.stat__right}>
      <p className={styles.stat__right__content}>{RightContent}</p>
    </div>
  </div>
)

const Card = ({ title, temperature, oximeter }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.stats}>
          <Stat
            LeftTitle={temperature.leftTitle}
            LeftContent={temperature.leftContent}
            RightContent={temperature.rightContent}
          />
          <Stat
            LeftTitle={oximeter.leftTitle}
            LeftContent={oximeter.leftContent}
            RightContent={oximeter.rightContent}
          />
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Card

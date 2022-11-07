import React from 'react'
import styles from './playerStats.module.scss'

export default function PlayerStat({title, value}) {
    return (
        <div className={styles.stats}>
            <div className={styles.statsTitle}>{title}</div>
            <div className={styles.statsValue}>{value}</div>
        </div>
    )
}

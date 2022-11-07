import React from 'react'
import styles from './playerStats.module.scss'

export default function PlayersStatsContainer({ children, className }) {
  return (
    <div className={`${styles.statsContainer} ${className}`}>
      {children}
    </div>
  )
}

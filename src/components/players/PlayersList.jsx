import React from 'react'
import PlayerCard from './PlayerCard'
import styles from './playersList.module.scss'

export default function PlayersList(props) {
    const { players } = props
    if (!players || players.length <= 0) return null
    return (
        <div className={styles.playersList}>        
            <ul className={styles.list}>
                {players && players.map(player => (
                    <li key={player.id}>
                        <PlayerCard player={player} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

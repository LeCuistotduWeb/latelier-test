import React, { useState } from 'react'
import styles from './playerCard.module.scss'
import Modal from '../modal/Modal'
import PlayerStatsContainer from './PlayerStatsContainer';
import PlayerStat from './PlayerStat';

export default function PlayerCard(props) {
    const { player } = props;
    const { country, picture, firstname, lastname, data: { rank, points } } = player
    const fullName = `${firstname} ${lastname}`
    const [open, setOpen] = useState(false)

    const onClick = event => {
        event.preventDefault()
        setOpen(!open)
    }

    const handleClose = () => setOpen(false);

    return (
        <>
            <a href='/' onClick={onClick} className={styles.cardLink} >
                <div className={styles.card}>
                    <div className={styles.playerPicture}>
                        <img src={picture} alt={fullName} />
                    </div>
                    <div href="/" onClick={onClick} className={styles.cardBody}>
                        <div className={styles.cardTitle}>{fullName}</div>
                        <PlayerStatsContainer>
                            <PlayerStat title='Rank' value={`#${rank}`}/>
                            <PlayerStat title='Points' value={`#${points}`}/>
                            <PlayerStat title='Country' value={`#${country.code}`}/>
                        </PlayerStatsContainer>
                    </div>
                </div>
            </a>
            <Modal open={open} handleClose={handleClose} player={player}/>
        </>
    )
}

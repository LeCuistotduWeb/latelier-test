import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PlayerStat from '../players/PlayerStat';
import styles from './modal.module.scss'

const Modal = (props) => {
    const {
        player,
        handleClose,
        open
    } = props

    const { 
        country, 
        picture, 
        firstname, 
        lastname, 
        data: { 
            rank, 
            points, 
            weight, 
            height, 
            age } 
    } = player
    const fullName = `${firstname} ${lastname}`

    useEffect(() => {
        if (open) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            document.body.style.position = 'inherit';
            document.body.style.top = `-${window.scrollY}px`;
        }
        return () => {
            document.body.style.position = 'fixed';
        };
    }, [open]);

    const formatWeight = (gr) => {
        return gr/1000;
    }

    if (!open) return null;

    return createPortal((
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <button className={styles.closeIcon} onClick={e => handleClose()}>
                    <svg enable-background="new 0 0 12 12" version="1.1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><polygon fill="#1D1D1B" points="12,0.7070313 11.2929688,0 6,5.2929688 0.7070313,0 0,0.7070313 5.2929688,6 0,11.2929688   0.7070313,12 6,6.7070313 11.2929688,12 12,11.2929688 6.7070313,6 " /></svg>
                </button>
                <div className={styles.modalContent}>
                    <div className={styles.modalPicture}>
                        <img src={picture} alt={fullName} />
                    </div>

                    <div className={styles.container}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalFlag}>
                                <img src={country.picture} alt={player.fullName} />
                                <div className={styles.modalCountry}>{country.code}</div>
                            </div>
                            <div>
                                <div className={styles.modalTitle}>{firstname}</div>
                                <div className={styles.modalSubTitle}>{lastname}</div>
                            </div>
                        </div>

                        <div className={styles.modalInfos}>
                            <div className={styles.statsContainer}>
                                <PlayerStat title='Rank' value={`#${rank}`} />
                                <PlayerStat title='Points' value={`#${points}`} />
                                <PlayerStat title='Country' value={`#${country.code}`} />                      
                                <PlayerStat title='Birthday' value="22/05/1987" />
                                <PlayerStat title='Age' value={age} />
                                <PlayerStat title='Weight' value={`${formatWeight(weight)}kg`} />
                                <PlayerStat title='Height' value={`${height}cm`} />
                            </div>

                            <div className={styles.carreer}>
                                <div className={styles.carreerTitle}>Carreer title</div>
                                <p>
                                    <strong>2021</strong> - 5 <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    <strong>2020</strong> - 4 <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    <strong>2019</strong> - 4 <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    ), document.body)
}

export default Modal
import React, { useEffect, useRef } from 'react'
import styles from './searchInput.module.scss'

export default function SearchInput(props) {
    const { value, onChange } = props
    const ref = useRef(null);

    useEffect(() => {
        if(ref.current) ref.current.focus();
    }, [])

    return (
        <input
            ref={ref}
            className={styles.input}
            type='search'
            onChange={onChange}
            name="search"
            placeholder="Rechercher un joueur"
            value={value}
        />
    )
}

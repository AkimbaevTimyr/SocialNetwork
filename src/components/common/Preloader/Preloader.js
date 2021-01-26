import React from 'react'
import styles from './preloader.module.css'


const PreLoader = (props) =>{
    return(
        <div className={styles.preloader}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default PreLoader
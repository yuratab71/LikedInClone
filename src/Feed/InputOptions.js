import React from 'react'
import styles from "./InputOptions.module.css";

function InputOptions({title, Icon, color}) {
    return (
        <div className={styles.inputOptions}>
            <Icon style={{color: color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions

// import { ComponentProps } from 'react';
import React from 'react'
import * as styles from './button.css'


type Props = {
    onClick: () => void
    disabled: boolean
    children: React.ReactNode

}

export default function APIButton({ onClick, disabled, children
 } :Props) {
    return(
    <div className={styles.wrapper}>
     <button className={styles.button} onClick={onClick} disabled={disabled}>
        {children}
    </button>
    </div>)


}
// import { ComponentProps } from 'react';
import React from 'react'

type Props = {
    onClick: () => void
    disabled: boolean
    children: React.ReactNode

}

export default function Button( {onClick, disabled, children
 } :Props) {
    return(
    <div>
     <button onClick={onClick} disabled={disabled}>
        {children}
    </button>
    </div>)


}
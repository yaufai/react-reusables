import React, { ReactNode } from 'react'

export default function Center(props: { children: ReactNode }) {
    return (
        <div style={{ textAlign: 'center' }}>
            {props.children}
        </div>
    )
}

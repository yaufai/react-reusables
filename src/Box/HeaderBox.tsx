import React, { Fragment } from 'react'
import { TitledComponentProps, TitledBoxCSSProperties } from './TitledBox'

function mergeStyles(props: TitledComponentProps): TitledBoxCSSProperties {
    let color = props.color || 'gray'

    let marginSide = 16
    let radius     =  8
    return {
        title: {
            paddingTop   : 8,
            paddingLeft  : 8,
            paddingRight : 8,
            paddingBottom: 8,
            color        : 'white',
            marginLeft   : marginSide,
            marginRight  : marginSide,
            backgroundColor     : color,
            fontWeight          : 'bold',
            border              : `1px solid ${color}`,
            borderTopRightRadius: radius,
            borderTopLeftRadius : radius,
        },
        body: {
            borderTopLeftRadius : 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius : radius,
            borderBottomRightRadius: radius,
            border      : `1px solid ${color}`,
            padding     : 8,
            marginTop   : 0,
            marginLeft  : marginSide,
            marginRight : marginSide,
            marginBottom: 16
        }
    }
}

export default function TitledBox(props: TitledComponentProps) {
    let css = mergeStyles(props)
    return <Fragment>
        <div style={css.title}>{props.title}</div>
        <div style={css.body}>
            {props.children}
        </div>
    </Fragment>
}
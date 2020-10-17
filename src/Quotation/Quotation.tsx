import React, { CSSProperties } from 'react'

type QuotationProps = {
    body       : string
    originName?: string
    originURL ?: string
}


type QuotationCSSProperties = {
    body?       : CSSProperties
    origin?     : CSSProperties
    upperSymbol?: CSSProperties
    lowerSymbol?: CSSProperties
}

const QuotationCSS: QuotationCSSProperties = {
    body: {
        background: '#f5f5f5',
        padding   : 0,
        position  : 'relative'
    },
    upperSymbol: {
        color     : '#999',
        marginTop : 8,
        marginLeft: 8,
        fontSize  : 50,
        position  : 'absolute',
        top       : 0,
        left      : 0,
        fontFamily: "sans-serif"
    },
    origin: {
        position: 'absolute',
        right   : 0,
        bottom  : 0,
        paddingBottom: 16,
        paddingRight : 16
    }
}

export default function Quotation(props: QuotationProps) {
    let styles = QuotationCSS
    return <div style={styles.body}>
        <span style={styles.upperSymbol}>“</span>
        <blockquote style={{
            display: 'inline-block'
        }}>
            {convertTextToReactElements(props.body)}
        </blockquote>

        <div style={styles.origin}>
            <a href={props.originURL}>{props.originName}</a>
        </div>
    </div>
}

function convertTextToReactElements(input: string): React.ReactElement  {
    return <div>{
        input.split('\n').map((item, index) => {
            return <span key={index}>
                {item}
                <br />
            </span>
        })
    }</div>
}
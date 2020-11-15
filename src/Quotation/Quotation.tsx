import React, { CSSProperties } from 'react'

type QuotationType = 'QuoteSign'|'UpperQuoteSign'|'LowerQuoteSign'|'NoQuoteSign' 


type QuotationProps = {
    body       : string
    originName?: string
    originURL ?: string
    quotationType?: QuotationType
}


type QuotationCSSProperties = {
    body?       : CSSProperties
    origin?     : CSSProperties
    leftSymbol? : CSSProperties
    rightSymbol?: CSSProperties
}

const QuotationCSS: QuotationCSSProperties = {
    body: {
        background: '#f5f5f5',
        padding   : 0,
        position  : 'relative',
        margin    : 8
    },
    leftSymbol: {
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
        right   : 0,
        bottom  : 0,
        paddingBottom: 16,
        paddingRight : 16,
        textAlign    : 'right'
    },
    rightSymbol: {
        color     : '#999',
        fontFamily: "sans-serif",
        fontSize  : 50,
        position  : 'absolute',
        bottom    : 25,
        right     : 20
    }
}

export default function Quotation(props: QuotationProps) {
    let withUpperSign = props.quotationType === 'QuoteSign' ||
                        props.quotationType === 'UpperQuoteSign' ||
                        props.quotationType === undefined
    let withLowerSign = props.quotationType === 'QuoteSign' ||
                        props.quotationType === 'LowerQuoteSign'
    let styles = QuotationCSS
    return <div style={styles.body}>
        {withUpperSign
            ? <span style={styles.leftSymbol}>“</span>
            : <div />
        }
        <blockquote style={{
            display: 'inline-block'
        }}>
            <pre style={{
                background: styles.body?.background,
                padding   : 0,
                margin    : 0,
                overflowWrap: 'anywhere'
            }}>
                {convertTextToReactElements(props.body)}
            </pre>
        </blockquote>
        {withLowerSign
            ? <span style={styles.rightSymbol}>”</span>
            : <div />
        }
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
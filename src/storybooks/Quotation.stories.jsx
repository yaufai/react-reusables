import React, { Fragment } from 'react'
import Quotation from '../Quotation/Quotation'

export default { title: 'Quotations' }

const body = `「天は人の上に人を造らず人の下に人を造らず」と言えり。
... ただ学問を勤めて物事をよく知る者は貴人となり富人となり、無学なる者は貧人となり下人となるなり。`
const originName = '福沢諭吉'
const originURL  = 'https://www.aozora.gr.jp/cards/000296/files/47061_29420.html'

export const Standard = () => {
    return <Fragment>
        <Quotation
            body={body}
            originName={originName}
            originURL={originURL}
        />

        <Quotation
            body={body}
            originName={originName}
            originURL={originURL}
            quotationType='UpperQuoteSign'
        />

        <Quotation
            body={body}
            originName={originName}
            originURL={originURL}
            quotationType='LowerQuoteSign'
        />

        <Quotation
            body={body}
            originName={originName}
            originURL={originURL}
            quotationType='QuoteSign'
        />
    </Fragment>
}

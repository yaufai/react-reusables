import React from 'react'
import Quotation from '../Quotation/Quotation'

export default { title: 'Quotations' }

export const UpperSymbolDefault = () => {
    return <Quotation
        body={
`「天は人の上に人を造らず人の下に人を造らず」と言えり。
... ただ学問を勤めて物事をよく知る者は貴人となり富人となり、無学なる者は貧人となり下人となるなり。`
        }
        originName='福沢諭吉'
        originURL='https://www.aozora.gr.jp/cards/000296/files/47061_29420.html'
    />
}

export const UpperSymbolOnly = () => {
    return <Quotation
        body={
`「天は人の上に人を造らず人の下に人を造らず」と言えり。
... ただ学問を勤めて物事をよく知る者は貴人となり富人となり、無学なる者は貧人となり下人となるなり。`
        }
        originName='福沢諭吉'
        originURL='https://www.aozora.gr.jp/cards/000296/files/47061_29420.html'
        quotationType='UpperQuoteSign'
    />
}

export const LowerSymbolOnly = () => {
    return <Quotation
        body={
`「天は人の上に人を造らず人の下に人を造らず」と言えり。
... ただ学問を勤めて物事をよく知る者は貴人となり富人となり、無学なる者は貧人となり下人となるなり。`
        }
        originName='福沢諭吉'
        originURL='https://www.aozora.gr.jp/cards/000296/files/47061_29420.html'
        quotationType='LowerQuoteSign'
    />
}

export const BothSymbols = () => {
    return <Quotation
        body={
`「天は人の上に人を造らず人の下に人を造らず」と言えり。
... ただ学問を勤めて物事をよく知る者は貴人となり富人となり、無学なる者は貧人となり下人となるなり。`
        }
        originName='福沢諭吉'
        originURL='https://www.aozora.gr.jp/cards/000296/files/47061_29420.html'
        quotationType='QuoteSign'
    />
}
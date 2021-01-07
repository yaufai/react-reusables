import React, { Fragment } from 'react'
import { Quotation } from '../index'
import { LoremIpsum, LoremIpsumAuthor, LoremIpsumRef } from './utils'

export default { title: 'Quotations' }

export const Standard = () => {
    return <Fragment>
        <Quotation
            body={LoremIpsum}
            originName={LoremIpsumAuthor}
            originURL={LoremIpsumRef}
        />

        <Quotation
            body={LoremIpsum}
            originName={LoremIpsumAuthor}
            originURL={LoremIpsumRef}
            quotationType='UpperQuoteSign'
        />

        <Quotation
            body={LoremIpsum}
            originName={LoremIpsumAuthor}
            originURL={LoremIpsumRef}
            quotationType='LowerQuoteSign'
        />

        <Quotation
            body={LoremIpsum}
            originName={LoremIpsumAuthor}
            originURL={LoremIpsumRef}
            quotationType='QuoteSign'
        />
    </Fragment>
}

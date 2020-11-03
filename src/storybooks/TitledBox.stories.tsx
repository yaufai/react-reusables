import React, { Fragment } from 'react'
import { TitledBox } from '../index'

export default { title: 'Titled Boxes' }

const title = 'Summary'
const body = <ul>
    <li>Vector space is a concept to enable us to do addition and scaler multiplation.</li>
    <li>Vector does not necessary mean an <i>arrow</i>, and even includes much wider concepts.</li>
</ul>

export const Standard = () => {
    return <Fragment>
        <TitledBox title={title}>
            {body}
        </TitledBox>
        
        <TitledBox title={title} color='blue'>
            {body}
        </TitledBox>

        <TitledBox title={title} color='green'>
            {body}
        </TitledBox>

        <TitledBox title={title} color='orange'>
            {body}
        </TitledBox>

        <TitledBox title={title} color='red'>
            {body}
        </TitledBox>
    </Fragment>

}
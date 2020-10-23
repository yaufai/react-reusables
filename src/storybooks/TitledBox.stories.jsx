import React from 'react'
import TitledBox from '../Box/TitledBox'

export default { title: 'Boxes' }


export const Standard = () => {
    return <TitledBox title='Summary'>
        <ul>
            <li>Vector space is a concept to enable us to do addition and scaler multiplation.</li>
            <li>Vector does not necessary mean an <i>arrow</i>', and even includes much wider concepts.</li>
        </ul>
    </TitledBox>
}
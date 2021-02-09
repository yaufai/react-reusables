import React, { Fragment } from 'react'
import { Center, Modal, ModalToggle, ModalWindow } from '../index'
import { LoremIpsum } from './utils'

export default { title: 'Modal' }

export const Standard = () => {
    let buttonStyle = {
        borderStyle: 'none',
        padding: '8px 16px',
        backgroundColor: 'orange',
        color: 'white'
    }
    return <Fragment>
        <Modal>
            <ModalToggle><button style={buttonStyle}>See Lorem Ipsum</button></ModalToggle>
            <ModalWindow>
                <p>{LoremIpsum}</p>
                <Center>
                    <ModalToggle><button style={buttonStyle}>Close</button></ModalToggle>
                </Center>
            </ModalWindow>
        </Modal>
    </Fragment>
}

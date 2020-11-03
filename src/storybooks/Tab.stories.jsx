import React, { Fragment } from 'react'
import Tab from '../Tab/Tab'
import TabMenu from '../Tab/TabMenu'
import TabPane from '../Tab/TabPane'

export default { title: 'Tab' }

const items = [
    { id: 'windows', label: 'Windows' },
    { id: 'mac'    , label: 'Mac' },
    { id: 'ubuntu' , label: 'Ubuntu' },
]

export const Standard = () => {
    return <Fragment>
        <h1>How to install Nodejs</h1>
        <Tab>
            <TabMenu items={items} />
            <TabPane id='windows'>
                If you already installed <a href="https://chocolatey.org/packages/nodejs">Homebrew</a>, you can install by executing:
                <span style={{ background: 'gray' }}>choco install nodejs</span>
            </TabPane>
            <TabPane id='mac'>
                If you already installed <a href="https://formulae.brew.sh/formula/node">Homebrew</a>, you can install by executing:
                <span style={{ background: 'gray' }}>brew install node</span>
            </TabPane>
            <TabPane id='ubuntu'>
                <span style={{ background: 'gray' }}>sudo apt install nodejs</span>
            </TabPane>
        </Tab>
    </Fragment>
}

import React, { Fragment } from 'react'
import Inline from '../Code/Inline'
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
                <Inline>choco install nodejs</Inline>
            </TabPane>
            <TabPane id='mac'>
                If you already installed <a href="https://formulae.brew.sh/formula/node">Homebrew</a>, you can install by executing:
                <Inline>brew install node</Inline>
            </TabPane>
            <TabPane id='ubuntu'>
                By default, you can install by executing: <Inline>sudo apt install nodejs</Inline>
            </TabPane>
        </Tab>
    </Fragment>
}

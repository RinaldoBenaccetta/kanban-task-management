import React from 'react'
import styled from 'styled-components'

import { SidebarTitle } from './SidebarTitle'
import { SidebarBoardList } from './SidebarBoardList'
import { SidebarDarkModeToggle } from './SidebarDarkModeToggle'

import Colors from '../../themes/variables/colors'
import Modal from '../../themes/mixins/Modal'

import DarkModeTransition from '../../themes/mixins/DarkModeTransition'

const SideBarBackdrop = styled.div`
    background-color: ${Colors.modalBackground};

    position: fixed;

    top: 64px;
    left: 0;

    width: 100%;
    height: 100%;
`

const BoardsPanel = styled.div`
    ${Modal};

    width: 264px;

    margin: 16px auto auto;

    padding: 16px 0;

    ${DarkModeTransition};
`

/**
 * The sidebar component.
 *
 * @constructor
 */
export default () => {
    return (
        <SideBarBackdrop>
            <BoardsPanel>
                <SidebarTitle></SidebarTitle>
                <SidebarBoardList></SidebarBoardList>
                <SidebarDarkModeToggle></SidebarDarkModeToggle>
            </BoardsPanel>
        </SideBarBackdrop>
    )
}

import React from 'react'
import styled from 'styled-components'

import { SidebarTitle } from './SidebarTitle'
import { SidebarBoardList } from './SidebarBoardList'

import { SidebarDarkModeToggle } from './SidebarDarkModeToggle'
import { useQuery } from 'react-query'
import { fetchAllBoards } from '../../queries/fetchAllBoards'
import Colors from '../../themes/variables/colors'
import Modal from '../../themes/elements/Modal'

const SideBarBackdrop = styled.div`
    background-color: ${Colors.modalBackground};

    position: fixed;

    top: 64px;
    left: 0;

    width: 100%;
    height: 100%;
`

const BoardsPanel = styled(Modal)`
    width: 264px;

    margin: 16px auto auto;

    padding: 16px 0;
`

/**
 * The sidebar component.
 *
 * @constructor
 */
export default () => {
    const queryKey = ['boards']
    const { status, data, error } = useQuery(queryKey, fetchAllBoards)

    // set default values while fetching. When response, React will set the new value.
    const boardsQuantity =
        status === 'success' && data.quantity ? data.quantity : 0
    const boardsList = status === 'success' && data.list ? data.list : []

    return (
        <SideBarBackdrop>
            <BoardsPanel>
                <SidebarTitle quantity={boardsQuantity}></SidebarTitle>
                <SidebarBoardList boardList={boardsList}></SidebarBoardList>
                <SidebarDarkModeToggle></SidebarDarkModeToggle>
            </BoardsPanel>
        </SideBarBackdrop>
    )
}

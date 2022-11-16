import React from 'react'
import { SidebarTitle } from './SidebarTitle'
import { SidebarBoardList } from './SidebarBoardList'
import { SidebarDarkmodeToggle } from './SidebarDarkmodeToggle'

import { useQuery } from 'react-query'
import { fetchAllBoards } from '../../queries/fetchAllBoards'

/**
 * The sidebar component.
 *
 * @constructor
 */
export const Sidebar = () => {
    const queryKey = ['boards']
    const { status, data, error } = useQuery(queryKey, fetchAllBoards)

    // define default values
    let boardsQuantity = 0
    let boardsList = []

    // when the promise is resolved, use the fetched data's
    if (status === 'success') {
        boardsQuantity = data.quantity || 0
        boardsList = data.list || []
    }

    return (
        <div>
            <SidebarTitle quantity={boardsQuantity}></SidebarTitle>
            <SidebarBoardList boardList={boardsList}></SidebarBoardList>
            <SidebarDarkmodeToggle></SidebarDarkmodeToggle>
        </div>
    )
}

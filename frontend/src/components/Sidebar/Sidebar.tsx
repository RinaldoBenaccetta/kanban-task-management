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
export default () => {
    const queryKey = ['boards']
    const { status, data, error } = useQuery(queryKey, fetchAllBoards)

    // set default values while fetching. When response, React will set the new value.
    const boardsQuantity =
        status === 'success' && data.quantity ? data.quantity : 0
    const boardsList = status === 'success' && data.list ? data.list : []

    return (
        <div>
            <SidebarTitle quantity={boardsQuantity}></SidebarTitle>
            <SidebarBoardList boardList={boardsList}></SidebarBoardList>
            <SidebarDarkmodeToggle></SidebarDarkmodeToggle>
        </div>
    )
}

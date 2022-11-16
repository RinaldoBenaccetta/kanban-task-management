import React from 'react'
import { SidebarTitle } from './SidebarTitle'
import { SidebarBoardList } from './SidebarBoardList'
import { SidebarDarkmodeToggle } from './SidebarDarkmodeToggle'

export const Sidebar = () => {
    const boardsQuantity = 3
    const boardsList = [
        {
            _id: '123',
            name: 'super board',
        },
        {
            _id: '456',
            name: 'super mega board',
        },
        {
            _id: '789',
            name: 'nice board',
        },
    ]
    return (
        <div>
            <SidebarTitle quantity={boardsQuantity}></SidebarTitle>
            <SidebarBoardList boardList={boardsList}></SidebarBoardList>
            <SidebarDarkmodeToggle></SidebarDarkmodeToggle>
        </div>
    )
}

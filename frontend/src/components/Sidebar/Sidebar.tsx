import React from 'react'
import { SidebarTitle } from './SidebarTitle'
import { SidebarBoardList } from './SidebarBoardList'
import { SidebarDarkmodeToggle } from './SidebarDarkmodeToggle'

export const Sidebar = () => {
    return (
        <div>
            <SidebarTitle></SidebarTitle>
            <SidebarBoardList></SidebarBoardList>
            <SidebarDarkmodeToggle></SidebarDarkmodeToggle>
        </div>
    )
}

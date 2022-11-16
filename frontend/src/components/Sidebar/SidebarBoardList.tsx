import React from 'react'

export const SidebarBoardList = () => {
    return (
        <ul className={'sidebar__bords-list'}>
            <li className={'selected'}>Platform Launch</li>
            <li>Marketing Plan</li>
            <li>Roadmap</li>
            <li>
                <button>+ Create New Board</button>
            </li>
        </ul>
    )
}

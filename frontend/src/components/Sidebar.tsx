import React from 'react'

export const Sidebar = () => {
    return (
        <div>
            <div>ALL BOARDS (todo: put quantity here)</div>
            <ul className={'sidebar__bords-list'}>
                <li className={'selected'}>Platform Launch</li>
                <li>Marketing Plan</li>
                <li>Roadmap</li>
                <li>
                    <button>+ Create New Board</button>
                </li>
            </ul>
            <div>darkmode-checkbox</div>
        </div>
    )
}

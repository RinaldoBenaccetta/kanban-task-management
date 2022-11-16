import React from 'react'

/**
 * The list of boards.
 *
 * @param boardList
 * @constructor
 */
export const SidebarBoardList = ({
    boardList,
}: {
    boardList: { _id: string; name: string }[]
}) => {
    const list = boardList.map((board) => <li key={board._id}>{board.name}</li>)

    return (
        <ul className={'sidebar__boards-list'}>
            {list}
            <li>
                <button>+ Create New Board</button>
            </li>
        </ul>
    )
}

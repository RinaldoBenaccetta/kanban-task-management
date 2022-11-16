import React from 'react'

export const SidebarBoardList = ({
    boardList,
}: {
    boardList: { _id: string; name: string }[]
}) => {
    console.log(boardList)

    const list = boardList.map((board) => <li key={board._id}>{board.name}</li>)

    return (
        <ul className={'sidebar__bords-list'}>
            {list}
            <li>
                <button>+ Create New Board</button>
            </li>
        </ul>
    )
}

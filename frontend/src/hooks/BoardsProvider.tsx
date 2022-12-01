import React, { createContext, PropsWithChildren, useState } from 'react'

import { BoardsType } from '../@types/BoardsType'
import { BoardsContextType } from '../@types/BoardsContextType'

const defaultBoardList = {
    quantity: 0,
    list: [],
}

export const BoardsContext = createContext<BoardsContextType>({
    boardList: defaultBoardList,
})

export const BoardsProvider = ({ children }: PropsWithChildren) => {
    const [boardList, setBoards] = useState(defaultBoardList)

    const setBoardsList = (boards: BoardsType) => setBoards(boards)

    return (
        <BoardsContext.Provider value={{ boardList, setBoardsList }}>
            {children}
        </BoardsContext.Provider>
    )
}

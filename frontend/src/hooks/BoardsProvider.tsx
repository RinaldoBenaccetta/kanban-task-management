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
    const [boardList, setBoards] = useState<BoardsType>(defaultBoardList)

    const setBoardsList = (boardList: BoardsType | unknown) => {
        if (boardList) setBoards(boardList as BoardsType)
    }

    return (
        <BoardsContext.Provider value={{ boardList, setBoardsList }}>
            {children}
        </BoardsContext.Provider>
    )
}

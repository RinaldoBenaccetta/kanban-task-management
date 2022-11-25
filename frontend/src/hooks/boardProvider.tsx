import React, { createContext, PropsWithChildren, useState } from 'react'
import { BoardContextType } from '../@types/BoardContextType'
import { BoardType } from '../@types/BoardType'

const defaultBoard = {
    name: '',
}

export const BoardContext = createContext<BoardContextType>({
    board: defaultBoard,
})

export const BoardProvider = ({ children }: PropsWithChildren) => {
    const [board, setBoard] = useState(defaultBoard)

    const changeBoard = (board: BoardType) => setBoard(board)

    return (
        <BoardContext.Provider value={{ board, changeBoard }}>
            {children}
        </BoardContext.Provider>
    )
}

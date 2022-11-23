import React, { createContext, PropsWithChildren, useState } from 'react'
import { ActualBoard } from '../types/ActualBoard'

const defaultBoard = { _id: '', name: '' }

export const ActualBoardContext = createContext<ActualBoard>(defaultBoard)

export const ActualBoardProvider = ({ children }: PropsWithChildren) => {
    const ActualBoard = ActualBoardContext

    const [actualBoard, setActualBoard] = useState(defaultBoard)

    return (
        <ActualBoard.Provider value={{ actualBoard, setActualBoard }}>
            {children}
        </ActualBoard.Provider>
    )
}

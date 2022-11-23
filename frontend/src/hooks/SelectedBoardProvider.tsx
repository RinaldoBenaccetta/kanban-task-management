import React, { createContext, PropsWithChildren, useState } from 'react'
import { SelectedBoard } from '../types/SelectedBoard'

const defaultBoard = { _id: '', name: '' }

export const SelectedBoardContext = createContext<SelectedBoard>(defaultBoard)

export const SelectedBoardProvider = ({ children }: PropsWithChildren) => {
    const ActualBoard = SelectedBoardContext

    const [selectedBoard, setSelectedBoard] = useState(defaultBoard)

    return (
        <ActualBoard.Provider value={{ selectedBoard, setSelectedBoard }}>
            {children}
        </ActualBoard.Provider>
    )
}

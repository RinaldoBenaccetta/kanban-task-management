import React, { createContext, PropsWithChildren, useState } from 'react'
import { SelectedBoard } from '../types/SelectedBoard'

const defaultBoard = { _id: '', name: '' }

export const SelectedBoardContext = createContext<SelectedBoard>(defaultBoard)

export const SelectedBoardProvider = ({ children }: PropsWithChildren) => {
    const SelectedBoard = SelectedBoardContext

    const [selectedBoard, setSelectedBoard] = useState(defaultBoard)

    return (
        <SelectedBoard.Provider value={{ selectedBoard, setSelectedBoard }}>
            {children}
        </SelectedBoard.Provider>
    )
}

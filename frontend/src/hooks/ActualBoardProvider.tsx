import React, { createContext, PropsWithChildren, useState } from 'react'

export const ActualBoardContext = createContext<string | null>(null)

export const ActualBoardProvider = ({ children }: PropsWithChildren) => {
    const ActualBoard = ActualBoardContext

    const [actualBoard, setActualBoard] = useState(null)

    return (
        <ActualBoard.Provider value={{ actualBoard, setActualBoard }}>
            {children}
        </ActualBoard.Provider>
    )
}

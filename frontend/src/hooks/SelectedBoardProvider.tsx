import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react'
import { SelectedBoard } from '../types/SelectedBoard'
import { BoardListContext } from './BoardListProvider'

const defaultBoard = { _id: '', name: '' }

/**
 * Usable with useContext.
 */
export const SelectedBoardContext = createContext<SelectedBoard>(defaultBoard)

/**
 * Provide the selected board.
 * At initialisation, the selected board is the first in list.
 *
 * @param children
 * @constructor
 */
export const SelectedBoardProvider = ({ children }: PropsWithChildren) => {
    const SelectedBoard = SelectedBoardContext

    const { boardList } = useContext(BoardListContext)

    const boards = boardList.list

    const board = boards.length ? boards[0] : defaultBoard

    const [selectedBoard, setSelectedBoard] = useState(board)

    // UseEffect because at first boardList is empty, so we need
    // to change the value while the boardList is not loaded.
    // When the boardList change, useEffect is triggered and
    // select the first board.
    useEffect(() => {
        if (boards.length) setSelectedBoard(boards[0])
    }, [boardList])

    return (
        <SelectedBoard.Provider value={{ selectedBoard, setSelectedBoard }}>
            {children}
        </SelectedBoard.Provider>
    )
}

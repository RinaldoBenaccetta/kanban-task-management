import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react'
import { BoardInBoardsType } from '../@types/BoardsType'
import { SelectBoardContextType } from '../@types/SelectBoardContextType'
import { BoardsContext } from './BoardsProvider'

const defaultBoard = { _id: '', name: '' }

/**
 * Usable with useContext.
 */
export const SelectedBoardContext = createContext<SelectBoardContextType>({
    selectedBoard: defaultBoard,
})

/**
 * Provide the selected board.
 * At initialisation, the selected board is the first in list.
 *
 * @param children
 * @constructor
 */
export const SelectedBoardProvider = ({ children }: PropsWithChildren) => {
    const [selectedBoard, setSelectedBoard] = useState(defaultBoard)

    // https://felixgerschau.com/react-typescript-context/
    const selectBoard = (board: BoardInBoardsType) => {
        setSelectedBoard(board)
    }

    return (
        <SelectedBoardContext.Provider value={{ selectedBoard, selectBoard }}>
            {children}
        </SelectedBoardContext.Provider>
    )
}

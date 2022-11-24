import { BoardInBoardsType } from './BoardsType'

// https://felixgerschau.com/react-typescript-context/
export type SelectBoardContextType = {
    selectedBoard: BoardInBoardsType
    selectBoard?: (board: BoardInBoardsType) => void
}

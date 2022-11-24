import { BoardInBoardListType } from './BoardListType'

// https://felixgerschau.com/react-typescript-context/
export type SelectBoardContextType = {
    selectedBoard: BoardInBoardListType
    selectBoard?: (board: BoardInBoardListType) => void
}

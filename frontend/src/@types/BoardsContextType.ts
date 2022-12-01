import { BoardsType } from './BoardsType'

// https://felixgerschau.com/react-typescript-context/
export type BoardsContextType = {
    boardList: BoardsType
    setBoardsList?: (boards: BoardsType) => void
}

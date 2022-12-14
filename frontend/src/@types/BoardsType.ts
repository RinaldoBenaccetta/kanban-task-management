export type BoardInBoardsType = {
    _id: string
    name: string
}

export type BoardsListType = BoardInBoardsType[]

export type BoardsType = {
    quantity: number
    list: BoardsListType
}

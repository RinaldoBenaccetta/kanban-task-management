export type BoardInBoardsType = {
    _id: string
    name: string
}

export type BoardsType = {
    quantity: number
    list: BoardInBoardsType[] | []
}

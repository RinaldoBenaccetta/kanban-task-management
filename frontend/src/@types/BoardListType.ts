export type BoardInBoardListType = {
    _id: string
    name: string
}

export type BoardListType = {
    quantity: number
    list: BoardInBoardListType[]
}

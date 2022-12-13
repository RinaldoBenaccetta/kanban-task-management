import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        value: {
            board: {
                selected: {
                    name: '',
                    _id: '',
                },
                data: {},
            },
            boards: {
                quantity: 0,
                list: {},
            },
        },
    },
    reducers: {
        setBoardData: (state, action) => {
            if (action.payload) state.value.board.data = action.payload
        },
        setListOfBoards: (state, action) => {
            if (action.payload) state.value.boards.list = action.payload
        },
        setBoardsQuantity: (state, action) => {
            if (action.payload) state.value.boards.quantity = action.payload
        },
        setActualBoard: (state, action) => {
            if (action.payload) state.value.board.selected = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setBoardData,
    setListOfBoards,
    setBoardsQuantity,
    setActualBoard,
} = boardSlice.actions

export default boardSlice.reducer

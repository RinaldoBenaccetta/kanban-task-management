import { createSlice } from '@reduxjs/toolkit'
import { BoardsType } from '../../@types/BoardsType'

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        value: {
            board: {
                selected: {},
                data: {},
            },
            boards: {
                quantity: 0,
                list: {},
            },
            theme: {},
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
        // increment: state => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1
        // },
        // decrement: state => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // }
    },
})

// Action creators are generated for each case reducer function
export const { setBoardData, setListOfBoards, setBoardsQuantity } =
    boardSlice.actions

export default boardSlice.reducer

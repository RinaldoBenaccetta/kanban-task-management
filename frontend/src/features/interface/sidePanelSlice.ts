import { createSlice } from '@reduxjs/toolkit'

export const sidePanelSlice = createSlice({
    name: 'sidePanel',
    initialState: {
        value: false,
    },
    reducers: {
        showSidePanel: (state) => {
            state.value = true
        },
        hideSidePanel: (state) => {
            state.value = false
        },
        toggleSidePanel: (state) => {
            state.value = !state.value
        },
    },
})

// Action creators are generated for each case reducer function
export const { showSidePanel, hideSidePanel, toggleSidePanel } =
    sidePanelSlice.actions

export default sidePanelSlice.reducer

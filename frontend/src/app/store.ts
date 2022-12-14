import { configureStore } from '@reduxjs/toolkit'

import boardReducer from '../features/board/boardSlice'
import sidePanelReducer from '../features/interface/sidePanelSlice'

export const store = configureStore({
    reducer: {
        board: boardReducer,
        sidePanel: sidePanelReducer,
    },
})

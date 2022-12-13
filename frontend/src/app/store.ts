import { configureStore } from '@reduxjs/toolkit'

import boardReducer from '../features/board/boardSlice'
import sidePanelReducer from '../features/interface/sidePanelSlice'

export default configureStore({
    reducer: {
        board: boardReducer,
        sidePanel: sidePanelReducer,
    },
})

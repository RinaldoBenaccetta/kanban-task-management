// https://felixgerschau.com/react-typescript-context/
export type AppValuesContextType = {
    appValues: {
        sidePanelVisibility: boolean
    }

    toggleSidePanel?: () => void
}

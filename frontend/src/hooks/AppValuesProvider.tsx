import React, { createContext, PropsWithChildren, useState } from 'react'
import { AppValuesContextType } from '../@types/AppValuesContextType'

const defaultValues = {
    sidePanelVisibility: true,
}

/**
 * Returns the context for the theme.
 */
export const AppValuesContext = createContext<AppValuesContextType>({
    appValues: defaultValues,
})

/**
 * Provider of the global app values.
 *
 * @param children
 * @constructor
 */
export const AppValuesProvider = ({ children }: PropsWithChildren) => {
    // https://beta.reactjs.org/apis/react/useContext#updating-data-passed-via-context
    const [appValues, setAppValues] = useState(defaultValues)

    const toggleSidePanel = () => {
        setAppValues({
            ...appValues,
            sidePanelVisibility: !appValues.sidePanelVisibility,
        })
        // let values = appValues
        // values.sidePanelVisibility = !appValues.sidePanelVisibility
        //
        // setAppValues(values)
    }

    const hideSidePanel = () => {
        setAppValues({
            ...appValues,
            sidePanelVisibility: false,
        })
    }

    const showSidePanel = () => {
        setAppValues({
            ...appValues,
            sidePanelVisibility: true,
        })
    }

    return (
        <AppValuesContext.Provider
            value={{ appValues, toggleSidePanel, hideSidePanel, showSidePanel }}
        >
            {children}
        </AppValuesContext.Provider>
    )
}

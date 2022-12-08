import React, { useContext, useEffect, useState } from 'react'
import { AppValuesContext } from '../../hooks/AppValuesProvider'

// @ts-ignore
import iconShow from '../../assets/img/icon-show-sidebar.svg'
import styled from 'styled-components'
import IconMixin from '../../themes/mixins/IconMixin'
import Colors from '../../themes/variables/colors'
import hiddenMixin from '../../themes/mixins/HiddenMixin'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'

const ShowButton = styled.button`
    position: fixed;
    bottom: 32px;
    left: 0;

    border-radius: 0 24px 24px 0;

    background-color: ${Colors.primary.mainPurple};

    border: none;
    outline: none;

    ${hiddenMixin};

    ${BreakPointMixin.tablet`      
        width: 56px;
        height: 48px;
        
        opacity: 1;
        
        &.hidden {
            transition: transform 0.15s ease-out;
    
            transform: translateX(-56px);
        }

        &.visible {
            transition: transform 0.15s ease-out;
            transition-delay: .2s;
    
            transform: translateX((56px));
        }
    `}
`

const ShowIcon = styled.span`
    ${IconMixin};

    mask-image: url(${iconShow});

    background: ${Colors.white};

    width: 16px;
    height: 11px;
`

export const SidebarShowButton = () => {
    const { appValues, showSidePanel } = useContext(AppValuesContext)

    // Use useState to manage the visibility of BoardsPanel
    const [buttonVisibility, setButtonVisibility] = useState(
        appValues && appValues.sidePanelVisibility
    )

    // Retrieve the classes to add based on the value of buttonVisibility
    const buttonClass = buttonVisibility ? 'visible' : 'hidden'

    // Use useEffect to update the value of buttonVisibility
    // when appValues.sidePanelVisibility changes
    useEffect(() => {
        setButtonVisibility(!(appValues && appValues.sidePanelVisibility))
    }, [appValues.sidePanelVisibility])

    return (
        <ShowButton onClick={showSidePanel} className={buttonClass}>
            <ShowIcon />
        </ShowButton>
    )
}

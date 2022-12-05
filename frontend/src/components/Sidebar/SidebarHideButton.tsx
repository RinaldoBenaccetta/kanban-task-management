import React, { useContext } from 'react'
import { ThemeContext } from '../../hooks/ThemeContextProvider'
import styled from 'styled-components'

// @ts-ignore
import iconHide from '../../assets/img/icon-hide-sidebar.svg'
import IconMixin from '../../themes/mixins/IconMixin'

import Colors from '../../themes/variables/colors'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'
import { AppValuesContext } from '../../hooks/AppValuesProvider'

const HideIcon = styled.span`
    ${IconMixin};

    width: 18px;
    height: 16px;

    mask-image: url(${iconHide});

    margin: 0 10px 0 24px;

    ${BreakPointMixin.large`
        margin: 0 15px 0 31px;
    `}

    // fix optic vertical position
    position: relative;
    top: 2px;
`

const HideButton = styled.button`
    background: transparent;

    display: none;

    ${BreakPointMixin.tablet`
        margin-top: 24px;
        
        display: initial;
        
        width: 240px;
        height: 48px;
        
        text-align: left;
    `}

    ${BreakPointMixin.large`
        width: 276px;
    `}

    border: none;
    outline: none;

    padding: 8px;

    border-radius: 0;

    color: ${Colors.grey.mediumGrey};

    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
`

export const SidebarHideButton = () => {
    const { toggleSidePanel } = useContext(AppValuesContext)

    return (
        <HideButton onClick={toggleSidePanel}>
            <HideIcon />
            Hide Sidebar
        </HideButton>
    )
}

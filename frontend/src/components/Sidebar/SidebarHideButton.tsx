import React, { useContext } from 'react'
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
        
        transition: background-color 0.15s, color 0.15s;
        
        @media (hover: hover) {
            &:hover {
                background-color: ${Colors.grey.lightGrey};

                color: ${Colors.primary.mainPurple};

                cursor: pointer;

                span:first-child {
                    transition: background-color 0.15s;
    
                    background: ${Colors.primary.mainPurple};
                }
            }
        }
    `}

    ${BreakPointMixin.large`
        width: 276px;
    `}

    border: none;
    outline: none;

    padding: 8px;

    border-radius: 0 24px 24px 0;

    color: ${Colors.grey.mediumGrey};

    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
`

export const SidebarHideButton = () => {
    const { hideSidePanel } = useContext(AppValuesContext)

    return (
        <HideButton onClick={hideSidePanel}>
            <HideIcon />
            Hide Sidebar
        </HideButton>
    )
}

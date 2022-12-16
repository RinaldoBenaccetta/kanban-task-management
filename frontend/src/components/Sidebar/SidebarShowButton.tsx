import React from 'react'

// @ts-ignore
import iconShow from '../../assets/img/icon-show-sidebar.svg'
import styled from 'styled-components'
import IconMixin from '../../themes/mixins/IconMixin'
import Colors from '../../themes/variables/colors'
import hiddenMixin from '../../themes/mixins/HiddenMixin'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'
import { showSidePanel } from '../../features/interface/sidePanelSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const ShowButton = styled.button`
    position: fixed;
    bottom: 32px;
    left: 0;

    z-index: 10;

    border-radius: 0 24px 24px 0;

    background-color: ${Colors.primary.mainPurple};

    border: none;
    outline: none;

    ${hiddenMixin};

    ${BreakPointMixin.tablet`      
        width: 56px;
        height: 48px;
        
        opacity: 1;
        
          @media (hover: hover) {
            &:hover {
              background-color: ${Colors.primary.mainPurpleHover};
              cursor: pointer;
            }
          }
        
        &.hidden {
            transition: transform 0.4s ease-out, background-color 0.15s, color 0.15s;
    
            transform: translateX(-56px);
        }

        &.visible {
            transition: transform 0.4s ease-out, background-color 0.15s, color 0.15s;
    
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
    const sidePanel = useAppSelector((state) => state.sidePanel.value)
    const dispatch = useAppDispatch()

    // Retrieve the classes to add based on the value of buttonVisibility
    const buttonClass = sidePanel ? 'hidden' : 'visible'

    return (
        <ShowButton
            onClick={() => dispatch(showSidePanel())}
            className={buttonClass}
        >
            <ShowIcon />
        </ShowButton>
    )
}

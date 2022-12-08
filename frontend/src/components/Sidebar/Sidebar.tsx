import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { SidebarTitle } from './SidebarTitle'
import { SidebarBoardList } from './SidebarBoardList'
import { SidebarDarkModeToggle } from './SidebarDarkModeToggle'

import Colors from '../../themes/variables/colors'
import Modal from '../../themes/mixins/Modal'

import DarkModeTransition from '../../themes/mixins/DarkModeTransition'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'
import { SidebarHideButton } from './SidebarHideButton'
import { PropsThemeType } from '../../@types/ThemesType'
import { AppValuesContext } from '../../hooks/AppValuesProvider'

const SideBarBackdrop = styled.div`
    background-color: ${Colors.modalBackground};

    z-index: -1;

    position: fixed;

    top: 64px;
    left: 0;

    width: 100%;
    height: 100%;

    &.hidden {
        transition: opacity 0.2s ease-out;
        opacity: 0;
    }

    &.visible {
        transition: opacity 0.2s ease-out;
        opacity: 1;
    }

    ${BreakPointMixin.tablet`
      width: 0;
      left: 0;
      
      background: transparent;
    `}
`

const BoardsPanel = styled.div`
    ${Modal};

    background-color: ${(props: PropsThemeType) =>
        props.theme.colors.frontBackground};

    width: 264px;

    margin: 16px auto auto;

    padding: 16px 0;

    ${DarkModeTransition};

    &.hidden {
        transition: transform 0.3s ease-out;

        transform: translateY(100vh);
    }

    &.visible {
        transition: transform 0.3s ease-out;

        transform: translateY(80px);
    }

    ${BreakPointMixin.tablet`
    
      box-sizing: border-box;
    
      position: fixed;
    
      box-shadow: none;
      
      border-radius: 0;
      
      width: 261px;
      height: calc(100vh - 80px);
      
      bottom: 0;
      
      padding-top: 15px;
          
      transform: translateX(-100%);
  
      &.hidden {
          transition: transform 0.2s ease-out;
          transform: translateX(-100%);
      }
  
      &.visible {
          transition: transform 0.2s ease-out;
          transform: translateX(0);
          
          border-right: 1px solid ${(props: PropsThemeType) =>
              props.theme.colors.accentLine}
      }
    `}

    ${BreakPointMixin.large`
        width: 300px;
        height: calc(100vh - 96px);
    `}
`

const BottomButtons = styled.div`
    ${BreakPointMixin.tablet`
        position: fixed;
        bottom: 0;
        
        width: 261px;
        
        padding-bottom: 32px;
    `}

    ${BreakPointMixin.large`
        width: 300px;
    `}
`

/**
 * The sidebar component.
 *
 * @constructor
 */
export default () => {
    const { appValues } = useContext(AppValuesContext)

    // Use useState to manage the visibility of BoardsPanel
    const [panelVisibility, setPanelVisibility] = useState(
        appValues && appValues.sidePanelVisibility
    )

    // Retrieve the classes to add based on the value of panelVisibility
    const panelClass = panelVisibility ? 'visible' : 'hidden'

    // Use useEffect to update the value of panelVisibility
    // when appValues.sidePanelVisibility changes
    useEffect(() => {
        setPanelVisibility(appValues && appValues.sidePanelVisibility)
    }, [appValues.sidePanelVisibility])

    return (
        <div>
            <SideBarBackdrop className={panelClass} />
            <BoardsPanel id={'boards-panel'} className={panelClass}>
                <SidebarTitle />
                <SidebarBoardList />
                <BottomButtons>
                    <SidebarDarkModeToggle />
                    <SidebarHideButton />
                </BottomButtons>
            </BoardsPanel>
        </div>
    )
}

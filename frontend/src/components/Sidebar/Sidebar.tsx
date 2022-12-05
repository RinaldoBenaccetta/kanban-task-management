import React from 'react'
import styled from 'styled-components'

import { SidebarTitle } from './SidebarTitle'
import { SidebarBoardList } from './SidebarBoardList'
import { SidebarDarkModeToggle } from './SidebarDarkModeToggle'

import Colors from '../../themes/variables/colors'
import Modal from '../../themes/mixins/Modal'

import DarkModeTransition from '../../themes/mixins/DarkModeTransition'
import hiddenMixin from '../../themes/mixins/HiddenMixin'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'
import { SidebarHideButton } from './SidebarHideButton'
import { PropsThemeType } from '../../@types/ThemesType'

const SideBarBackdrop = styled.div`
    background-color: ${Colors.modalBackground};

    position: fixed;

    top: 64px;
    left: 0;

    width: 100%;
    height: 100%;

    ${BreakPointMixin.tablet`
      width: 0;
      left: 0;
      
      background: transparent;
    `}
`

const BoardsPanel = styled.div`
    ${Modal};

    width: 264px;

    margin: 16px auto auto;

    padding: 16px 0;

    ${DarkModeTransition};

    ${BreakPointMixin.tablet`
    
      box-shadow: none;
      
      border-radius: 0;
      
      width: 261px;
      height: calc(100vh - 80px);
      
      border-right: 1px solid ${(props: PropsThemeType) =>
          props.theme.colors.accentLine}
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
    return (
        <SideBarBackdrop data-visibility={true}>
            <BoardsPanel>
                <SidebarTitle />
                <SidebarBoardList />
                <BottomButtons>
                    <SidebarDarkModeToggle />
                    <SidebarHideButton />
                </BottomButtons>
            </BoardsPanel>
        </SideBarBackdrop>
    )
}

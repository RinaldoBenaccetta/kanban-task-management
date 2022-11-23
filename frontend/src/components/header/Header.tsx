import React from 'react'
import styled from 'styled-components'

import { Theme } from '../../types/DarkLightTheme'

// @ts-ignore
import mobileLogoIcon from '../../assets/img/logo-mobile.svg'
// @ts-ignore
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
// @ts-ignore
import addTaskIcon from '../../assets/img/icon-add-task-mobile.svg'
// @ts-ignore

import editBoardIcon from '../../assets/img/icon-vertical-ellipsis.svg'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'

import ActualBoard from './ActualBoard'
import AddTask from './AddTask'
import Logo from './Logo'
import EditBoard from './EditBoard'
import DarkModeTransition from '../../themes/mixins/DarkModeTransition'

// Create a Header component that'll render an <div> tag with some styles
const Header = styled.div`
    background-color: ${(props: Theme) => props.theme.colors.frontBackground};

    ${DarkModeTransition};

    position: absolute;

    width: 100%;
    height: 64px;

    ${BreakPointMixin.tablet`
        height: 80px;
        
        border-bottom: 1px solid ${(props: Theme) =>
            props.theme.colors.accentLine}
    `}

    ${BreakPointMixin.large`
        height: 96px;
    `}

    left: 0;
    top: 0;

    display: flex;
`

export default () => {
    return (
        <Header>
            <Logo />
            <ActualBoard />
            <AddTask />
            <EditBoard />
        </Header>
    )
}

import React from 'react'
import styled from 'styled-components'

import mobileLogoIcon from '../../assets/img/logo-mobile.svg'
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
import chevronUpIcon from '../../assets/img/icon-chevron-up.svg'
import addTaskIcon from '../../assets/img/icon-add-task-mobile.svg'
import editBoardIcon from '../../assets/img/icon-vertical-ellipsis.svg'
import lightLogoIcon from '../../assets/img/logo-light.svg'
import darkLogoIcon from '../../assets/img/logo-dark.svg'

import typography from '../../themes/typography'
import colors from '../../themes/variables/colors'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'
import buttons from '../../themes/elements/buttons'

// Create a Header component that'll render an <div> tag with some styles
const Header = styled.div`
    background-color: ${(props) => props.theme.colors.frontBackground};

    position: absolute;

    width: 100%;
    height: 64px;

    ${BreakPointMixin.tablet`
        height: 81px;
    `}

    left: 0;
    top: 0;

    display: flex;
`

const LogoContainer = styled.div`
    width: 56px;
    height: 100%;

    ${BreakPointMixin.tablet`
        width: 261px;
        
        border-right: 1px solid ${colors.grey.linesDark}
    `}
`

const Logo = styled.div`
    width: 24px;
    height: 25px;

    margin: 20px 0 19px 16px;

    background-image: url(${mobileLogoIcon});
    background-repeat: no-repeat;

    ${BreakPointMixin.tablet`
        width: 153px;
        height: 25px;
        
        margin: 28px auto auto 24px;
        
        background-image: url(${lightLogoIcon});
    `}
`

const ActualBoard = styled.div`
    flex: 1;

    max-width: 100%;

    margin: 21px 0 20px 26px;

    ${typography.heading.l}

    ${BreakPointMixin.tablet`
        font-size: 20px;
        
        line-height: 25px;
        
        margin: 28px 0 27px 24px;
    `}
`

const ActualBoardChevron = styled.img`
    height: 7px;
    width: 10px;

    margin: 7px 0 5px 8px;

    ${BreakPointMixin.tablet`
        display: none;
    `}
`

const AddTaskContainer = styled.div``

const AddTaskButton = styled.button`
    width: 48px;
    height: 32px;

    border-radius: 16px;
    border: none;
    outline: none;

    margin: 16px auto;

    background-color: ${colors.primary.mainPurple};
    //opacity: 0.25;

    ${BreakPointMixin.tablet`
        ${buttons.primary.l}
        
        margin: 16px auto;
    `}
`

const AddTaskButtonCross = styled.img`
    ${BreakPointMixin.tablet`
        display: none;
    `}
`

const AddTaskButtonText = styled.div`
    // always visible for screen readers
    width: 0px;
    height: 0px;
    overflow: hidden;

    ${BreakPointMixin.tablet`
        width: auto;
        height: auto;
    `}
`

const EditBoardButton = styled.button`
    width: 36px;
    height: 32px;

    ${BreakPointMixin.tablet`
        height: 48px;
        width: 53px;
    `}

    margin: 16px 0;

    border-radius: 0;

    background: transparent;

    border: none;
    outline: none;
`

const EditBoardButtonIcon = styled.img`
    height: 16px;

    margin: auto;

    ${BreakPointMixin.tablet`
        height: 20px;
    `}
`

export default () => {
    return (
        <Header>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <ActualBoard>
                Pactual board
                <ActualBoardChevron src={chevronDownIcon} alt="Show boards" />
            </ActualBoard>
            <AddTaskContainer>
                <AddTaskButton>
                    <AddTaskButtonCross src={addTaskIcon} alt="Add task" />
                    <AddTaskButtonText>
                        <span aria-hidden="true">+</span> Add new task
                    </AddTaskButtonText>
                </AddTaskButton>
            </AddTaskContainer>
            <EditBoardButton>
                <EditBoardButtonIcon src={editBoardIcon} alt="Edit board" />
            </EditBoardButton>
        </Header>
    )
}

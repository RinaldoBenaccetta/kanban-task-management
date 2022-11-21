import React from 'react'
import styled from 'styled-components'

import mobileLogoIcon from '../../assets/img/logo-mobile.svg'
import chevronDownIcon from '../../assets/img/icon-chevron-down.svg'
import chevronUpIcon from '../../assets/img/icon-chevron-up.svg'
import addTaskIcon from '../../assets/img/icon-add-task-mobile.svg'
import editBoardIcon from '../../assets/img/icon-vertical-ellipsis.svg'

import typography from '../../themes/typography'
import colors from '../../themes/colors'

// Create a Header component that'll render an <div> tag with some styles
const Header = styled.div`
    background-color: ${(props) => props.theme.colors.frontBackground};

    position: absolute;

    width: 100%;
    height: 64px;

    left: 0;
    top: 0;

    display: flex;
`

const Logo = styled.div`
    width: 24px;
    height: 25px;

    margin: 20px 0 19px 16px;

    background-image: url(${mobileLogoIcon});
    background-repeat: no-repeat;
`

const ActualBoard = styled.div`
    flex: 1;

    max-width: 100%;

    margin: 21px 0 20px 26px;

    ${typography.heading.l}
`

const ActualBoardChevron = styled.img`
    height: 7px;
    width: 10px;

    margin: 7px 0 5px 8px;
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
    opacity: 0.25;
`

const AddTaskButtonCross = styled.img``

const AddTaskButtonText = styled.div`
    // always visible for screen readers
    width: 0px;
    height: 0px;
    overflow: hidden;
`

const EditBoardButton = styled.button`
    width: 36px;
    height: 32px;

    margin: 16px 0;

    border-radius: 0;

    background: transparent;

    border: none;
    outline: none;
`

const EditBoardButtonIcon = styled.img`
    height: 16px;
`

export default () => {
    return (
        <Header>
            <Logo />
            <ActualBoard>
                actual board
                <ActualBoardChevron src={chevronDownIcon} alt="Show boards" />
            </ActualBoard>
            <AddTaskContainer>
                <AddTaskButton>
                    <AddTaskButtonCross src={addTaskIcon} alt="Add task" />
                    <AddTaskButtonText>Add new task</AddTaskButtonText>
                </AddTaskButton>
            </AddTaskContainer>
            <EditBoardButton>
                <EditBoardButtonIcon src={editBoardIcon} alt="Edit board" />
            </EditBoardButton>
        </Header>
    )
}

import React from 'react'

import styled from 'styled-components'
import colors from '../../themes/variables/colors'
import BreakPointMixin from '../../themes/mixins/BreakPointMixin'
import buttons from '../../themes/elements/buttons'

// @ts-ignore
import addTaskIcon from '../../assets/img/icon-add-task-mobile.svg'

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

    ${BreakPointMixin.large`
        margin: 20px auto 28px auto;
    `}
`

const AddTaskButtonCross = styled.img`
    ${BreakPointMixin.tablet`
        display: none;
    `}
`

const AddTaskButtonText = styled.div`
    // stay visible for screen readers
    width: 0;
    height: 0;
    overflow: hidden;

    ${BreakPointMixin.tablet`
        width: auto;
        height: auto;
    `}
`

export default () => {
    return (
        <AddTaskContainer>
            <AddTaskButton>
                <AddTaskButtonCross src={addTaskIcon} alt="Add task" />
                <AddTaskButtonText>
                    <span aria-hidden="true">+</span> Add new task
                </AddTaskButtonText>
            </AddTaskButton>
        </AddTaskContainer>
    )
}

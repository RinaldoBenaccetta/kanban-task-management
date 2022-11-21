import React from 'react'
import styled from 'styled-components'

import BreakPointMixin from '../../themes/mixins/BreakPointMixin'

//@ts-ignore
import editBoardIcon from '../../assets/img/icon-vertical-ellipsis.svg'

const EditBoardButton = styled.button`
    width: 36px;

    height: 100%;

    padding: 24px 0;

    ${BreakPointMixin.tablet`
        width: 53px;
        
        padding: 30px 0;
    `}

    ${BreakPointMixin.large`
        width: 61px;
        
        padding: 34px 0 42px;
    `}
  
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
        <EditBoardButton>
            <EditBoardButtonIcon src={editBoardIcon} alt="Edit board" />
        </EditBoardButton>
    )
}

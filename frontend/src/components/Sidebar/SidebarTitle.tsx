import React from 'react'
import styled from 'styled-components'
import typography from '../../themes/typography'
import { useSelector } from 'react-redux'

const Title = styled.div`
    ${typography.heading.s}

    margin: 16px auto 19px 24px;

    box-sizing: border-box;
`
/**
 * The sidebar title with the number of boards.
 *
 * @constructor
 */
export const SidebarTitle = () => {
    const boards = useSelector((state) => state.board.value.boards)

    return <Title>ALL BOARDS ({boards.quantity || ''})</Title>
}

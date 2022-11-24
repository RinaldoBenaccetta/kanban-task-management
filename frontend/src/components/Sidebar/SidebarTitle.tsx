import React, { useContext } from 'react'
import styled from 'styled-components'
import typography from '../../themes/typography'
import { BoardsContext } from '../../hooks/BoardsProvider'

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
    const { boardList } = useContext(BoardsContext)

    return <Title>ALL BOARDS ({boardList.quantity})</Title>
}

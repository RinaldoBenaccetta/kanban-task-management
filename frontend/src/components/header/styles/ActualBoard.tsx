import styled, { css } from 'styled-components'
import typography from '../../../themes/typography'
import BreakPointMixin from '../../../themes/mixins/BreakPointMixin'
import hiddenMixin from '../../../themes/mixins/HiddenMixin'

const ActualBoardStyle = css`
    ${typography.heading.l};

    ${BreakPointMixin.tablet`
        font-size: 20px;
        line-height: 25px;
    `};

    ${BreakPointMixin.large`
        line-height: 30px;
        font-size: 24px;
    `};
`

export const ActualBoardContainer = styled.div`
    flex: 1;

    max-width: 100%;

    margin: 21px 0 20px 0;

    ${BreakPointMixin.tablet`
        margin: 28px 0 27px 24px;
    `};
`

export const ActualBoard = styled.div`
    ${ActualBoardStyle};

    ${hiddenMixin};

    margin: 0;

    ${BreakPointMixin.tablet`
        width: auto;
        height: auto;
        opacity: 1;
  `}
`

export const ActualBoardButton = styled.button`
    ${ActualBoardStyle};

    display: flex;

    background: transparent;

    //width: 159px;
    height: 23px;

    margin: 0;
    padding: 0;

    text-align: left;

    border: 0;

    ${BreakPointMixin.tablet`
        ${hiddenMixin};
  `}
`

export const ActualBoardLabel = styled.span`
    //width: 143px;
    height: 23px;

    margin-bottom: 4px;

    display: block;
`

export const ActualBoardChevron = styled.img`
    height: 7px;
    width: 10px;

    margin: 8px 0 8px 6px;

    transition: transform 0.25s;

    ${BreakPointMixin.tablet`
        display: none;
    `};

    ${({ $panelVisibility }: { $panelVisibility: boolean }) =>
        $panelVisibility && `transform: rotate(-180deg);`};
`

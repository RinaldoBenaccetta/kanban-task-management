import styled, { css } from 'styled-components'
import typography from '../../../themes/typography'
import BreakPointMixin from '../../../themes/mixins/BreakPointMixin'
import hiddenMixin from '../../../themes/mixins/HiddenMixin'
import { PropsThemeType } from '../../../@types/ThemesType'
import DarkModeTransition from '../../../themes/mixins/DarkModeTransition'

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

    pointer-events: none;

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

    height: 23px;

    margin: 0;
    padding: 0;

    text-align: left;

    border: 0;

    color: ${(props: PropsThemeType) => props.theme.colors.text};

    ${DarkModeTransition};

    ${BreakPointMixin.tablet`
        ${hiddenMixin};
  `}
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

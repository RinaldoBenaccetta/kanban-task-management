import styled from 'styled-components'
import { PropsThemeType } from '../../../@types/ThemesType'
import typography from '../../../themes/typography'
import Colors from '../../../themes/variables/colors'
import DarkModeTransition from '../../../themes/mixins/DarkModeTransition'

export const Task = styled.li`
    ${DarkModeTransition};

    background-color: ${(props: PropsThemeType) =>
        props.theme.colors.frontBackground};

    margin-bottom: 20px;
    padding: 23px 16px;

    border-radius: 8px;

    box-shadow: 0 4px 6px rgba(58, 78, 126, 0.1);
`

export const TaskTitle = styled.h3`
    ${typography.heading.m};

    margin: 0;
`

export const SubtaskInfos = styled.p`
    ${typography.paragraph.bold};

    color: ${Colors.grey.mediumGrey};

    margin: 8px 0 0;
`

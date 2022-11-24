import { css } from 'styled-components'
import Colors from '../variables/colors'
import { PropsThemeType } from '../../@types/ThemesType'

export default () => css`
    background-color: ${(props: PropsThemeType) =>
        props.theme.colors.frontBackground};

    color: ${Colors.grey.mediumGrey};

    border-radius: 8px;

    box-shadow: 0 10px 20px rgba(54, 78, 126, 0.25);
`

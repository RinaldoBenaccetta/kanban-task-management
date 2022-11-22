import styled from 'styled-components'
import Colors from '../variables/colors'
import { DarkLightTheme } from '../../types/DarkLightTheme'

export default styled.div`
    background-color: ${(props: DarkLightTheme) =>
        props.theme.colors.frontBackground};

    color: ${Colors.grey.mediumGrey};

    border-radius: 8px;

    box-shadow: 0 10px 20px rgba(54, 78, 126, 0.25);
`

import { css } from 'styled-components'
import Colors from '../variables/colors'

export default () => css`
    display: inline-block;

    background: ${Colors.grey.mediumGrey};

    -webkit-mask-size: cover;
    mask-size: cover;
`

import { css } from 'styled-components'

import breakpoints from '../variables/breakpoints'
import { BreakPointsType } from '../../@types/BreakpointsType'

/**
 * Returns the media query with the selected breakpoints and content.
 * Found here : https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
 */
export default Object.keys(breakpoints).reduce(
    (accumulator: any, label: any) => {
        // typescript need the code that is in bracket to don't have errors
        // when access object property with string.
        const breakpoint = breakpoints[label as keyof BreakPointsType]

        accumulator[label] = (...args: [any]) => css`
            @media (min-width: ${breakpoint}) {
                ${css(...args)};
            }
        `
        return accumulator
    },
    {}
)

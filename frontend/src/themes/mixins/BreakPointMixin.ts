import { css } from 'styled-components'

import breakpoints from '../variables/breakpoints'

/**
 * Returns the media query with the selected breakpoints and content.
 * Found here : https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
 */
export default Object.keys(breakpoints).reduce(
    (accumulator: any, label: any) => {
        accumulator[label] = (...args: [any]) => css`
            @media (min-width: ${breakpoints[label]}) {
                ${css(...args)};
            }
        `
        return accumulator
    },
    {}
)

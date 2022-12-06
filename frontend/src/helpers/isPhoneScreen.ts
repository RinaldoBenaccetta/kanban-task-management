import breakpoints from '../themes/variables/breakpoints'

export default () => {
    return window.innerWidth < parseInt(breakpoints.tablet, 10)
}

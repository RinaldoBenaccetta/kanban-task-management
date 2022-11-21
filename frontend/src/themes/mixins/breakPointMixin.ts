import breakpoints from '../variables/breakpoints'

export default (screenSize: number, cssContent: string) => {
    return `
        @media screen and (min-width: (${screenSize})) {
            ${cssContent}
        }
    `
}

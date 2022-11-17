/**
 * Returns the base URL of the page.
 * There is to call the backend API that will be hosted with another
 * URL.
 */
export default () => {
    const protocol = window.location.protocol
    const host = window.location.host

    return `${protocol}//${host}`
}

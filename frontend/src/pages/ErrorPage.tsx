// import { useRouteError } from 'react-router-dom'
//
// export default () => {
//     const error = useRouteError()
//     console.error(error)
//
//     return (
//         <div id="error-page">
//             <h1>Oops!</h1>
//             <p>Sorry, an unexpected error has occurred.</p>
//             <p>
//                 <i>{error.statusText || error.message}</i>
//             </p>
//         </div>
//     )
// }

import { useRouteError } from 'react-router-dom'

export default () => {
    const error = useRouteError() as unknown

    // fixed by openAI >>
    const errorObject = error as Record<string, string>
    const statusText = errorObject.statusText
    const message = errorObject.message

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{statusText || message}</i>
            </p>
        </div>
    )
    // fixed by openAI <<
}

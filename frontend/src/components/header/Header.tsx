import React from 'react'
import styled from 'styled-components'

// Create a Header component that'll render an <div> tag with some styles
const Header = styled.div`
    width: 100%;
    font-size: 5em;
    text-align: center;
    background-color: green;
`

export default () => {
    return (
        <Header>
            <div>logo</div>
            <div>actual board</div>
            <div>
                <button>+ Add new task</button>
            </div>
        </Header>
    )
}

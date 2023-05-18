import styled from "styled-components"

export const Card = styled.div<{background: string}>`
    background-color: ${props => props.background};
    padding: 10px;
    border-radius: 6px;
`

export const Head = styled.div`
    display: flex;
`

export const Name = styled.h3`
    color: #fff;
    margin: 0;
`

export const Body = styled.div`
    display: flex;
`

export const Data = styled.div`
    width: 40%;
`

export const Image = styled.img`
    width: 60%;
    height: fit-content;
`
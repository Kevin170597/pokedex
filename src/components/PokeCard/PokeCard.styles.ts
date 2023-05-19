import styled from "styled-components"

export const Card = styled.div<{background: string}>`
    background-color: ${props => props.background};
    padding: 10px;
    border-radius: 6px;
`

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
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

export const PokeType = styled.p`
    margin: 0;
    border: solid 1px #fff;
    color: #fff;
    border-radius: 20px;
    display: inline-block;
    padding: 0 10px 2px 10px;
    margin: 5px 0;
`

export const Weight = styled.p`
    color: #fff;
    margin: 5px 0 10px 6px;
    font-size: 14px;
`

export const Ability = styled.p`
    color: #fff;
    margin: 5px 0 0 6px;
    font-size: 14px;
`

export const AbilityTitle = styled.b`
    color: #fff;
    margin: 5px 0 0 6px;
    font-size: 14px;
`

export const Image = styled.img`
    width: 60%;
    height: fit-content;
`
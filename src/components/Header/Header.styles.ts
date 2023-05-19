import styled from "styled-components"

export const Head = styled.header`
    display: flex;
    height: 10vh;
    border-bottom: solid 1px #ededed;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
`

export const Logo = styled.img`
    height: 60%;
`

export const DeleteButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #ededed;
    }
`
import styled from "styled-components"

export const Head = styled.header`
    display: flex;
    height: 10vh;
    border-bottom: solid 1px #ededed;
    box-sizing: border-box;
    align-items: center;
    padding: 0 40px;
    @media (min-width: 400px) {
        height: 8vh;
        padding: 0 20px;
    }
    @media (min-width: 1024px) {
        height: 8vh;
        padding: 0 30px;
    }
    @media (min-width: 1280px) {
        height: 10vh;
        padding: 0 30px;
    }
`

export const Logo = styled.img`
    height: 60%;
    margin-right: auto;
    @media (min-width: 400px) {
        height: 40%;
    }
    @media (min-width: 1024px) {
        height: 45%;
    }
    @media (min-width: 1024px) {
        height: 50%;
    }
    @media (min-width: 1440px) {
        height: 60%;
    }
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
    margin-left: 20px;
    cursor: pointer;
    &:hover {
        background-color: #ededed;
    }
`
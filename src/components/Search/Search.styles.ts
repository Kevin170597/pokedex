import styled from "styled-components"

export const Form = styled.form`
    height: 60%;
    display: flex;
`

export const Input = styled.input`
    padding: 0 10px;
    color: #535353;
    border-radius: 6px 0 0 6px;
    border: none;
    border-left: solid 1px #c8d3e7;
    border-bottom: solid 1px #c8d3e7;
    border-top: solid 1px #c8d3e7;
    &:focus {
        outline: none;
        border-left: solid 3px #c8d3e7;
        border-bottom: solid 3px #c8d3e7;
        border-top: solid 3px #c8d3e7;
        background-color: #e6ebf5;
    }
`

export const SearchButton = styled.button`
    border: none;
    border-radius: 0 6px 6px 0;
    background-color: #c8d3e7;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
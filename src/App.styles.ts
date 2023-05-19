import styled from "styled-components"

export const PokeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    gap: 10px;
    padding: 10px 60px;
    box-sizing: border-box;
    height: 90vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 16px;
    }
    &::-webkit-scrollbar-track {
        background: #e4e4e4;
    }
    &::-webkit-scrollbar-thumb {
        background: #ddcb67;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #afa153;
    }
`
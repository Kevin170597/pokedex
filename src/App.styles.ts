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
`
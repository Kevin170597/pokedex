import styled from "styled-components"

export const PokeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px 20px;
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

    @media (min-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    }
    @media (min-width: 1280px) {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    @media (min-width: 1366px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    @media (min-width: 1440px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    @media (min-width: 1920px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`
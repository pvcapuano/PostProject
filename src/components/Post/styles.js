import styled from "styled-components"

export const Container = styled.div`
    background: #ffffff;
    padding: 20px;
    height: 400px;
    width: 350px;
    font-family: "Roboto";

    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    

    h2 {
        color: #1e1e1e;
        font-family: "Roboto";
    }

    p { 
        padding-left: 10px;
        max-width: 330px;

        color: #999999;
        align-self: start;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    transition: opacity 0.2s ease-out;

    svg{
        height: 20px;
        width: 20px;
        color: ${(props) => (props.liked ? "#3ea6ff" : "#1e1e1e")};
    }

    &:hover{
        opacity: 0.5;
    }
`
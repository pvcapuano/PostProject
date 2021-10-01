import styled from 'styled-components'

import { IoAdd } from "react-icons/io5"

export const AddPostButton = styled.button`
    list-style: none;
    border: 3px solid #fff;
    background-color: rgba(0, 0, 0, 0.04);
    font-size: 24px;
    font-family: "Roboto";

    padding: 10px;
    height: 50px;
    width: 250px;
    cursor: pointer;

    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const AddIcon = styled(IoAdd)`
    stroke: "fff";
    width: 64px;
    height: 64px;
`
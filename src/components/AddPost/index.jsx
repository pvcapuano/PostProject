import React from "react";

import { AddPostButton, AddIcon } from './styles'

export default function AddPost(){
    return(
        <li>
            <AddPostButton>
                <AddIcon />
            </AddPostButton>
        </li>
    )
}
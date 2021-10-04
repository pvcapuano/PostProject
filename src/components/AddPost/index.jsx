import React, {useContext} from "react";

import { PostContext } from "../../contexts/PostContext";

import { AddPostButton, AddIcon } from './styles'

export default function AddPost(){
    const { handleAdd } = useContext(PostContext)
    
    return(
        <li>
            <AddPostButton onClick={handleAdd}>
                <AddIcon />
            </AddPostButton>
        </li>
    )
}
import React, {useContext} from "react";

import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5"
import { PostContext } from "../../contexts/PostContext";
import { Container, ButtonArea, Button } from "./styles";


export default function Post({id, title, description, liked}){

    const { handleEdit, handleLike } = useContext(PostContext)

    return(
        <li>
            <Container>
                <h2>{title}</h2>
                <p>{description}</p>
                <ButtonArea>
                    <Button liked={liked} onClick={() => handleLike(id)}>
                        <IoThumbsUp />
                    </Button>
                    <Button onClick={() => handleEdit(id, title, description)}>
                        <IoPencil />
                    </Button>
                    <Button>
                        <IoTrashBin />
                    </Button>
                </ButtonArea>
            </Container>
        </li>
    )
}
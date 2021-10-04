import React from "react";
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";


import {
    Overlay, Container, Header, FormContainer, FormMain, InputGroup, Footer, CloseIcon, CheckIcon }
     from './styles'

export default function FormModal(){

    const { handleClose, 
        title, 
        titleHandler, 
        content, 
        contentHandler, 
        handleSubmit 
    } = useContext(PostContext)

    return(
        <Overlay>
            <Container>
                <Header>
                    <strong>Adicione um post</strong>
                    <button type="button" onClick={handleClose}>
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer onSubmit={handleSubmit}>
                    <FormMain>
                        <InputGroup>
                        <label htmlFor="title">Título</label>
                        <input id="title" type="text" value={title} onChange={titleHandler}></input>
                        </InputGroup>
                        <InputGroup>
                        <label htmlFor="content">Postagem</label>
                        <textarea id="content" rows="5" cols="30"
                            minLength="3" maxLength="200" value={content} onChange={contentHandler}></textarea>
                        </InputGroup>
                    </FormMain>

                    <Footer>
                        <button type="submit">
                            <CheckIcon />
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    )
}
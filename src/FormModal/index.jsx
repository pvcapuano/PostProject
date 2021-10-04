import React from "react";

import {
    Overlay, Container, Header, FormContainer, FormMain, InputGroup, Footer, CloseIcon, CheckIcon }
     from './styles'

export default function FormModal(){
    return(
        <Overlay>
            <Container>
                <Header>
                    <strong>Adicione um post</strong>
                    <button type="button">
                        <CloseIcon />
                    </button>
                </Header>
                <FormContainer>
                    <FormMain>
                        <InputGroup>
                        <label htmlFor="title">Título</label>
                        <input id="title" type="text"></input>
                        </InputGroup>
                        <InputGroup>
                        <label htmlFor="content">Postagem</label>
                        <textarea id="content"></textarea>
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
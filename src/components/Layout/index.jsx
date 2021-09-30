import React from "react";

import Header from '../Header'
import Footer from '../Footer'
import PostList from '../PostList'


import { Container } from "./styles"

export default function Layout(){
    return(
        <Container>
            <Header />
            <PostList />
            <Footer />
        </Container>
    )
}
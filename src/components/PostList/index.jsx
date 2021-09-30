import React from "react";

import {Container, PostListWrapper} from "./styles"
import AddPost from "../AddPost";

export default function PostList() {
    return (
        <Container>
            <PostListWrapper>
                <AddPost />
            </PostListWrapper>
        </Container>
    )
}
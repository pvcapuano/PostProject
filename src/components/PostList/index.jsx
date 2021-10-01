import React from "react";

import {Container, PostListWrapper} from "./styles"
import AddPost from "../AddPost";
import Post from "../Post";

export default function PostList() {
    return (
        <Container>
            <PostListWrapper>
                <Post
                id={1}
                title= "Title test"
                description= "bla bla bla"
                liked={false}
                />
                <AddPost />
            </PostListWrapper>
        </Container>
    )
}
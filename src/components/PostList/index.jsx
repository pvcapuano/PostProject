import React, {useEffect, useState} from "react";

import {Container, PostListWrapper} from "./styles"
import AddPost from "../AddPost";
import Post from "../Post";

import api from "../../services/api"

export default function PostList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get("/feeds").then((response) => {
            setPosts(response.data)
        })
        console.log(posts)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <Container>
            <PostListWrapper>
                {posts?.map((post) => (
                    <Post
                    key={post.authorId}
                    id={post.authorId}
                    title={post.title}
                    description={post.description}
                    liked={post.liked}
                    />
                ))}
                <AddPost />
            </PostListWrapper>
        </Container>
    )
}
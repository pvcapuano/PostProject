import React, {useEffect, useState} from "react";

import {Container, PostListWrapper} from "./styles"
import AddPost from "../AddPost";
import Post from "../Post";

import api from "../../services/api"

export default function PostList() {

    const [feeds, setFeeds] = useState([])

    useEffect(() => {
        api.get("/feeds", { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoic3RyaW5nIiwiaWF0IjoxNjMzMzgyNjc1LCJleHAiOjE2MzMzODYyNzV9.zmcxHgCGXUFYv-tJ2Cf0w3IxD8osA3wDnfpn81GuD08'}}).then((response) => {
            setFeeds(response.data)
            console.log(response.data)
        })
        console.log(feeds)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <Container>
            <PostListWrapper>
                {feeds?.map((feed) => (
                    <Post
                    key={feed.id}
                    id={feed.id}
                    title={feed.author.username}
                    description={feed.content}
                    liked={feed.likes}
                    />
                ))}
            </PostListWrapper>
            <AddPost />
        </Container>
    )
}
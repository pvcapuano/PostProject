import React, {useEffect, useState} from "react";

import {Container, PostListWrapper} from "./styles"
import AddPost from "../AddPost";
import Post from "../Post";

import api from "../../services/api"

export default function PostList() {

    const [feeds, setFeeds] = useState([])

    useEffect(() => {
        api.get("/feeds", { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTMsInVzZXJuYW1lIjoibHVpemhycWFzQGdtYWlsLmNvbSIsImlhdCI6MTYzMzM2MTgzNSwiZXhwIjoxNjMzMzY1NDM1fQ.K0Ub5nLxPwg7COka0rKEGez79MdE9WvERTq76F_5E0c'}}).then((response) => {
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
                    title={feed.username}
                    description={feed.content}
                    liked={feed.likes}
                    />
                ))}
                <AddPost />
            </PostListWrapper>
        </Container>
    )
}
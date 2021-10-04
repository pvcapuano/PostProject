import { createContext, useState } from "react";
import FormModal from "../components/FormModal";

import api from "../services/api"

export const PostContext = createContext()

export function PostContextProvider({children}) {
    const [openFormModal, setOpenFormModal] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [id, setId] = useState(false)

    function handleEdit(postId, postTitle, postContent) {
        setTitle(postTitle)
        setContent(postContent)
        setId(postId)
        setOpenFormModal(true)
    }

    function handleAdd() {
        setOpenFormModal(true)
    }

    function handleClose() {
        if(title) {
            setTitle('')
        if(content) {
            setContent('')
        }
        }
        setOpenFormModal(false)        
    }

    function titleHandler(event) {
        setTitle(event.target.value)
    }

    function handleLike(id) {
        api.patch(`reaction/${id}`)
    }

    function contentHandler(event) {
        setContent(event.target.value)   
    }

    function handleSubmit(event) {
        event.preventDefault()

        const post = {
            title, content
        }
        api.post("/feed", post, { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoic3RyaW5nIiwiaWF0IjoxNjMzMzg1MTc3LCJleHAiOjE2MzMzODg3Nzd9.WaR9w6J7HDIM5lM1KUbBC3CGGW6c_OPOByfS-2iJwbI'}})
        
        setOpenFormModal(false)  
    }

    return(
    <PostContext.Provider 
    value={{handleAdd, 
        handleClose, 
        title, 
        setTitle, 
        content, 
        setContent,
        titleHandler,
        contentHandler,
        handleSubmit,
        handleEdit,
        id,
        setId,
        handleLike
        }}>
            {children}
            {openFormModal && <FormModal />}
        </PostContext.Provider>
    )
}
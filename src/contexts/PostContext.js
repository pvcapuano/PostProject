import { createContext, useState } from "react";
import FormModal from "../components/FormModal";

import api from "../services/api"

export const PostContext = createContext()

export function PostContextProvider({children}) {
    const [openFormModal, setOpenFormModal] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    function handleEdit(postTitle, postContent) {
        setTitle(postTitle)
        setContent(postContent)
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

    function contentHandler(event) {
        setContent(event.target.value)   
    }

    function handleSubmit(event) {
        event.preventDefault()
        const post = {
            title, content
        }
        api.post("/feed",  post)
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
        handleEdit
        }}>
            {children}
            {openFormModal && <FormModal />}
        </PostContext.Provider>
    )
}
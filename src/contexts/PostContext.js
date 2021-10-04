import { createContext, useState } from "react";
import FormModal from "../components/FormModal";

import api from "../services/api"

export const PostContext = createContext()

export function PostContextProvider({children}) {
    const [openFormModal, setOpenFormModal] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    function handleAdd() {
        setOpenFormModal(true)
    }

    function handleClose() {
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
        api.post("/feed", post)
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
        handleSubmit
        }}>
            {children}
            {openFormModal && <FormModal />}
        </PostContext.Provider>
    )
}
import { createContext, useState } from "react";
import FormModal from "../FormModal";

export const PostContext = createContext()

export function PostContextProvider({children}) {
    const [openFormModal, setOpenFormModal] = useState(false)

    function handleAdd() {
        setOpenFormModal(true)
    }

    return(
    <PostContext.Provider value={{handleAdd}}>
            {children}
            {openFormModal && <FormModal />}
        </PostContext.Provider>
    )
}
import { createContext, useState } from "react";

export const PostContext = createContext()

export function PostContextProvider({children}) {
    // const [] = useState()

    return(
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}
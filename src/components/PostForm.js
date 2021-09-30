import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function PostForm(){

    const [content, setContent] = useState([])

    useEffect(() => {
        api.get('content').then(({data}) => {
            setContent(data)
        })
        console.log(content)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div>
            <form>
                <input placeholder="Título" type="text" />
                <textarea placeholder="Faça sua publicação aqui" rows="10" cols="30" />
                <button onSubmit="">Postar</button>
            </form>
        </div>
    )
}
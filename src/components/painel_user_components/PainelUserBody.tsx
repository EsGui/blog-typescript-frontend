"use client"

import axios from "axios";
import JoditEditor from "jodit-react";
import styles from '../../styles/painel_user_styles/PainelUserBody.module.css'
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchPersistLogin } from "@/lib/features/blogs/usersSlice";

export default function PainelUserBody() {
    const editor = useRef(null);
    const user = useAppSelector((state) => state.users.user);
    const dispatch = useAppDispatch();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [coverImage, setCoverImage] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("Token")
        if (token) {
            dispatch(fetchPersistLogin());
        }
    }, []);


    console.log("user no componente do painel de usuário ===>>>", user)

    const sendBlog = async () => {
        const formData = new FormData();
        formData.append("file", coverImage);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("userId", user.id)

        try {
            const request = await axios.post("http://localhost:3001/register-blog", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className={ styles.DivPainelUserBodyContainer }>
            <div className={ styles.Create }>
                <input onChange={ ({ target }) => setTitle(target.value) } type="text" placeholder="Titulo" />
                <h3>Insira a imagem de capa</h3>
                <input type="file" onChange={({ target: { files } } : any) => setCoverImage(files[0]) } />
                <JoditEditor 
                    ref={editor}
                    value={content}
                    onBlur={(newContent) => setContent(newContent)}
                />
                <button onClick={ sendBlog } type="button">Enviar</button>
            </div>
        </div>
    )
}
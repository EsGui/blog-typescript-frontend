"use client"

import axios from "axios";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

export default function PainelUserBody() {
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [coverImage, setCoverImage] = useState("");

    const sendBlog = async () => {
        const formData = new FormData();
        formData.append("file", coverImage);
        formData.append("title", title);
        formData.append("content", content);

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
        <div>
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
    )
}
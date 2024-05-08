"use client"

import { useState } from "react";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addBlog } from "@/lib/features/blogs/blogsSlice";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const get = useAppSelector((state) => state.blog)
  const dispatch = useAppDispatch();

  const sendBlog = () => {
    dispatch(addBlog({
      title,
      content,
      author
    }))
    console.log(get)
  }

  console.log(get)

  return (
    <main className={styles.main}>
      <input onChange={ ({ target }) => setTitle(target.value) } type="text" placeholder="Titulo do blog" />
      <input onChange={ ({ target }) => setContent(target.value) } type="text" placeholder="Conteudo do blog" />
      <input onChange={ ({ target }) => setAuthor(target.value) } type="text" placeholder="Autor do blog" />
      <button onClick={sendBlog} type="button">Enviar blog</button>
    </main>
  );
}

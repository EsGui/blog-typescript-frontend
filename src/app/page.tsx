"use client"

import { useState } from "react";
import styles from "./page.module.css";
import { useAppSelector } from "@/lib/hooks";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [autor, setAutor] = useState("");

  const get = useAppSelector((state) => state.blog)

  const sendBlog = () => {

  }

  console.log(get)

  return (
    <main className={styles.main}>
      <input onChange={ ({ target }) => setTitle(target.value) } type="text" placeholder="Titulo do blog" />
      <input onChange={ ({ target }) => setContent(target.value) } type="text" placeholder="Conteudo do blog" />
      <input onChange={ ({ target }) => setAutor(target.value) } type="text" placeholder="Autor do blog" />
      <button type="button">Enviar blog</button>
    </main>
  );
}

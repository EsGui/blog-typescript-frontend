"use client"

import { fetchBlogEspecific } from "@/lib/features/blogs/blogsSlice";
import styles from '../../styles/blog_especific_styles/BlogEspecificBody.module.css'
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect } from "react"

export default function BlogEspecificBody({ slug }) {
    const dispatch = useAppDispatch();
    const blogEspecific = useAppSelector((state) => state.blog.blogEspecific);

    useEffect(() => {
        (async() => {
            dispatch(fetchBlogEspecific(slug))
        })()
    }, []);

    console.log("Blog especifico ===>>>", blogEspecific)

    return (
        <div>
            <h1>{ blogEspecific.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: blogEspecific.content }}  />
        </div>
    )
}
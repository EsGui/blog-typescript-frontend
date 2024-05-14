'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from '../../styles/home_styles/HomeBody.module.css';
import { useEffect } from 'react';
import { fetchAllBlogs } from '@/lib/features/blogs/blogsSlice';
import { fetchPersistLogin } from '@/lib/features/blogs/usersSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomeBody() {
    const userLogged = useAppSelector((state) => state.users.user);
    const blogs = useAppSelector((state) => state.blog.listBlogs);
    const dispatch = useAppDispatch();
    const router = useRouter()

    useEffect(() => {
        dispatch(fetchAllBlogs());
        const token = localStorage.getItem("Token")
        if (token) {
            dispatch(fetchPersistLogin());
        }
    }, []);

    console.log(blogs);

    const openBlog = (title: string) => {
        router.push(`/blog-especific/${title.replace(" ", "-")}`);
    }

    return (
        <div className={styles.HomeBodyContainer}>
            {
                blogs.map(({ title, coverImage }: any, index) => (
                    <div className={ styles.Blog } onClick={() => openBlog(title)} key={index}>
                        <img width="100%" height="100%" src={ coverImage } alt="cover image" />
                        <p>{ title }</p>
                    </div>
                ))
            }
        </div>
    )
}
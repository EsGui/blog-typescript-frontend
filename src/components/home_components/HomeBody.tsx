'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import style from '../../styles/home_styles/HomeBody.module.css';
import { useEffect } from 'react';
import { fetchAllBlogs } from '@/lib/features/blogs/blogsSlice';
import { fetchPersistLogin } from '@/lib/features/blogs/usersSlice';

export default function HomeBody() {
    const userLogged = useAppSelector((state) => state.users.user);
    const blogs = useAppSelector((state) => state.blog.listBlogs);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllBlogs());
        const token = localStorage.getItem("Token")
        if (token) {
            dispatch(fetchPersistLogin());
        }
    }, []);

    console.log(blogs);

    return (
        <div className={style.HomeBodyContainer}>
            <h1>Testando</h1>
        </div>
    )
}
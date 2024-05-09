'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import style from '../../styles/home_styles/HomeBody.module.css';
import { useEffect } from 'react';
import { fetchAllBlogs } from '@/lib/features/blogs/blogsSlice';

export default function HomeBody() {
    const blogs = useAppSelector((state) => state.blog.listBlogs);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllBlogs());
    }, []);

    console.log(blogs);

    return (
        <div className={style.HomeBodyContainer}>
            <h1>Testando</h1>
        </div>
    )
}
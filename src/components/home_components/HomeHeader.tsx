"use client"

import Image from 'next/image'
import styles from '../../styles/home_styles/HomeHeader.module.css';
import ComicBook from '../../../public/icons/comic-book.png';
import User from '../../../public/icons/user.png';
import Logout from '../../../public/icons/logout.png'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchPersistLogin } from '@/lib/features/blogs/usersSlice';
import Link from 'next/link';

export default function HomeHeader() {
    const redirect = useRouter();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.users.user);

    console.log("HomeHeader ==>>", user);

    useEffect(() => {
        const token = localStorage.getItem("Token")
        if (token) {
            dispatch(fetchPersistLogin());
        }
    }, []);

    const redirectLogin = () => {
        const token = localStorage.getItem("Token");
        if (!token) {
            redirect.push("/login");
        }
    }

    const redirectLogout = () => {
        localStorage.removeItem("Token");
        redirect.push("/login")
    }

    const redirectHome = () => {
        redirect.push("/")
    }

    return (
        <div className={styles.HomeHeaderContainer}>
            <div>
                <Image onClick={redirectHome} style={{ cursor: 'pointer' }} width={80} height={80} src={ComicBook} alt="Image book" />
            </div>
            <div>
                {
                    (!localStorage.getItem("Token")) ?
                    <Image onClick={redirectLogin} style={{ cursor: 'pointer' }}  width={50} height={50} src={User} alt="User" />
                    : (
                        <>
                            <Link href="/painel-user">{ user.name }</Link>
                            <Image onClick={redirectLogout} style={{ cursor: 'pointer' }}  width={50} height={50} src={Logout} alt="User" />
                        </>
                    )
                }
                
            </div>
        </div>        
    )
}
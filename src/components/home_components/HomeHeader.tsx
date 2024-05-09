"use client"

import Image from 'next/image'
import styles from '../../styles/home_styles/HomeHeader.module.css';
import ComicBook from '../../../public/icons/comic-book.png';
import User from '../../../public/icons/user.png'
import { useRouter } from 'next/navigation';

export default function HomeHeader() {
    const redirect = useRouter()

    const redirectLogin = () => {
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
                <Image onClick={redirectLogin} style={{ cursor: 'pointer' }}  width={50} height={50} src={User} alt="User" />
            </div>
        </div>        
    )
}
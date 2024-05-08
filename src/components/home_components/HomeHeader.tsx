import Image from 'next/image'
import styles from '../../styles/home_styles/HomeHeader.module.css';
import ComicBook from '../../../public/icons/comic-book.png';
import User from '../../../public/icons/user.png'

export default function HomeHeader() {
    return (
        <div className={styles.HomeHeaderContainer}>
            <div>
                <Image width={80} height={80} src={ComicBook} alt="Image book" />
            </div>
            <div>
                <Image width={50} height={50} src={User} alt="User" />
            </div>
        </div>        
    )
}
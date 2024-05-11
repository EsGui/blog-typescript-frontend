"use client"

import Link from 'next/link'
import styles from '../../styles/login_style/LoginBody.module.css'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/lib/hooks';
import { fetchLoginUser, fetchPersistLogin } from '@/lib/features/blogs/usersSlice';
import { useRouter } from 'next/navigation';

export default function LoginBody() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogged = () => {
        dispatch(fetchLoginUser({ email, password }));
        const token = localStorage.getItem("Token");
        router.push("/");
        if(token) {
            dispatch(fetchPersistLogin());
        }
    }

    return (
        <div className={styles.DivLoginBodyContainer}>
            <div className={ styles.DivLoginBodyAuth }>
                <input onChange={ ({ target }) => setEmail(target.value) } type="email" placeholder="Digite seu email" />
                <input onChange={ ({ target }) => setPassword(target.value) } type="password" placeholder="Digite sua senha" />
                <button onClick={ userLogged } type="button">Entrar</button>
                <Link href="http://localhost:3000/register-user">Não tem uma conta? Registre-se</Link>
            </div>
        </div>
    )
}
'use client';

import { fetchCreateUsers } from "@/lib/features/blogs/usersSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";

export default function LoginBody() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useAppDispatch();

    const registerUser = () => dispatch(fetchCreateUsers({ name, email, password }))

    return (
        <div>
            <input onChange={ ({ target }) => setName(target.value) } type="text" placeholder="Digite seu nome" />
            <input onChange={ ({ target }) => setEmail(target.value) } type="email" placeholder="Digite seu email" />
            <input onChange={ ({ target }) => setPassword(target.value) } type="password" placeholder="Crie sua senha" />
            <button onClick={ registerUser } type="button">Registrar</button>
        </div>
    )
}
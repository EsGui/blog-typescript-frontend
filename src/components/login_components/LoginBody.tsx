import Link from 'next/link'
import styles from '../../styles/login_style/LoginBody.module.css'

export default function LoginBody() {
    return (
        <div className={styles.DivLoginBodyContainer}>
            <div className={ styles.DivLoginBodyAuth }>
                <input type="email" placeholder="Digite seu email" />
                <input type="password" placeholder="Digite sua senha" />
                <button type="button">Entrar</button>
                <Link href="http://localhost:3000/register-user">Não tem uma conta? Registre-se</Link>
            </div>
        </div>
    )
}
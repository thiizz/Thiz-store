import { MdEmail } from 'react-icons/md'
import { RiLockFill } from 'react-icons/ri'
import style from './login.module.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'


export default function Login({ login, setLogin }) {
	const { register, handleSubmit } = useForm()
	const [registred, setRegistred] = useState(false)



	useEffect(() => {
		if (login === "registred") {
			setRegistred(true)
			setLogin(true)
		}
	}, [login])


	function handler(data) {
		console.log(data);
	}
	return (
		<>
			<div className={style.loginTitle}>Iniciar sessão</div>
			<div className={style.formContainer}>
				<div className={style.newUser}>Novo usuário? <button onClick={() => setLogin(false)} className={style.register}><strong>Cadastre-se aqui.</strong></button></div>
				{registred ? <p className={style.success}>Por favor confirme o email que enviamos.</p> : ''}
				<form className={style.form} method="post" onSubmit={handleSubmit(handler)} onClick={() => setRegistred(false)}>
					<label className={`${style.label} ${style.labelNormal}`}>
						<MdEmail className={`${style.icon} ${style.iconNormal}`} />
						<input {...register('email')} className={style.input} type="email" name="email" placeholder='Email' autoComplete="false" />
					</label>
					<label className={`${style.label} ${style.labelNormal}`}>
						<RiLockFill className={`${style.icon} ${style.iconNormal}`} />
						<input {...register('password')} className={style.input} type="password" name="password" placeholder='Senha' autoComplete="false" />
					</label>
					<div className={style.containerRecover}>
						<button type='button' className={style.recoverPassword}>Esqueceu a senha?</button>
					</div>
					<button type='submit' className={`${style.btn} ${style.btnEnable}`} disabled={false}>iniciar sessão</button>
				</form>
			</div>
		</>
	)
}
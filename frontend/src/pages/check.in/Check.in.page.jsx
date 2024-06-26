import './Check.in.page.scss';
import { ReactComponent as Eye } from '@assets/svg/eye_icon.svg';
// import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { registerUser } from '../../api/users.api';
export default function CheckInPage({ login = false }) {
	const navigate = useNavigate();
	// const [data] = useState({
	// 	email: 'user@example.com',
	// 	password: 'string',
	// 	firstname: 'string',
	// 	lastname: 'string',
	// 	surname: 'string',
	// 	birthday: '2024-04-26T08:13:59.493Z',
	// 	is_man: true,
	// 	contact: 'string'
	// });
	async function handleRegistration() {
		// const response = await registerUser(data);
		// console.log(response);
	}
	return (
		<>
			<div className="check_in_container">
				<h1 className="check_in_header">
					{login ? 'Войти' : 'Зарегистрироваться'}
				</h1>
				<form className="check_in_form">
					{!login && (
						<>
							<label className="input_container">
								<p className="input_description">ФИО</p>
								<input className="input" type="text" />
							</label>
						</>
					)}
					<label className="input_container">
						<p className="input_description">Выберите вашу специальность</p>
						<select className="input_select" defaultValue="student">
							<option className="input_option" value="student">
								Ученик
							</option>
							<option className="input_option" value="trainer">
								Тренер
							</option>
						</select>
					</label>
					{!login && (
						<>
							<label className="input_container">
								<p className="input_description">Введите дату рождения</p>
								<input className="input" type="text" />
							</label>
							<label className="input_container">
								<p className="input_description">
									Введите номер вашей группы или имя тренера
								</p>
								<input className="input" type="text" />
							</label>
						</>
					)}

					<label className="input_container">
						<p className="input_description">Ваш e-mail</p>
						<input className="input" type="text" />
					</label>

					<label className="input_container">
						<p className="input_description">Пароль</p>
						<div className="input_password">
							<input className="input" type="password" />
							<Eye className="input_password_eye" />
						</div>
					</label>

					<div className="check_in_forget_password">
						<a href="/#" className="check_in_forget_password_link">
							Забыли пароль?
						</a>
					</div>

					<label className="input_container input_checkbox_container">
						<input className="input_checkbox" type="checkbox" />
						<p className="input_description">
							Подтверждая, вы соглашаетесь на обработку персональных данных и c
							<Link
								to="/confidence"
								className="check_in_confidence_politic_link"
							>
								политикой конфиденциальности
							</Link>
						</p>
					</label>
					<div className="check_in_submit_btn" onClick={handleRegistration}>
						{login ? 'Войти' : 'Зарегистрироваться'}
					</div>
				</form>
				{login ? (
					<>
						<div className="check_in_btn_container">
							<a href="/#" className="check_in_btn_label">
								Нет аккаунта?
							</a>
							<div
								onClick={() => navigate('/registration')}
								className="check_in_btn"
							>
								Зарегистрироваться
							</div>
						</div>
					</>
				) : (
					<>
						<div className="check_in_btn_container">
							<label className="check_in_btn_label">Уже есть аккаунт?</label>
							<div onClick={() => navigate('/login')} className="check_in_btn">
								Войти
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

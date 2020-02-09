import React from 'react';
import './login.css'
class Login extends React.Component {

	render() {
		return (
			<div className='login-container'>
				<h1>Signup </h1>
				<div className="form-container">
					<form className="login-form" >
						<div className="user-name">
							<div>
								<label id="usrlbl" ></label>
								<input id="username" type="text" name="name" placeholder="name" />


							</div>
						</div>
						<div>
							<input id="useremail" type="text" name="email" placeholder="email" />

						</div>

						<div>
							<label id="pswdlbl"></label>
							<input id="userpassword" type="password" name="password" placeholder="password" />

						</div>
						<button type="submit">Signup</button>

					</form>
				</div>

			</div>
		)
	}
}

export default Login;
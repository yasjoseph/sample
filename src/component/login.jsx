import React from 'react';
import './login.css'
class Login extends React.Component{

    render(){
        return (
            <p>
				<h1>Login Form</h1>
             <div className="form-container">
			<form className="login-form" >
				<div className="user-name">
				<p>
					<label id="usrlbl" ></label>
					<input id="username" type="text" name="name" placeholder="name"/>
					

				</p>
				</div>
				<p>
					<input id="useremail"  type="text" name="email" placeholder="email"/>
					
				</p>
				
				<p>
					<label id="pswdlbl"></label>
					<input id="userpassword" type="password" name="password" placeholder="password"/>
					
				</p>
				<button  type="submit">submit</button>
				
			</form>
		</div>
			
         </p>
        )
    }
}

export default Login;
import React from 'react';
import './login.css'

class Signup extends React.Component{
    render(){
        return(

            <p>
            <div className="form-container">
            <form className="login-form" >
               
               <p>
                   <input id="useremail"  type="text" name="email" placeholder="email"/>
                   
               </p>
               
               <p>
                   <label id="pswdlbl"></label>
                   <input id="userpassword" type="password" name="password" placeholder="password"/>
                   
               </p>
               <button  type="submit">Signup</button>
               
           </form>
       </div>
           
        </p>
        )
    }

}
export default Signup;
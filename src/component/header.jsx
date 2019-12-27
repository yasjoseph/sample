import React from 'react';
 import './header.css'

class Header extends React.Component{
    render(){
        return(
            <div className="header">
             <nav>
                <ul>
               
                <li><a href="login.jsx">Login</a></li>
				<li><a href="signup.jsx">Signup</a></li>
                <li><a href="table.jsx">Table</a></li>
					
                </ul>
                </nav>
                
            </div>
        )
    }

}
export default Header;
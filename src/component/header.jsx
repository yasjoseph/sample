import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                {/* <nav>
                    <ul>


                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/table">Table</Link></li>



                    </ul>
                </nav> */}
                <nav className="navbar navbar-default bgcolor ">
                    <div className="container-fluid">
                        <div className="navbar-header ">
                           <Link to ="login" className="navbar-brand ">Welcome</Link>
                         
                        </div>
                        <ul className="nav navbar-nav navelement">
                            <li><Link to ="login">Home</Link></li>
                            <li ><Link to="table">Data list</Link></li>
                            <li ><Link to ="employee">Employee</Link></li>
                            <li ><Link to ="Chart">Chart</Link></li>
                            <li ><Link to ="Post">Post</Link></li>
                           
                        </ul>
                        <ul className="nav navbar-nav navbar-right navelement">
                            <li><Link to="login"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to="signup"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }

}
export default Header;
import React from 'react';

import Login from './login'
import Signup from './signup';
import Tbl from './table';
// import Pnf from './pnf';
import Emp from './employee';
import Chart from './Chart';
import Provider from './providers/Provider';
import Post from './Post';
import EmployeeDetails from './employeedetails';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="main">

                    <Provider>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/table" component={Tbl} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/employee" component={Emp} />
                            <Route exact path="/EmployeeDetails" component={EmployeeDetails} />
                            <Route exact path="/Chart" component={Chart} />
                            <Route exact path="/Post" component={Post} />

                        </Switch>
                    </Provider>


                    {/* <Tbl></Tbl>
                    <Login></Login>
                    <Signup></Signup>
                    <Pnf></Pnf> */}

                </div>
            </div>
        );

    }

}

export default Main;

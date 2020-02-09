import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { EmpConsumer } from '../component/providers/Provider';
// import Empld from './empld';
// import EmployeeDetails from '../component/employeedetails';
class Employee extends Component {
    card = [];
    constructor(props) {
        super(props);

        this.card = this.props.card;


    };
    render() {

        let displayCard = [];
        for (let eachCard of this.card) {
            let eachCardData = <div>

                <section className="card-content">
                    <div className="card-img">
                        <img src='./dummy.jpg' alt='' />
                    </div>
                    <div className="card-details">
                        <div className="ename">Employee Name:{eachCard.Name}</div>
                        <div className="eid">Employee ID:{eachCard.EmployeeID}</div>
                        {/* <Link to={Empld}>View</Link> */}
                        {/* <Link to="EmployeeDetails" className='btn btn-primary'>View</Link> */}
                        <EmpConsumer>
                            {employee => (
                                <Link onClick={() => employee.changeEmployee(eachCard)} to='EmployeeDetails' className="btn btn-primary btn-profileview">View</Link>
                            )}
                        </EmpConsumer>
                    </div>
                </section>
            </div>;
            displayCard.push(eachCardData);


        }
        return (
            <div>
                {displayCard}
            </div>
        )
    }
}
export default Employee;

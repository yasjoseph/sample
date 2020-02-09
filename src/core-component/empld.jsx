import React from 'react';

class Empld extends React.Component {
    empDetails = [];
    constructor(props) {
        super(props);
        console.log(this.props.empDetails);
        this.empDetails = this.props.empDetails;
    };


    render() {
        let displayDetails = [];
        // for (let eachDetail of this.empDetails) {
        //let detail =<td>{this.empDetails.Name}</td>
        // <td>{this.empDetails.Age}</td>
        // <td>{this.empDetails.Email}</td>
        // <td>{this.empDetails.Country}</td>
        // <td>{this.empDetails.Info}</td>
        // <td>{this.empDetails.EmployeeID}</td>

        //displayDetails.push(detail);
        // }
        //console.log(displayDetails);
        let employeeKey = Object.keys(this.empDetails);
        console.log(employeeKey);
        let eachRow = [];
        for (let tblDetail of employeeKey) {
            eachRow.push(<tr>
                <th >{tblDetail}</th>
                <th>{this.empDetails[tblDetail]}</th>
            </tr>)
        }
        displayDetails = (<thead>
            {eachRow}
        </thead>);

        return (
            <div>
                <table className="tbl " >

                    {displayDetails}

                </table>
            </div>
        );
    }
}
export default Empld;
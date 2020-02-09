import React, { Component } from 'react';
import Empld from '../core-component/empld';
import XLSX from 'xlsx';
import { EmpConsumer } from './providers/Provider';

class EmployeeDetails extends Component {

  employee = {
    "Name": "Aurora",
    "Age": 53,
    "Email": "ante.blandit@disparturient.ca",
    "Date of joining": "10/06/2019",
    "Phone number": "1628101902299",
    "Street": "493 Iaculis Rd.",
    "City": "Lewiston",
    "Zip": "42591-180",
    "Region": "Maine",
    "Country": "Sudan",
    "Info": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
    "EmployeeID": 101
  };

  downloadExcel() {
    /* convert from array of arrays to workbook */
    var worksheet = XLSX.utils.json_to_sheet([this.employee]);
    var new_workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");


    /* save to file */
    XLSX.writeFile(new_workbook, 'SheetJS.xlsx');

  }

  render() {
    return (
      <div>
        <div>
          <h1>Employee Details</h1>


          <Empld empDetails={this.employee}></Empld>
          {/* consumer component */}
          <EmpConsumer>
              {
                (employee)=>(
                  // this employeeId is coming the provider data
                <p>{employee.employeeId}</p> 
                
                )

                
              }
          </EmpConsumer>
          <div>
            <button onClick={() => this.downloadExcel()}>Download as excel</button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default EmployeeDetails;
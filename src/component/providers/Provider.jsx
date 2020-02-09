import React from 'react';
const empContext = React.createContext();
export const EmpConsumer = empContext.Consumer;
class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '23',
            employee: {
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
              }
        }
    }
    render() {
        let shareData = {
            employeeId: this.state.id,
            employee: this.state.employee,
            changeValue: (id) => {
                this.setState({ id: id });
            },
            changeEmployee: (employee) => {
                this.setState({employee: employee})
            }
        }
        return (
            <div>
                {/* <h1>hi {this.state.id}</h1> */}
                <empContext.Provider value={shareData}>{this.props.children}</empContext.Provider>
            </div>
        );

    }

}

export default Provider;

import React from 'react';
const empContext = React.createContext();
export const EmpConsumer = empContext.Consumer;
class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '23'
        }
    }
    render() {
        let shareData = {
            employeeId: this.state.id
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

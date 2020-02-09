import React from 'react';

class Cycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    };

    componentWillMount() {
        console.log('mount!')
    }
    componentDidMount() {
        console.log(' did mount')
    }

    render() {
        return (

            <div>
                <h1>Hello, world!</h1>
                < h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>

        );
    }
}

export default Cycle;
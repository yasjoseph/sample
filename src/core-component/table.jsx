import React from 'react';


class Table extends React.Component {

    data = [];
    constructor(props) {
        super(props);
        console.log(this.props.data);
        this.data = this.props.data;
       // this.heading=this.props.heading;

    };
    render() {

        // let displayTableBody=<tr>
        // <td>{this.data.data[0].postId}</td>
        // <td>{this.data.data[0].id}</td>
        // <td>{this.data.data[0].name}</td>
        // <td>{this.data.data[0].body}</td>
        //</tr>;
        let displayTableBody = [];
        for (let eachData of this.data) {
            let eachTableData = <tr>
                <td>{eachData.postId}</td>
                <td>{eachData.Id}</td>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.body}</td>
            </tr>;
            displayTableBody.push(eachTableData);
        }
        console.log(displayTableBody);
        return (
   
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>PostId</th>
                        <th>Id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>

                    </tr>
                </thead>
                <tbody>
                    {displayTableBody}
                </tbody>
            </table>
     
        )



    }


}


export default Table;
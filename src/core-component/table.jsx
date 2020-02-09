import React from 'react';


import './table.css';



class Table extends React.Component {

    data = [];
    realData = [];
    headings = [];
    lastPage = 50;
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageLimit: 10,
            
            reload: true

        }
        console.log(this.props.data);
        this.data = this.props.data;
        this.realData = this.props.data;

        this.headings = this.props.headings;
        this.getSearch = this.getSearch.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.findLastPage();

    };
    setPage(data) {
        // alert(data)
        this.setState({
            page: data,


        });


    }
    

    findLastPage() {
        let lastPage = 0;
        lastPage = Math.ceil(this.data.length / this.state.pageLimit);
        this.lastPage = lastPage;
        console.log(this.lastPage);
    }

    getSearch(event) {
        console.log(event.target.value);
        let searchString = String(event.target.value).toUpperCase();
        let searchRegex = new RegExp(searchString);
        console.log(searchString);
        this.data = [];
        let newData = [];
        for (let eachData of this.realData) {
            // console.log(eachData);  
            let myKeys = Object.keys(eachData);
            let match = false;
            // console.log(myKeys); 
            for (let eachKeys of myKeys) {
                // console.log(eachData[eachKeys]);
                let searchValue = String(eachData[eachKeys]).toUpperCase();

                if (searchRegex.test(searchValue)) {
                    match = true;
                    console.log('match found');
                }
            }
            if (match) {
                console.log(eachData);
                newData.push(eachData);

            }
        }
        this.data = newData;
        this.findLastPage();
        this.setState({
            page: 1,
        })
    }

    deleteData(index) {
        console.log(index);
        let removedData = this.data.splice(index,1);
        console.log(removedData);
        this.setState({
            reload: !this.state.reload
        })
    }

    generateEachdata(receiveData, index) {

        let eachData = [];

        for (let eachHeading of this.headings) {
            eachData.push(<td key={eachHeading}>{receiveData[eachHeading]}</td>)

        }
        eachData.push(<td key={'delete' +index}><i id='icons' className="fa fa-trash-o fa-fw" onClick={() => this.deleteData(index)}></i></td>)
        return eachData;
    }


    setPageLimit(data) {
        this.setState({
            page: 1,
            pageLimit: data
        })
    }


    displayHeading() {
        let eachData = [];
       


        for (let eachHeading of this.headings) {

            eachData.push(<th key={eachHeading}>{eachHeading}</th>)
        }
        eachData.push(<th key={'actions'}>Actions</th>)
        return eachData;

    }

    render() {

        // let displayTableBody=<tr>
        // <td>{this.data.data[0].postId}</td>
        // <td>{this.data.data[0].id}</td>
        // <td>{this.data.data[0].name}</td>
        // <td>{this.data.data[0].body}</td>
        //</tr>;

        // let filterData=filter(this.data.comments);
        let displayTableBody = [];
        let start = (this.state.page - 1) * this.state.pageLimit;
        let end = start + this.state.pageLimit;
        let goingToDisplay = this.data.slice(start, end);
        console.log(this.state.initial);
        console.log(this.state.end);
        console.log(goingToDisplay);
        let index = 0;
        for (let eachData of goingToDisplay) {


            let eachTableData = <tr key={'data'+index}>
                {/* <td>{eachData.postId}</td>
                <td>{eachData.id}</td>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.body}</td> */}

                {this.generateEachdata(eachData, index)}
            </tr>;
            displayTableBody.push(eachTableData);
            index++;
        }


        console.log(displayTableBody);

        let pagebutton = [];
        let buttonMax = this.lastPage;
        let buttons = [];
        for (let i = 1; i <= buttonMax; i++) {
            if (i <= this.state.page + 1 & i >= this.state.page - 1)
                buttons.push(i);
        }


        for (let data of buttons) {
            let pagination = data === this.state.page ? 'redColor' : 'blueColor';

            let eachButton = <button key={data} className={pagination} onClick={() => this.setPage(data)}>{data}</button>;


            pagebutton.push(eachButton);
        }
        return (
            <div>

                <div>
                    <button disabled={this.state.page === 1} onClick={() => this.setPage(1)}>&laquo;</button>
                    <button disabled={this.state.page === 1} onClick={() => this.setPage(this.state.page - 1)}>&lt; </button>
                    {pagebutton}
                    <button disabled={this.state.page === 50} onClick={() => this.setPage(this.state.page + 1)}>&gt; </button>
                    <button disabled={this.state.page === 50} onClick={() => this.setPage(buttonMax)}>&raquo;</button>
                    <button onClick={() => this.setPageLimit(5)}>page limit</button>

                    <input type="text" id="mySearch" placeholder="Search.." onChange={(e) => this.getSearch(e)} ></input>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="data" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            data
                        <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu " >
                            <li ><button className=" btnList" onClick={() => this.setPageLimit(5)}>5</button></li>
                            <li ><button className=" btnList" onClick={() => this.setPageLimit(10)}>10</button></li>
                            <li ><button className=" btnList" onClick={() => this.setPageLimit(15)}>15</button></li>
                        </ul>
                    </div>

                </div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            {/* <th>PostId</th>
                            <th>Id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th> */}
                            {this.displayHeading()}

                        </tr>
                    </thead>
                    <tbody>
                        {displayTableBody}
                    </tbody>
                </table>
            </div>

        )



    }


}


export default Table;
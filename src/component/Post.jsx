import React, { Component } from 'react'
import Table from '../core-component/table';

// import ApiPost from '../core-component/apipost';
import Api from '../core-component/api.service';

class Post extends Component {
  data = [];
  headings = [];
  constructor() {
    super();

    this.state = {
      isdataReceived: false
    }

    let api = new Api();
    api.get('posts').then(
      (data) => {
        console.log(data);
        this.data=data.data;
        this.setState({
          isdataReceived:true
        })
      }
    )
  }

  getDisplayData() {
    if (this.data.length) {
      this.headings = Object.keys(this.data[0]);
      return <Table data={this.data} headings={this.headings}></Table>

    } else {
      return <h1>Loading</h1>
    }
  }
  render() {
    return (
      <div>
        <h1>hi</h1>
        {this.getDisplayData()}
      </div>
    )
  }
}
export default Post;

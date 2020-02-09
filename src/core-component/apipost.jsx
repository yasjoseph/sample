import React, { Component } from 'react'
import axios from 'axios';
 class ApiPost  {
  get(){
      return axios.get('https://jsonplaceholder.typicode.com/posts');
  }
  }
    
  
export default ApiPost;

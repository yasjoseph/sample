import React, { Component } from 'react'
import ApiPost from '../core-component/apipost';
 class Post extends Component {
     constructor() {
         super();
     
         let post = new ApiPost();
         post.get().then(
           (data) => {
             console.log(data)
           }  
         )
     }
     render()
     {
         return(
             <div>
            <h1></h1>
             </div>
         )
     }
    }
    export default Post;

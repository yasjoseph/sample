import axios from 'axios';

class Api {

    // constructor(){

    // }

    get(){
        return axios.get('https://jsonplaceholder.typicode.com/comments');
    }
}

export default Api;
import axios from 'axios';
import { SERVER } from '../environment';

class Api {

    // constructor(){

    // }
    serverUrl = SERVER;

    get(url) {
        let reqUrl = this.getUrl(url);
        return axios.get(reqUrl);
    }

    post(url, data) {
        let reqUrl = this.getUrl(url);
        return axios.post(reqUrl, data);
    }

    getUrl(url) {
        return this.serverUrl + url;
    }
}

export default Api;
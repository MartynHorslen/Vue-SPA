import axios from 'axios';

async function requestData(url, headers = {}) {
    const options = {
        method: 'GET',
        url,
        headers,
    };
    return axios.request(options);
}

export { requestData };
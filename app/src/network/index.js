import axios from 'axios';
import NetworkConstants from './networkConstant'

export function serviceCall(params='') {
    return new Promise((resolve, reject) => {
        let url = NetworkConstants.BASE_URL;
        axios(url+params)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function serviceCallCustom(type,data) {
    return new Promise((resolve, reject) => {
        let url = NetworkConstants.BASE_URL;

        const config = {
            method: type,
            url: url,
            data: data}
            
        axios(config)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

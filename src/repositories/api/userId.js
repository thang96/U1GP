import React from 'react'
import cofigApi from "./config";
import HeaderConfig from "../remote/network/headers"
import common from '../../utils/common';
import axios from 'axios';
import Http from './config'
import deviceInfoModule from 'react-native-device-info';

const udid = deviceInfoModule.getUniqueId()

const baseUrlInfo = 'http://210.245.51.29:8000/api/v1/userinfor/check_have_user'


function makePostRequest() {
    const formData = new FormData();
    formData.append("udid" , udid)
    console.log(udid,'---------------------------------------------------');
    return new Promise((resolve, reject) => {
        axios.post(baseUrlInfo, formData, {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
            }).then((res) => {
                console.log(res.data);
                resolve(res.data);
            }).catch(errors => {
                reject(errors.respone);
            })
        }
    );

}
export default makePostRequest
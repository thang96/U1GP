import cofigApi from "./config";
import HeaderConfig from "../remote/network/headers"
import common from '../../utils/common';
import axios from 'axios';
import deviceInfoModule from 'react-native-device-info';

const udid = deviceInfoModule.getUniqueId()

export function getMyVehicle() {
    let formData = new FormData();
    formData.append("udid" , udid ?? '')
    return new Promise((resole, reject) => {
        cofigApi().post('api/v1/vehicleinfor/show', formData , {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
          }).then(res=>{
            resole(res.data)
            
          }).catch(errors => {
            console.log('messs eroorr', errors.response.data);
            reject(errors.response.data);
          })
        })
}
import cofigApi from "./config";
import HeaderConfig from "../remote/network/headers"
import common from '../../utils/common';
import axios from 'axios';
import DeviceInfo, { getDeviceId } from 'react-native-device-info';
import deviceInfoModule from 'react-native-device-info';

const udid = deviceInfoModule.getUniqueId()
const getDataTopTag = async () =>{
    let dataget ={}
    try {
        const response = await  cofigApi().get('api/v1/basic/toptag')
        if(response.status === 200){
            dataget.data = response.data
            console.log(dataget.data,'-----------------------------');
        }
     } catch (error) {
        console.error(error)
    }
      return dataget
      
  }
  export default getDataTopTag
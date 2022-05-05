import cofigApi from "./config";
import HeaderConfig from "../remote/network/headers"
import common from '../../utils/common';
import axios from 'axios';
import DeviceInfo, { getDeviceId } from 'react-native-device-info';
import deviceInfoModule from 'react-native-device-info';

const udid = deviceInfoModule.getUniqueId()

const getData = async () =>{
  let dataget ={}
  try {
      const res = await  cofigApi().get('api/v1/basic/codemaster')
      if(res.status === 200){
          console.log(res.data)
          dataget.data = res.data
      }
   } catch (error) {
      console.error(error)
  }
    return dataget
}
const postData = async (data_input) => {

  const id_use = Math.floor( Math.random()*100)+1
  const chooseList =  data_input.tag.map(it => it.name).join('|');
  console.log(chooseList);

  const {nickName, photo_0,licenseHistory,age,sex,province,currentCar,successiveCarModels,
    carModelYouWant,describe,touringArea,gear } = data_input

  const formData = new FormData();
  
  formData.append("udid" , udid ?? '')

  formData.append("nickname" , nickName ?? '')
  photo_0 && formData.append("photo_0" , {
    uri: photo_0?.path,
    name: common.getFileName(photo_0),
    type: photo_0?.mime,
  })
  formData.append("license_history" , licenseHistory ?? '')
  formData.append("age" , age ?? '')
  formData.append("sex" , sex  ?? '')
  formData.append("region" , province ?? '')
  formData.append("bike_ownership_now" , currentCar ?? '')
  formData.append("bike_ownership_past" , successiveCarModels ?? '')
  formData.append("bike_ownership_want" , carModelYouWant ?? '')
  formData.append("bike_touring_area" , touringArea ?? '')
  formData.append("bike_gear" , gear ?? '')

  formData.append("tag" , chooseList ?? '');

  return new Promise((resole, reject) => {
    cofigApi().post(`/api/v1/userinfor`, formData, {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
      })
    .then(res => {
      console.log('thnah cong' , res.data)
      resole(res.data)
    }).catch(errors => {
      console.log('messs eroorr', errors.response.data);
      reject(errors.response.data);
    })
  }
  );
}
const  postDataInput  =  async(data_input) =>  {
  const {entrySection, machineName,baseMachine,bykeMaker,appealPoint,description,tag, photo_1 , photo_2  , photo_3 , photo_4 , photo_5 , photo_6 } = data_input
  const formData = new FormData()
  formData.append("tag_entry" , entrySection??'')
  formData.append("vehicle_name" , machineName??'')
  formData.append("vehicle_type" , baseMachine??'')
  formData.append("maker" , bykeMaker??'')
  formData.append("point" , appealPoint??'')
  formData.append("engine_displacement" , description??'')
  formData.append("tag" , JSON.stringify(tag)??'')
  formData.append("udid" , udid ?? '')

  
  photo_1 && formData.append("photo_1" ,common.postFileImg(photo_1))
  photo_2 && formData.append("photo_2" ,common.postFileImg(photo_2))
  photo_3 && formData.append("photo_3" ,common.postFileImg(photo_3))
  photo_4 && formData.append("photo_4" ,common.postFileImg(photo_4))
  photo_5 && formData.append("photo_5" ,common.postFileImg(photo_5))
  photo_6 && formData.append("photo_6" ,common.postFileImg(photo_6))

  return new Promise((resole,reject) => {
   cofigApi().post('api/v1/vehicleinfor', formData , {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
    }).then(res=>{
      console.log('thnah cong' , res.data)
      resole(res.data)
    }).catch((errors) => {
      console.log('messs eroorr', errors,errors.responce);
      reject(errors.response);
    })
  })
}
export default {
  getData , postData , postDataInput
}
import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("Config: ", config);
    return config;
  }, function (error) {
    // Do something with request error
    console.log("Erro: ", error);
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    console.log("Ress: ", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });




const cofigApi = () =>{
    axios.defaults.baseURL = "http://210.245.51.29:8000";
    axios.defaults.headers.common['Authorization'] = 'Auth Token'
    
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 
    return axios
 }
 export default cofigApi
import cofigApi from "./config";

const ListMoto = (params = {}) => {
    console.log(params, 'params \n \n \n params')
    let { pageNumber = 1, tag_search , tag_entry } = params;
    return new Promise((resole, reject) => {

        let  resut  =  [];
        cofigApi().get('api/v1/vehicleinfor/',
            {
            params: {
              page: pageNumber ?? 1,
              tag: tag_search ?? '',
              tag_entry: tag_entry ?? ''
            }})
            .then((res) => {
            res?.data?.data?.forEach(function (item) {
                let data = {};
                data.id = item['id'] ?? '';
                data.photo_0 = item['photo_0'] ?? '';
                data.like_number = item['like_number'] ?? '';
                data.user_id = item['user_id'] ?? ''
                data.vehicle_id = item['vehicle_id'] ?? ''
                data.like_bumber = item['like_bumber'] ?? ''
                resut.push(data);
                
            });
            resole(resut);
        }).catch(error => {
            reject(resut);
        })
      
  
    })

}
export default ListMoto
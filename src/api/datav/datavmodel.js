import request from '@/utils/request'

export function getDataVModel(){
   return  request({
     url:"/system/config/list",
     method:"get",
     params:{configKey:"dataVJson"}
   });
}
export function modelDetail(name) {
    return request({
      url:"/datav/SlideModel/list",
      get:"get",
      params:{name:name},
    });
}

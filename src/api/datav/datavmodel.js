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

export function addProject(data){
  return request({
    url:"/datav/project",
    method:'post',
    data:data
  });
}

export function editProject(data){
  return request({
    url:"/datav/project",
    method:'put',
    data:data
  });
}

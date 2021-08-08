import request from './request'
import axios from 'axios'

// 获取轮播图数据
function getSwiperData() {
  return request({
    type: 'GET',
    url: '/home/swiperdata'
  })
}

// 获取导航菜单数据
function getCatItems() {
  return request({
    type: 'GET',
    url: '/home/catitems'
  })
}

// 获取楼层数据
function getFloorData() {
  return request({
    type: 'GET',
    url: '/home/floordata'
  })
}

// 获取百度图片
function getImages() {
  return axios({
    url: '/api/search/acjson?tn=resultjson_com&logid=8422150604383041396&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E8%A1%A3%E6%9C%8D&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&hd=&latest=&copyright=&word=%E8%A1%A3%E6%9C%8D&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&nojc=&pn=90&rn=30&gsm=5a&1628404492299=',
    type: 'GET'
  })
}

export default {
  getSwiperData,
  getCatItems,
  getFloorData,
  getImages
}
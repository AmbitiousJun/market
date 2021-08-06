import request from './request'

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

export default {
  getSwiperData,
  getCatItems,
  getFloorData
}
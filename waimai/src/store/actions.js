import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  GETUSER,
  USER_LOGOUT,
  GET_INFO,
  GET_RATING,
  GET_GOODS
} from './mutation-types'
import {reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  getGoods,
  getInfo,
  getRating,
} from '../api'

export default {
  async getAddress({commit, state}) {
    const {latitude, longitude} = state
    const geohash = `${latitude},${longitude}`
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getCategorys({commit, state}) {
    const result = await reqCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //保存登陆成功后的state
  saveUser({commit}, user) {
    commit(GETUSER, {user})
  },
  
  //异步获取免登录的用户数据
  async getUser({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      commit(GETUSER, {user})
    } else {
      const msg = result.msg
      commit(GETUSER, {msg})
    }
  },
  //异步处理用户退出登录状态
  async userLogout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(USER_LOGOUT)
    }
  },
  //异步获取店铺内商品信息
  async getGoods({commit,state}) {
    const result = await getGoods()
    if(result.code===0){
      const goods = result.data
      commit(GET_GOODS,{goods})
    }
  },
  //异步获取店铺内评价信息
  async getInfo({commit,state}) {
    const result = await getInfo()
    if(result.code===0){
      const info = result.data
      commit(GET_INFO,{info})
    }
  },
  //异步获取商家信息
  async getRating({commit,state}) {
    const result = await getRating()
    if(result.code===0){
      const rating = result.data
      commit(GET_RATING,{rating})
    }
  },
}

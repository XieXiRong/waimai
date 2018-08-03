import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  GETUSER,
  USER_LOGOUT,
  GET_GOODS,
  GET_INFO,
  GET_RATING,
} from './mutation-types'
export default {
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [GETUSER](state,{user}){
    state.user = user
  },
  [USER_LOGOUT](state){
    state.user = {}
  },
  [GET_GOODS](state,{goods}){
    state.goods = goods
  },
  [GET_RATING](state,{rating}){
    state.rating = rating
  },
  [GET_INFO](state,{info}){
    state.info = info
  },
}

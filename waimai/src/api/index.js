import ajax from './ajax'

export const reqAddress = (geohash)=>ajax('/api/position/'+geohash)

export const reqCategorys = () => ajax('/api/index_category')

export const reqShops = (longitude, latitude) => ajax('/api/shops', {latitude, longitude})

//获取短信验证码
export const reqSendcode = (phone)=>ajax('/api/sendcode',{phone})
//用户名密码登陆
export const reqLogin = ({name,pwd,captcha})=>ajax('/api/login_pwd',{name,pwd,captcha},'POST')
//手机号验证码登陆
export const phoneLogin = (phone,code)=>ajax('/api/login_sms',{phone,code},'POST')
//免登录异步获取用户信息
export const reqUser = ()=> ajax('/api/userinfo')
//用户退出登录
export const reqLogout = ()=>ajax('/api/logout')

export const getGoods = ()=>ajax('/goods')
export const getInfo = ()=>ajax('/info')
export const getRating = ()=>ajax('/rating')

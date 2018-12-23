import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions'
 Vue.use(Vuex);
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'  // vuex的插件，可在控制台打印一个log日志，显示state做了哪些修改
const debug = process.env.NODE_ENV !== 'production'  // 开发时使用的模式，上线时就不用了

const store = new Vuex.Store({
  actions,
  state: {
    user:{},
    userAddress:{},//用戶收穫地址
    userAuthority:null,//权限列表,
    gameItemLst:[],//物品内容表
    gameItemTypeLst:[],
  },
  mutations,
  strict:debug,
  plugins:debug?[createLogger()]:[]
})
 export default store;
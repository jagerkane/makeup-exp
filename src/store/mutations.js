import * as types from './mutation-types'  // 从mutation-types中拿到定义的常量

// mutations可以看做一个对象，里面有一些方法
// 通俗的理解mutations,里面装着一些改变数据方法的集合，这是Veux设计很重要的一点，就是把处理数据逻辑方法全部放在mutations里面，使得数据和视图分离。
// 里面这些方法的名字为：types.SET_SINGER等。。。
const mutations = {
  // 下面是types.SET_SINGER方法，有两个参数，一个参数state是当前的状态，第二个是提交mutations时传的参数
  [types.SET_USER_INFO] (state, info) {
    state.user = info;
  },
  [types.SET_USER_AUTH](state,info){
    state.userAuthority = info.auth;
  },
  [types.SET_CUR_LINK](state,info){
    console.log("set_cur_link:"+info.curLink);
    state.curLink =info.curLink;
  },
  [types.SET_GAME_ITEM_LST](state,lst){
    state.gameItemLst = lst;
  },
  [types.SET_GAME_ITEM_TYPE_LST](state,lst){
    state.gameItemTypeLst = lst;
  },
  [types.SAVE_USER_ADDRESS](state,info){
    state.userAddress = info;
    console.log(state.userAddress);
  },
  [types.CLEAR_USER_INFO](state){
    state.user  = null;
  }
}

export default mutations

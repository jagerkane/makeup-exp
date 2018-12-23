import axios from 'axios';
import _global from '../assets/lib/Global';
import * as types from './mutation-types';
import * as datas  from './data';
const actions = {
  getUserInfo:function({commit},info){//获取登录账户，权限用
    let uid =  _global.getCookieVal("uid");
    commit(types.SET_USER_INFO,{id:uid});
  },
  //获取用户权限  //r=admin-power/static&expand=getUserPower&id=2018020910210481022
  getUserAuthority:function({commit},_authority){
    let uid =  _global.getCookieVal("uid");
    commit(types.SET_USER_INFO,{id:uid});
    if(_authority!=null && _authority.length >0){
      return;
    }
    console.log("getUserAuthority------");
    // axios.get(_global.api+"r=admin-power/static&expand=getUserPower&id="+uid)
    // .then(function(response){
    //   response = response.data;
    //   console.log(response);
    //   if(response == null || response.getUserPower == null || response.getUserPower.data == null ){
    //     return;
    //   }else{
    //     commit(types.SET_USER_AUTH,{auth:response.getUserPower.data});
    //   }
    // })
    // .catch(function(e){
    //   console.log(e);
    //   return null;
    // });
  },
  getItemList:function({commit},info){
    //获取机器内容
    commit(types.SET_GAME_ITEM_LST,datas.itemLst);
  },
  getItemTypeLst:function({commit},info){
    commit(types.SET_GAME_ITEM_TYPE_LST,datas.itemTypeLst);
  },
  saveUserAddress:function({commit},info){
    //保存用户收货信息
    commit(types.SAVE_USER_ADDRESS,info);
    console.log("保存用戶信息");
    alert('保存成功');
  }

}
export default actions;
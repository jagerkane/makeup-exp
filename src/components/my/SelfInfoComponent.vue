<template>
    <div class="self-info-edit">
        <div class="info-label">
            <span class="label-name">修改头像</span>
            <img :src="defaultHead">
            <i class="arrow" @click="onBtnImgChangeClick"></i>        
        </div>
        <div class="info-label">
            <span class="label-name">修改昵称</span>
            <span class="btn-name">你的名字</span>
            <i class="arrow" @click="onBtnNameChangeClick"></i>
        </div>
        <div class="btn-logout" @click="onBtnLogoutClick">退出登录</div>
    </div>
</template>
<script>
import defaultHeadIcon from '../../assets/defaulthead.jpg';
import * as types from '../../store/mutation-types';
export default {
    data(){
        return{
            defaultHead:defaultHeadIcon,
        }
    },
    methods:{
        onBtnImgChangeClick:function(){
            //修改头像
            console.log("上传头像");
        },
        onBtnNameChangeClick:function(){
            //修改名字
            console.log("修改名称");
        },
        onBtnLogoutClick:function(){
            $router.replace({name:'My'});
            //清理缓存用户
            this.$store.commit(types.CLEAR_USER_INFO);
        }
    }
}
</script>

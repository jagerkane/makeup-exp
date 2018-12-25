<template>
    <div class="my-center">
       <div class="user-info">
            <div class="head-icon">
                <img :src="headerUrl" alt="">
            </div>
            <a class="user-info-name" @click="$router.push({name:'SelfInfo'})">
                <p class="user-name">{{userName}}</p>
                <p class="user-id">ID:{{userId}}</p>
                <i class="arrow"></i>
            </a>
       </div>
       <!-- <div class="login-bg">

       </div> -->
       <div class="info-detail">
           <div class="info-item">
                <img class="info-bg" :src="bgIcon">
                <p class="info-title">我的余额</p>
                <p class="info-value">0</p>
                <div class="info-btn btn-charge" @click="onBtnChangeClick">充值</div>
           </div>
           <div class="info-item">
               <img class="info-bg" :src="bgIcon">
                <p class="info-title">闯关次数</p>
                <p class="info-value">0</p>
                <div class="info-btn btn-share" @click="onBtnShareClick">分享免费玩</div>
           </div>
       </div>
       <ul class="func-lst">
           <li>
               <img :src="bgIcon">
               <p>每日赢口红</p>
               <span class="btn-record">签到</span>
            </li>
           <li >
                <img :src="bgIcon">
                <p>我的奖品</p>
                <i class="arrow"></i>
            </li>
           <li @click="gotoMyAddress">
                <img :src="bgIcon">
                <p>邮寄地址</p>
                <i class="arrow"></i>
            </li>
           <li  @click="$router.push({name:'Service'})">
                <img :src="bgIcon">
                <p>联系客服</p>
                <i class="arrow"></i>
            </li>
       </ul>
       <router-view></router-view>
    </div>
</template>
<script>
import defaultHeaderUrl from "../assets/defaulthead.jpg"
import infoIcon from "../assets/icon_balance.png"
export default {
    data(){
        return{
            userId:"001",
            userName:"你的名字",
            headerUrl: defaultHeaderUrl,
            bgIcon:infoIcon,
        }
    },
    methods:{
        gotoMyAddress:function(){
            this.$router.push({name:'Address'});
        },
        onBtnChangeClick:function(){

        },
        onBtnShareClick:function(){

        }
    }
}
</script>

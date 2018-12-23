<template>
    <div class="make-up-list">
        <div class="top-bar">
            <div class="broadcast-container">
                <span>分享好友两名即可获得一次免费闯关</span>
            </div>
            <div class="audio-btn"></div>
        </div>
        
        <div class="swiper-container top-advertise-swiper">
            <div class="swiper-wrapper">
                <img v-for="it in swiperimglst" class="swiper-slide" :src="it.img" v-on:click="onImageClick(it)">
            </div>
        </div>
        <div class="btn-container">
            <div class="btn-try-game" v-on:click="onBtnTryGameClick">免费试玩</div>
            <div class="btn-game-explain" v-on:click="onBtnGameExplainClick">闯关购说明</div>
        </div>
        <ul class="item-type-nav">
            <li v-for="(type,idx) in itemtypelst" 
            v-bind:key="idx" 
            v-on:click="onBtnTabTypeClick(type.idx)"
            v-bind:class="{'li-active':curType==type.idx}">{{type.name}} </li>
        </ul>
        <div class="item-grid-container">
            <v-item v-for="(item,index) in itemlst" :content="item" v-bind:key="index" v-on:onItemClick="onItemClick($event)"></v-item>
        </div>
        <v-game-explain-component v-if='explainShow'  v-on:closeGameExplain="explainShow=false"></v-game-explain-component>
        <v-login-component v-if='loginShow' v-on:openSubscriberAgreement="agreementShow=true" v-on:closeLoginComponent="loginShow=false"></v-login-component>
        <v-subscribe-agreement v-if='agreementShow' v-on:closeSubscribeAgreement="agreementShow=false"></v-subscribe-agreement>
    </div>
</template>
<style>
@import 'swiper/dist/css/swiper.min.css';
</style>
<script>
import ItemComponent from './ItemComponent.vue';
import swiper1 from '../assets/img/swiper_1.png';
import Swiper from 'Swiper';
import GameExplainComponent from './GameExplainComponent.vue';
import LoginComponentVue from './LoginComponent.vue';
import SubscribeAgreementComponentVue from './SubscribeAgreementComponent.vue';
import * as types from '../store/mutation-types';
export default {
    components:{
        vItem:ItemComponent,
        vGameExplainComponent:GameExplainComponent,
        vLoginComponent:LoginComponentVue,
        vSubscribeAgreement:SubscribeAgreementComponentVue,
    },
    data(){
        return{
            swiperimglst:[{img:swiper1,link:"/app-download"},{img:swiper1,link:"/"}],
            explainShow:false,
            loginShow:false,
            agreementShow:false,
            curType:0,//当前选中的type类型
        }
    },
    computed:{
        itemlst:function(){
            if(this.curType <=0){
                return this.$store.state.gameItemLst;
            }else{
                let arr = new Array();
                 this.$store.state.gameItemLst.forEach(item => {
                     if(item.type == this.curType){
                         arr.push(item);
                     }
                 });
                 return arr;
            }
            
        },
        itemtypelst:function(){
            return this.$store.state.gameItemTypeLst;
        }
    },
    methods:{
        onBtnTryGameClick:function(){
            console.log("进入试玩也面");
        },
        onBtnGameExplainClick:function(){
            console.log("进入游戏说明上");
            this.explainShow = true;
        },
        onBtnTabTypeClick:function(_type){
             this.curType = _type;
             //切换内容
        },
        onImageClick:function(item){
            console.log("点击了swiper 图片");
            this.$router.push(item.link);
        },
        onItemClick:function(item){
            console.log("点击了物品"+item.name);
            // this.loginShow=true;
            this.$router.push('/foo');
        }
    },
    created:function(){
        this.$store.dispatch(types.ACT_GET_GAME_ITEM_TYPE_LST,null);
        this.$store.dispatch(types.ACT_GET_GAME_ITEM_LST,null);
        console.log("MakeUpListComponent created");
    },
    mounted:function(){
        new Swiper('.swiper-container',{
            loop:true,
            autoplay: true,//可选选项，自动滑动
            speed:2000,
            autoHeight: true, //高度随内容变化
        });
    }
}
</script>


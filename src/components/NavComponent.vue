<template>
    <nav class="make-up-nav">
        <ul>
            <li v-for="item in items"  v-on:click="gotoPage(item.link)">
                <img :src="item.img">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </nav>
</template>
<script>
import navImg1 from '../assets/logo.png';
import navImg2 from '../assets/logo.png';
import navImg3 from '../assets/logo.png';
import navImg4 from '../assets/logo.png'; 
export default {
    data(){
        return{
            items:[
                {name:"首页",link:"/makeup-list",img:navImg1},
                {name:"分享收益",link:"/share-info",img:navImg2},
                {name:"晒一晒",link:"/posts-lst",img:navImg3},
                {name:"我的",link:"/my",img:navImg4},
            ]
        }
    },
    methods:{
        gotoPage:function(link){
            this.$router.push(link);
        }
    },
    created:function(){

    }
}
</script>

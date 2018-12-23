<template>
    <div class = "contact-us">
        <div class="tab-bar">
            <p class="service bar-item" :class="{'item-active':curTab==0}" @click="showTab(0)">联系客服</p>
            <p class="message bar-item" :class="{'item-active':curTab==1}" @click="showTab(1)">我的消息</p>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            curTab:0,
        }
    },
    methods:{
        showTab:function(_type){
            this.curTab = _type;
            let link = "Service";
            if(_type == 0){

            }else{
                link = "Message";
            }
            this.$router.push({name:link});
        }
    }
}
</script>


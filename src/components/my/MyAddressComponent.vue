<template>
    <div class="my-address">
        <h2 class="header">我的收货地址</h2>
        <div class="address-body">
            <v-form-item class="receiver" :value="addressInfo.receiver" v-model="receiver" form-name="收货人:" input-type="text" place-holder="姓名" ></v-form-item> 
            <v-form-item class="phone"  :value="addressInfo.phone" v-model="phone" form-name="手机号:" input-type="text" place-holder="输入您的手机号" ></v-form-item>
            <v-form-item class="address" :value="addressInfo.address" v-model="address" form-name="详细地址:" input-type="text" place-holder="输入您的详细地址" ></v-form-item>
        </div>
        <div class="btn-save" @click="onBtnSaveClick">保&nbsp;&nbsp;&nbsp;存</div>
    </div>
</template>
<script>
import FormItem2Vue from '../FormItem2.vue';
import * as types from '../../store/mutation-types';
export default {
    components:{
        "v-form-item":FormItem2Vue,
    },
    data(){
        return{
            phone:"",
            address:"",
            receiver:"",
        }
    },
    computed:{
        addressInfo:function(){
            let info =this.$store.state.userAddress;
            this.phone = info.phone;
            this.address = info.address;
            this.receiver = info.receiver; 
            return this.$store.state.userAddress;
        }
    },
    methods:{
        onBtnSaveClick:function(){
            //地址保存
            this.$store.dispatch(types.ACT_SAVE_USER_ADDRESS,
            {
                phone:this.phone,
                address:this.address,
                receiver:this.receiver
            });
        },
    }
}
</script>

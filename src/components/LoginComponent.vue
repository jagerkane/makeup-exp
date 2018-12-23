<template>

    <div class="user-login">
        <div class="user-login-bg" @click="$emit('closeLoginComponent')"></div>
        <div class="login-inner">
            <div class="login-title">手机号登录</div>
            <div class="login-body">
                <div class="login-content">
                    <v-form-item class="user-phone" 
                    form-name="手机号" 
                    place-holder="请输入手机号" 
                    input-type="text"
                    v-model="phone" ></v-form-item>
                    <div class="user-code-container"> 
                        <v-form-item class="user-pwd" form-name="验证码" place-holder="请输入验证码" input-type="text" v-model="pwd"></v-form-item>
                        <div class="btn-user-code">发送验证码</div>
                    </div>
                </div>
                <div class="btn-login" @click="onBtnLoginClick">登录</div>
                <div class="subscriber-agreement" @click="$emit('openSubscriberAgreement')">登录即同意<span>《用户协议》</span></div>
            </div>
        </div>
    </div>
</template>
<script>
import FormItemVue from './FormItem.vue';
export default {
    components:{
        vFormItem:FormItemVue,
    },
    data(){
        return{
            phone:"",
            pwd:"",
        }
    },
    methods:{
        onBtnLoginClick:function(){
            console.log(this.phone +"___"+this.pwd);
        },
        onInput:function(value){
            console.log(value);
        }
    },
    created:function(){

    }
}
</script>

<template>
    <div class="service-info">
        <div class="input-bg">
            <textarea class="service-input" rows="5" placeholder="请将你遇到的问题产品建议反馈给我们，建议你描述清楚，时间，尽可能详细的问题描述便于运营的童鞋帮你解决（200字内）"/>
        </div>
        <div class="service-qrcode">
            <p class="title">有问题可以直接联系微信小姐姐处理</p>
            <img class="qrcode-img" :src="qrcodeImg">
            <p class="bottom">长按保存到相册，扫码加客服微信咨询</p>
        </div>
        <p class="btn-send" @click="onBtnSendClick">发送</p>
    </div>
</template>
<script>
import qrcodeImg  from '../../assets/img/qrcode.jpg'
export default {
    data(){
        return{
            qrcodeImg:qrcodeImg,
        }
    },
    methods:{
        onBtnSendClick:function(){
            //发送反馈
        }
    }
}
</script>


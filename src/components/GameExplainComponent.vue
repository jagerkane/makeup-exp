<template>
    <div class="game-explain">
        <div class="explain-container">
            <div class="explain-inner">
                <div class="btn-close" v-on:click="onBtnCloseExplainClick">X</div>
                <div class="explain-title">闯关够说明</div>
                <p class="explain-item" v-for="item in explains">{{item}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            explains:[
                "1、闯关规则",
                "●活动开始前选择你喜欢的口红；",
                "●每关只需将所显示的口红插满圆盘，即可过关；连闯三关就可以获得心仪口红;",
                "●获得商品后，填写您的收货地址，我们会以快递的形式将你的口红寄给您（仅限中国大陆地区）",
                "2、商品说明",
                "●我们提供的商品全部为官方正品，支持专柜验货；",
                "3、快递说明",
                "●一般情况下，你闯关得到的商品提交订单后3个工作日内我们会为你安排发货，如遇特殊情况我们会在公众号发布。",
                "●如需快速了解订单详情，请联系客服。",
                "●客服微信wx132244"
                ]
        }
    },
    methods:{
        onBtnCloseExplainClick:function(){
            //關閉説明面板
            this.$emit("closeGameExplain");
        }
    }
}
</script>

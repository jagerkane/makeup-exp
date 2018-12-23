<template>
    <div class="make-up-item" v-on:click="$emit('onItemClick',content)">
        <img :src="content.img">
        <div class="item-shop-price">专柜价{{content.shop_price}}</div>
        <div class="item-name">{{content.name}}</div>
        <div class="item-desc">{{content.desc}}</div>
        <div class="item-price">{{content.price}}元闯关够</div>
    </div>
</template>
<script>
export default {
    props:{
        content:{
            type:Object,
            default:{
                shop_price:0,
                name:"amc口红",
                desc:"豆沙色",
                price:600,//分 单位
                img:"https://gministatic.beibaoyx.com/upload/admin/20181126/fe9256b601452b04b70c0113c18c4d5a.jpg"//图片链接
            }
        }
    },
}
</script>


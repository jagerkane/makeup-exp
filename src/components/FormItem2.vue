<template>
    <label class="form-label-underline">
        <span class="form-item-name">{{formName}}</span>
        <input class="form-item-input" :placeholder="placeHolder" :type="inputType" :value="value" @input="$emit('input',$event.target.value)">
    </label>
</template>
<style scoped>
    .form-label-underline{
        display: block;
        color: #333;
        box-sizing: border-box;
        background: white;
        border-bottom:.1rem solid #fef5f8;
        height: 3rem;
        font-size: 1rem;
        letter-spacing: .08rem;
        overflow: hidden;
        padding:  .8rem;
    }
    .form-label-underline .form-item-name{
        display: inline-block;
        width: 5.5em;
        text-align: left;
        line-height: 1.5rem;
        float: left;
    }
    .form-label-underline .form-item-input{
        border: none;
        box-sizing: border-box;
        display: inline-block;
        margin-left: .5rem;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: .05rem;
        width: 10rem;
        font-size: 1rem;
        float: left;
    }
    .form-label-underline input:focus{
        outline: 0;
    }
</style>

<script>
export default {
    name:'form-item-2',
    props:['formName','value','inputType','placeHolder'],
}
</script>

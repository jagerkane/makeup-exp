<template>
    <label class="form-label">
        <span class="form-name">{{formName}}</span>
        <input class="form-input" :type="inputType" :placeholder="placeHolder" :value="value" @input="$emit('input', $event.target.value)"/>
    </label>
</template>
<style scoped>
    .form-label{
        display: block;
        color: #333;
        box-sizing: border-box;
        border-color: #e8e8e8;
        border: 1px solid #d2d2d2;
        padding: .1rem;
        border-radius: .2rem;
        height: 2.5rem;
        font-size: .85rem;
        letter-spacing: .08rem;
        overflow: hidden;
        padding: .5rem;
        margin: .8rem 0;
    }
    .form-label .form-name{
        display: inline-block;
        width: 3.5em;
        text-align: left;
        line-height: 1.5rem;
        float: left;
    }
    .form-label .form-input{
        border: none;
        box-sizing: border-box;
        display: inline-block;
        margin-left: .5rem;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: .05rem;
        width: 6rem;
        float: left;
    }
    .form-label input:focus{
        outline: 0;
    }

</style>

<script>
export default {
    name:'input-form-label',
    props: ['formName', 'value','inputType','placeHolder'],
    data(){
        return{
        }
    },
    methods:{

    },
    created:function(){

    }
}
</script>


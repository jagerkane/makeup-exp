<template>
    <div class="subscribe-agreement-view">
        <div class="agreement-inner">
            <!-- <div class="agreement-title">平台用户服务协议</div> -->
            <div class="btn-close" @click="$emit('closeSubscribeAgreement')">X</div>
            <div class="agreement-body">
                <div class="agreement-container" v-html="agreement">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {agreement} from '../store/data.js';
export default {
    data(){
        return{
            agreement:agreement
        }
    }
}
</script>


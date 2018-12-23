<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view/>
  </div>
</template>
<style>
   @import './assets/css/container.css';
   @import './assets/css/index.css';
</style>
<script>
import nav from './components/NavComponent.vue'
import * as types from './store/mutation-types';
export default {
  components: {
    'v-nav':nav
  },
  created:function(){//获取用户的权限
  }
}
</script>

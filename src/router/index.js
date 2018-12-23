import Vue from 'vue'
import Router from 'vue-router'
import ShareInfoComponent from '@/components/ShareInfoComponent'
import MakeUpLstComponent from '@/components/MakeUpListComponent'
import MyAddressComponent from '@/components/my/MyAddressComponent'
import MyCenterComponent from '@/components/MyCenterComponent'
import SelfInfoComponent from '@/components/my/SelfInfoComponent'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path:'/',
      redirect:{name:'MakeupLst'}
    },
    {
      path:'/share-info',
      name:'Share',
      component:ShareInfoComponent
    },{
      path:'/makeup-list',
      name:'MakeupLst',
      component:MakeUpLstComponent,
    },{
      path:'/my',
      name:'My',
      component:MyCenterComponent,
      children:[
        {
          path: 'address',
          name: 'Address',
          component: MyAddressComponent
        },
        {
          name:'SelfInfo',
          path:'self',
          component:SelfInfoComponent  
        }
      ]
    },
   
  ]
})

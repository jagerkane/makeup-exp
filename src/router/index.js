import Vue from 'vue'
import Router from 'vue-router'
import ShareInfoComponent from '@/components/ShareInfoComponent'
import MakeUpLstComponent from '@/components/MakeUpListComponent'
import MyAddressComponent from '@/components/my/MyAddressComponent'
import MyCenterComponent from '@/components/MyCenterComponent'
import SelfInfoComponent from '@/components/my/SelfInfoComponent'
import ContactUpComponent from '@/components/my/ContactUpComponent'
import ServiceComponent from '@/components/my/ServiceComponent'
import MessageComponent from '@/components/my/MessageComponent'
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
        },
        {
          name:'ContactUs',
          path:'contact-us',
          component:ContactUpComponent,
          children:[
            {
              name: "Service",
              path: 'service',
              component:ServiceComponent,
            },
            {
              name:'Message',
              path:'message',
              component:MessageComponent,
            }
          ]
        }
      ]
    },
   
  ]
})

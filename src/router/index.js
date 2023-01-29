import { createRouter, createWebHashHistory} from 'vue-router'

import works from '../components/main_pages/works.vue'
import playground from '../components/main_pages/playground.vue'
import about from '../components/main_pages/about.vue'



export default  createRouter({
    history: createWebHashHistory(),
    routes:[
      {   
        path:'/',
        redirect:'/works',
      },{   
          name:'works',
          path:'/works',
          component: works,
      },{   
        name:'playground',
        path:'/playground',
        component: playground,
      },{   
        name:'about',
        path:'/about',
        component: about,
      }
    ],    
  }) 
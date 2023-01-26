import { createRouter, createWebHashHistory} from 'vue-router'

import page1 from "../components/page1.vue"
import page2 from "../components/page2.vue"


export default  createRouter({
    history: createWebHashHistory(),
    routes:[
        {   
            path:'/',
            redirect:'/1',
        },{
            name:'1',
            path:'/1',
            component:page1
        },{
            name:'2',
            path:'/2',
            component:page2
        }
    ],    
  }) 
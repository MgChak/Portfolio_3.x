import { createRouter, createWebHashHistory} from 'vue-router'

import works from '../components/main_pages/works.vue'
import playground from '../components/main_pages/playground.vue'
import about from '../components/main_pages/about.vue'

import letsgo from '../components/art_pages/letsgo_page.vue'
import transit from '../components/art_pages/transit_page.vue'
import cat from '../components/art_pages/cat_page.vue'
import nebu from '../components/art_pages/nebu_page.vue'

export default  createRouter({
  //正式版去掉'/new-version-testing/'
    history: createWebHashHistory('/new-version-testing/'),
    routes:[
      //main pages
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
      },
      //art pages
      {   
        name:'letsgo',
        path:'/letsgo',
        component: letsgo,
      },{   
        name:'transit',
        path:'/transit',
        component: transit,
      },{   
        name:'nebu',
        path:'/nebu',
        component: nebu,
      },{   
        name:'cat',
        path:'/cat',
        component: cat,
      }
    ],    
  })
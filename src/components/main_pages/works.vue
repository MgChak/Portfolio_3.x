<template>



    <div class="main_conatiner" id="article_container_for_scroll">


        <cover  @pointerover=" handle_card_hover('hidden',$event)"/>
        <code_c/>
        <div style ="width:1px;height:30px;"></div>
        <div class="comp_container" >
            <div class="switch_container" ref="el">
                <h3 @click="handle_page_switch_click(0)" :class="works_pages_status==0?'on_active':'not_active'">
                    <span class="desk_h3">Product Designs</span>
                    <span class="mobile_h3">Designs</span>
                </h3>
                <h3 @click="handle_page_switch_click(1)" :class="works_pages_status==1?'on_active':'not_active'" >
                    <span class="desk_h3">Coding Demos</span>
                    <span class="mobile_h3">Codings</span>
                </h3>
                <div :style="switch_background_style" class="switch_background"></div>
            </div>
        </div>
        <div style ="width:1px;height:80px;"></div>
        <!-- design -->
        <div class = 'comp_container' v-show = "works_pages_status == 0 "
            v-for="i in store.index_array" :key="i.id" 
            >
            <component class="comp" :class="store.is_thum_hover? 'comp_h':''" :is="render_comp(i.comp)"
            @click="handle_card_click(i.id)"
            @pointerover=" handle_card_hover('view_project',$event)"
            @pointerleave=" handle_card_hover('hidden',$event)" 
            />

           
            <div class="bio_container">
                <infor_bar :infor_obj="{type:'main',text: i.text,bio:i.bio,time:i.time}"/>
            </div>

            <div class="breakline"></div>
        </div>

        <!-- coding -->

        <div class="coding_container" v-show = "works_pages_status == 1 ">
            <!-- <h1>Coding Pages</h1> -->
            <div class="coding_demo_container" v-for = "i in coding_demos" :key="i.id">
            
                <div class="content_block_row_defult">

                    <vimeo_container class="content_block_row_iframe" :vimeolink="i.v_link" />

                    <div class="content_block_texts">
                        <h1>{{i.h1}}</h1>
                        <h2>{{i.h2}}</h2>
                        <h3>{{i.h3}}</h3>
                    </div>
                   
                </div>

            </div>
            <div style ="width:1px;height:50px;"></div>
        </div>

        <!-- <play/> -->

        <div class="flex_holder" :style="{height:flex_height_num+'vh'}"></div>
        <com_footer/>
        <!-- <div class="placeholder" ></div> -->
    </div>
    

    
</template>

<script setup>
// import cat from'./works_thum_cards/cat.vue'
import letsgo from'./works_thum_cards/letsgo.vue'
import nebu from'./works_thum_cards/nebu.vue'
import transit from'./works_thum_cards/transit.vue'
import cover from './works_thum_cards/cover.vue'
// import play from './works_thum_cards/play.vue'
import infor_bar from './works_thum_cards/infor_bar.vue'
import com_footer from '../com_footer.vue'
import code_c from './works_thum_cards/code_c.vue'
import vimeo_container from '../comps/vimeo_container.vue'
//hooks引入
import { s_lock,s_unlock } from '../../hooks/use_page_scroll_locker'
import {tracker_toggle} from '../../hooks/use_mouse_tracker_toggle'
import {scrollto} from '../../hooks/use_scroll'

//依赖引入
import {onMounted,onBeforeMount,ref,computed} from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import useStore from '../../store/index.js'
import router from '../../router'
import { screen_cover, screen_open,contents_open, contents_cover } from '../../hooks/use_full_sreen_cover'
import { useElementSize } from '@vueuse/core'
const store = useStore()

     //默认展示设计
     var works_pages_status =ref (0) //0：design；1:coding

    //thum组件注册队列
    let array = [
        {
            comp_name:'nebu',
            comp:nebu
        },{
            comp_name:'letsgo',
            comp:letsgo
        },{
            comp_name:'transit',
            comp:transit
        },
    ]
    //根据库中的数组渲染组件
    let render_comp = (name)=>{

        var index = array.findIndex((i)=>i.comp_name == name)
        return array[index].comp
    }


    //coding demo arry
    let coding_demos = [
        {   
            id:0,
            v_link:{
                radio:4,link:'https://player.vimeo.com/video/951197454?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            },
            h1:'Scroll Interaction',
            h2:'HTML - CSS - JS - VUE 2',
            h3:'I always like to try some simple but interesting interactive animations. This is the header I made for the first version of my portfolio site. It was also the first interactive component I coded after learning Vue.',
        },{   
            id:1,
            v_link:{
                radio:4,link:'https://player.vimeo.com/video/952067967?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            },
            h1:'Mobile Web App',
            h2:'HTML - CSS - JS - JQ - PHP - MYSQL',
            h3:'This is an app designed to record stray cats encountered in daily life. It is a web-based app that uses jQuery for front-end development and PHP for backend communication with the database. The database utilized is MySQL.',
        },{   
            id:2,
            v_link:{
                radio:4,link:'https://player.vimeo.com/video/952068037?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            },
            h1:'Slideshow',
            h2:'HTML - CSS - JS - VUE 3',
            h3:' This is a slideshow component I coded for the latest version of my portfolio website. It supports finger swipe navigation on mobile devices and mouse drag navigation on desktops. Additionally, on desktops, the cursor changes according to different user interactions.',
        },{   
            id:3,
            v_link:{
                radio:4,link:'https://player.vimeo.com/video/952068021?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            },
            h1:'Route Animations',
            h2:'HTML - CSS - JS - VUE 3',
            h3:'Based on monitoring the router status and utilizing Vue lifecycle hooks, I created lots of animations to make the transitions between pages appear smoother.',
        },{   
            id:4,
            v_link:{
                radio:4,link:'https://player.vimeo.com/video/952067956?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            },
            h1:'Back to Top',
            h2:'HTML - CSS - JS - VUE 3',
            h3:'The Back to Top button appears after the page is scrolled down a certain distance. The page scroll animation is implemented using requestAnimationFrame() to ensure smooth scrolling across as many browsers as possible.',
        }
    ]
    

    //初始化1
    onBeforeMount(()=>{
        //锁定滚动
        s_lock()
        if(!store.is_route_to_work){
            //修改导航栏状态到默认状态
            store.navbar_status = 0
            rewrite_index_class()
        }else{
            //全屏化thum
            store.index_array.forEach((item,index)=>{
                item.class = "container_index_set"
            })
        }

       
       
    })



    //初始化2
    onMounted(()=>{

        //根据router的路径执行不同的结果
        if(store.is_route_to_work){

            //跳转到指定位置
            srcoll_to(store.router_page,'jump')
            
        }else{
           
            //跳转到指定位置
            scrollto(0,'jump')
        }


        //打开屏幕遮罩
        screen_open()

        //打开内容遮罩
        //遮挡内容
        contents_open()
        //关闭多余滚动空间
        flex_close()

        //打开导航栏
        store.is_navbar_open = true
        //修改导航栏状态到默认状态
        store.navbar_status = 0
        //index化thum
        store.index_array[store.router_page].class = "container_index"
        setTimeout(()=>{
            //开启cover的动画
            store.cover_animation = true
        },100)
        
        
        setTimeout(()=>{
            //解锁滚动
            s_unlock() 
            //解锁thumb 的hover
            store.is_thum_hover = true
            
        },350)  
        
        //复位路由路径
        store.is_route_to_work = false
       
        
    })

    //复位
    onBeforeRouteLeave((to,from,next)=>{
        var index = store.index_array.findIndex((i)=>i.navto==to.name)
        //锁定thumb动画
        store.is_thum_hover = false

        if(index >=0){
             //navbar隐藏
            store.is_navbar_open = false 

            //增加多余的滚动空间
            flex_open()
            
            //滚动到指定位置
            srcoll_to(index,'smooth',()=>{
                next() 
                //关闭多余的滚动空间
                flex_close()
            })
            //全屏化thum
            store.index_array[index].class = 'container_article'

            //遮挡内容
            contents_cover(index)

        }else{
            //遮挡屏幕
            screen_cover()
            //关闭导航栏
            store.is_navbar_open = false
            setTimeout(()=>{
                next()        
            },350) 
        }
        //锁滚动
        s_lock() 
    })



// ============================================
// 回调函数
// ============================================


    //修改index_array中的class属性
    let rewrite_index_class = ()=>{
        store.index_array.forEach((i)=>{
            i.class = "container_index_set"
        })
    }

    //路由出动画队列（进入文章）
    let animation_queue_click_route_out = (index)=>{


       

        
    }
    //滚动到指定位置
    let srcoll_to = (index,val,fn)=>{
        let a = document.getElementsByClassName('comp')[index]
        a.getBoundingClientRect().top
        scrollto(store.scroll_position + a.getBoundingClientRect().top,val,fn)
    }





// ============================================
// 回事件触发/监听
// ============================================

    //控制页面切换
    let handle_page_switch_click = (id)=>{
        works_pages_status.value = id
      
    }


    let el = ref()
    const { width,height } = useElementSize(el)

    var x = 5

    var move = 98

    //背景样式
    let switch_background_style = computed(()=>{
        var t
        if(works_pages_status.value == 0){
            t = x
        }else{
            t = width.value/2 +x
        }

        return {
           'transform': 'translateX('+t+'px)',
           'width': width.value/2 - x*2 +'px',
           'height': height.value - x*2  +'px',
           'top':x+'px',
           
        }
    })

    
    
    //处理点击事件-触发翻页动画队列    
    let handle_card_click = (id)=>{
        //锁定thumb动画
        store.is_thum_hover = false

        var index = store.index_array.findIndex((i)=>i.id == id)
        router.push(store.index_array[index].navto) 
        
    }
    //处理hover事件
    let handle_card_hover = (val,e)=>{
           if(e.pointerType == 'mouse'){
                tracker_toggle(val)
            }
    }


    
    // 处理伸缩占位避免无法滚动到头
    let flex_height = ref(false)
    let flex_height_num = computed(()=> flex_height.value?100:0)
    let flex_open = ()=>{
        flex_height.value = true
    }
    let flex_close = ()=>{
        flex_height.value = false
    }



</script>

<style scoped>
.placeholder{
    width:1px;
    height:200px;
}
.main_conatiner{
    width: 100%;
    position:absolute;
    display:flex;
    flex-direction: column;
    align-items: center;
    /* gap:16px; */
    position:absolute;
    left:0;
    overflow: hidden;
    background-color: black;

}
.comp_container{
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:16px;
    width:100%;
}
.bio_container{
    width:80%;
    max-width: 1200px;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    pointer-events: none;
    overflow: hidden;

}
h1{
    font-size: 80px;
    line-height: 80px;
    font-weight: 600;
    text-transform: uppercase;
    color:var(--main-light-100);
}
h2{
    font-size: 20px;
    font-weight: 400;
    margin-right:60px;
    text-transform: uppercase;
    color:var(--main-light-100);
}

.content_block_texts > h1{
    font-size: 40px;
    line-height: 40px;
    font-weight: 600;
    text-transform: uppercase;
    color:var(--main-light-100);
}
.content_block_texts > h2{
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color:var(--main-light-100);
}
.content_block_texts > h3{
    font-size: 15px;
    font-weight: 200;
    color:var(--main-light-100);
    opacity: 0.7;
}

.breakline{
    margin:40px 0;
    width:1px;
    max-width: 600px;
    height:1px;
    background-color:rgba(0, 0, 0, 0.614);
}

.switch_container{
    border-radius: 50px;
    border:white 0.5px solid;
    display: flex;
    
    width:80%;
    max-width: 500px;
    position: relative;
    /* transform: scale(0.8); */
   
}
.switch_container > h3 {
    width: 50%;
    font-size: 18px;
    padding:16px 0px;
    text-align: center;
    z-index: 1;
    cursor: pointer;
}

.desk_h3{
    display:inline-block;
}
.mobile_h3{
    display:none;
}

.switch_background{
    position:absolute;
    background-color: white;
    z-index: 0;
    border-radius: 50px;
    transition: var(--animation-slow);
}
.on_active{
    color:black;
    font-weight: 700;
    transition: var(--animation-slow);
}
.not_active{
    color:rgba(255, 255, 255, 0.564);
    font-weight: 500;
    transition: var(--animation-slow);
}

.comp_h{
    transition: all 0.3s;
}
.comp_h:hover:hover{
    transform: scale(1.05);
    transition: all 0.3s;
}
.coding_container{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:80px;
}
.coding_demo_container{
    width:var(--content-width);
    max-width: var(--max-content-width);
    position:relative;
    display: flex;
}

.content_block_row_defult{
    width:100%;
    display: flex;
    gap:24px;
    align-items: center;
}
.content_block_texts{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:16px;
}
.content_block_row_iframe {
    width:100%;
    max-width: 550px;
    flex:none;
    display: flex;
    flex-direction: column;
}


@media (max-width: 750px) {
    .breakline{
        height:1px;
    }
    .desk_h3{
        display:none;
    }
    .mobile_h3{
        display:inline-block;
    }
    .switch_container > h3 {
        font-size: 15px;
    }

    .coding_demo_container{
        flex-direction: column;
    }
    .content_block_row_defult{
    flex-direction: column;
}

.content_block_texts > h1{
    font-size: 25px;
    line-height: 25px;

}
.content_block_texts > h2{
    font-size: 18px;

}
    
}
</style>


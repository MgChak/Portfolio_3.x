<template>



    <div class="main_conatiner" id="article_container_for_scroll">

        <!-- <letsgo @click="handle_card_click(1)" @pointerover=" handle_card_hover(1,$event)"/> -->

        <cover  @pointerover=" handle_card_hover('hidden',$event)"/>

        <div class = 'comp_container' 
            v-for="i in store.index_array" :key="i.id" 
            @click="handle_card_click(i.id)"
            @pointerover=" handle_card_hover('view_project',$event)"
            >


            <component class="comp" :is="render_comp(i.comp)"/>
           
            <div class="bio_container">
                <infor_bar :infor_obj="{type:'main',text: i.text,bio:i.bio,time:i.time}"/>
            </div>

            <div class="breakline"></div>
        </div>
        <!-- <div class="placeholder" ></div> -->
    </div>
    

    
</template>

<script setup>
import cat from'./works_thum_cards/cat.vue'
import letsgo from'./works_thum_cards/letsgo.vue'
import nebu from'./works_thum_cards/nebu.vue'
import transit from'./works_thum_cards/transit.vue'
import cover from './works_thum_cards/cover.vue'
import infor_bar from './works_thum_cards/infor_bar.vue'
//hooks引入
import { s_lock,s_unlock } from '../../hooks/use_page_scroll_locker'
import {tracker_toggle} from '../../hooks/use_mouse_tracker_toggle'
import {scrollto} from '../../hooks/use_scroll'
import {get_all_imgs} from'../../hooks/use_art_page_functions'
//依赖引入
import {onMounted,onBeforeMount,watchEffect, watch,computed} from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import useStore from '../../store/index.js'
import router from '../../router'
const store = useStore()

    //thum组件注册队列
    let array = [
        {
            comp_name:'nebu',
            comp:nebu
        },{
            comp_name:'cat',
            comp:cat
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
 
    //初始化1
    onBeforeMount(()=>{
        //锁定滚动
        s_lock()
        rewrite_index_class()
        if(!store.is_route_to_work){
            //修改导航栏状态到默认状态
            store.navbar_status = 0
        }else{
            //全屏化thum
            store.index_array.forEach((item,index)=>{
                if(index != store.router_page){
                    item.class = "container_index_set"
                }else{
                    item.class = "container_fullscreen_set"
                }
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

        store.loader_status = true//开启loader

        get_all_imgs()//统计图片

        var stop = watchEffect(()=>{
            if(store.is_loader_animation_finished){

                //打开导航栏
                store.is_navbar_open = true
                //修改导航栏状态到默认状态
                store.navbar_status = 0
                //index化thum
                store.index_array[store.router_page].class = "container_index"
                //开启cover的动画
                store.cover_animation = true
                
                setTimeout(()=>{
                    //解锁滚动
                    s_unlock() 
                    
                },600)

                //复位动画状态
                store.is_loader_animation_finished = false

                stop()

                
                
            }
        })
        
        //复位路由路径
        store.is_route_to_work = false
        
    })

    //复位
    onBeforeRouteLeave((to,from,next)=>{
        var index = store.index_array.findIndex((i)=>i.navto==to.name)
        if(index >=0){
            animation_queue_click_route_out(index)
            setTimeout(()=>{
                next()        
            },650) 
        }else{
            next()
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
            i.class = "container_index"
        })
    }

    //路由出动画队列（进入文章）
    let animation_queue_click_route_out = (index)=>{
        //所有窗口隐藏
        //图片追随鼠标偏移关闭
        store.is_slide_img_moving = false
        //navbar隐藏
        store.is_navbar_open = false 
        //开启动画
        store.scroll_animation = 'transition:all 0.6s var(--animation-slow-cubic)'
        //滚动到指定位置
        srcoll_to(index,'smooth')

       //全屏化thum
        store.index_array[index].class = 'container_fullscreen'

        
    }
    //滚动到指定位置
    let srcoll_to = (index,val)=>{
        let a = document.getElementsByClassName('comp')[index]
        a.getBoundingClientRect().top
        console.log("index:"+index,"a:"+a.getBoundingClientRect().top)
        scrollto(store.scroll_position + a.getBoundingClientRect().top,val)
    }



// ============================================
// 回事件触发/监听
// ============================================

    
    //处理点击事件-触发翻页动画队列    
    let handle_card_click = (id)=>{
        
        var index = store.index_array.findIndex((i)=>i.id == id)
        router.push(store.index_array[index].navto) 
        
        
    }
    //处理hover事件
    let handle_card_hover = (val,e)=>{
           if(e.pointerType == 'mouse'){
                tracker_toggle(val)
            }
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
    gap:16px;
    position:absolute;
    left:0;
    overflow: hidden;

}
.comp_container{
    display:flex;
    flex-direction: column;
    gap:16px;
    width:100%;
}
.bio_container{
    width:100%;
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
.breakline{
    width:100vw;
    height:20px;
    background-color:rgba(255, 255, 255, 0.185);
    margin-bottom:16px;
}
@media (max-width: 750px) {
    .breakline{
        height:1px;
    }
    
}
</style>


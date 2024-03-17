<template>



    <div class="main_conatiner" id="article_container_for_scroll">


        <cover  @pointerover=" handle_card_hover('hidden',$event)"/>
        <div style ="{width:1px;height:40px;}"></div>
        <div class = 'comp_container' 
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

        <!-- <play/> -->

        <com_footer/>
        <!-- <div class="placeholder" ></div> -->
    </div>
    

    
</template>

<script setup>
import cat from'./works_thum_cards/cat.vue'
import letsgo from'./works_thum_cards/letsgo.vue'
import nebu from'./works_thum_cards/nebu.vue'
import transit from'./works_thum_cards/transit.vue'
import cover from './works_thum_cards/cover.vue'
import play from './works_thum_cards/play.vue'
import infor_bar from './works_thum_cards/infor_bar.vue'
import com_footer from '../com_footer.vue'
//hooks引入
import { s_lock,s_unlock } from '../../hooks/use_page_scroll_locker'
import {tracker_toggle} from '../../hooks/use_mouse_tracker_toggle'
import {scrollto} from '../../hooks/use_scroll'

//依赖引入
import {onMounted,onBeforeMount} from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import useStore from '../../store/index.js'
import router from '../../router'
import { screen_cover, screen_open,contents_open, contents_cover } from '../../hooks/use_full_sreen_cover'
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
            
            //滚动到指定位置
            srcoll_to(index,'smooth',()=>{
                next() 
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
.breakline{
    margin:40px 0;
    width:1px;
    max-width: 600px;
    height:1px;
    background-color:rgba(0, 0, 0, 0.614);
}
@media (max-width: 750px) {
    .breakline{
        height:1px;
    }
    
}
.comp_h{
    transition: all 0.3s;
}
.comp_h:hover:hover{
    transform: scale(1.05);
    transition: all 0.3s;
}
</style>


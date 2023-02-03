<template>

    <div class="container" :style="background_color">

        <div class="view_window" :style="view_window_size">

            <div class="list_conatiner" :style="{left:slides_position}">


                    <cover @click="handle_card_click(0)" @mouseover=" handle_card_hover(0)"/> 

                    <letsgo @click="handle_card_click(1)" @mouseover=" handle_card_hover(1)"/> 

                    <transit @click="handle_card_click(2)" @mouseover=" handle_card_hover(2)"/> 

                    <abs @click="handle_card_click(3)" @mouseover=" handle_card_hover(3)"/>


            </div>
            
        </div>

    </div>

    <infor_bar/>
    
</template>

<script setup>
//组件引入
import abs from'./works_thum_cards/abs.vue'
import cover from'./works_thum_cards/cover.vue'
import letsgo from'./works_thum_cards/letsgo.vue'
import transit from'./works_thum_cards/transit.vue'
import infor_bar from'./works_thum_cards/infor_bar.vue'
//hooks引入
import {tracker_toggle} from '../../hooks/use_mouse_tracker_toggle'
//依赖引入
import {computed,ref,onMounted} from 'vue'
import useStore from '../../store/index.js'
import router from '../../router'
const store = useStore()

    //初始化
    onMounted(()=>{
        //z-index
        store.z_index_page_number = store.page_on
        //关闭卡片偏移
        store.card_positon_move = undefined
        //修改导航栏状态到默认状态
        store.navbar_status = 0
        setTimeout(()=>{
            //打开导航栏
            store.is_navbar_open = true
            //重置信息栏
            store.infor_bar_status = true
            //重置视窗宽度
            store.view_window_status = 1
            //重置首页内容物大小
            store.expand_page_class_number = store.page_on
            //打开卡片偏移
            store.card_positon_move = store.page_on
        
        },100)
        
    })

    //路由出动画队列（进入文章）
    let animation_queue_click_route_out = (id)=>{
        //所有窗口隐藏
        //navbar隐藏
        store.is_navbar_open = false 
        //信息栏隐藏
        store.infor_bar_status = false
        //关闭卡片偏移
        store.card_positon_move = undefined
        //开始路由
        setTimeout(()=>{
            router.push(store.index_array[id].navto)         
        },300) 
    }

    //背景颜色改变
    let background_color = computed(()=>{
        return {
            background:store.index_array[store.page_on].background_color
        }
    })


    //从库中提取已经计算好的卡片尺寸_视窗使用
    let view_window_size = computed(()=>{

        if (store.view_window_status == 0){
            return {
                width:store.get_thumcard_width,
                height:store.get_thumcard_height,
                transition:'all 0.3s ease-in'
            }
           
        }else if(store.view_window_status == 1){
            return {
                width:store.page_width+'px',
                height:'100vh',
                transition:'var(--animation-slow)'
            }
        }
    })

    

    //======================================
    //幻灯片逻辑控制
    //======================================

    let action_lock = false
 

    //通过视窗宽度，计算翻页移动距离
    let slides_position = computed(()=>{
        let a = store.page_width*0.4 + 16 
        return a*store.page_on*-1 + 'px'
    })
    
    //处理点击事件-触发翻页动画队列
    let handle_card_click = (id)=>{
        if (id == store.page_on){
            animation_queue_click_route_out(id)
        }else if( id > store.page_on){
            animation_queue_click_pagemove('next')
        }else if( id < store.page_on){
            animation_queue_click_pagemove('pre')
        }
    }

    //处理hover事件-修改tracker的状态
    let handle_card_hover = (id)=>{
        if (id == store.page_on){
            if(id != 0 ){
                tracker_toggle('view_project')
            }else{
                tracker_toggle('hidden')
            }    
        }else if( id > store.page_on){
            if(store.page_on == 0 ){
                tracker_toggle('projects')
            }else{
                tracker_toggle('next')
            }   
        }else if( id < store.page_on){
            if(id != 0 ){
                tracker_toggle('pre')
            }else{
                tracker_toggle('cover')
            }    
        }
    }

    //翻页动画队列
    let animation_queue_click_pagemove = (val)=>{
        //卡片缩小
        store.expand_page_number = undefined
        //卡片内内容缩小
        store.expand_page_class_number = undefined
        //视窗缩小
        store.view_window_status = 0
        //信息卡隐藏
        store.infor_bar_status = false
        //关闭卡片偏移
        store.card_positon_move = undefined

        //0.3s后
        setTimeout(()=>{
            //卡片提升到默认层
            store.z_index_page_number = undefined
            //列表移动-slide_on发生变动
            slides_move(val)
            //修改显示的信息 
            store.infor_show_witch = store.page_on
            //卡片沉降到-3
            store.z_index_page_number = store.page_on
        },300)

        //0.6s后
        setTimeout(()=>{
            //卡片放大
            store.expand_page_number = store.page_on
            //卡片内内容放大
            store.expand_page_class_number = store.page_on
            //视窗放大
            store.view_window_status = 1
            //信息卡出现
            store.infor_bar_status = true
            //打开卡片偏移
            store.card_positon_move = store.page_on
        },550)

    }

    //翻页
    let slides_move = (tar)=>{
            if (tar == 'next'){
                store.page_on++
            }else if (tar == 'pre'){
                store.page_on--
            }
    }
    
   

</script>

<style scoped>
.container{
    width:100%;
    height:100vh;

    display:flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

}
.view_window{
    position:relative;
    left:0;
    right:0;
    top:0;
    bottom:0;
}
.list_conatiner{
    display:flex;
    align-items: center;
    gap:16px;

    position:absolute;
    top:0;

    transition:all 0.3s ease-out;
}


</style>
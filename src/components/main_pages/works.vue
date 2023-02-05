<template>

    <div class="works_container" :style="[background_color,works_container_size]">

        <div class="view_window" :style="view_window_size">

            <div class="list_conatiner" :style="{transform:slides_position}">


                    <cover @click="handle_card_click(0)" @mouseover=" handle_card_hover(0)" /> 

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
import {computed,ref,onMounted, watchEffect, reactive} from 'vue'
import useStore from '../../store/index.js'
import router from '../../router'
const store = useStore()

    //主窗口尺寸
    let works_container_size = computed(()=>{
        return{
            height:store.page_height+'px',
            width:store.page_width+'px'
        }
    })
    //背景颜色改变
    let background_color = computed(()=>{
        return {
            background:store.index_array[store.page_on].background_color
        }
    })

    //初始化
    onMounted(()=>{
        //z-index
        store.z_index_page_number = store.page_on
        //卡片偏移到屏幕外
        store.card_positon_move_hide = true
        //初始化卡片偏移状态
        store.card_positon_move = store.page_on
        //修改导航栏状态到默认状态
        store.navbar_status = 0
        setTimeout(()=>{
            //打开导航栏
            store.is_navbar_open = true
            //重置信息栏
            store.infor_bar_status = true
            //重置视窗宽度
            store.view_window_status = 1
            //打开卡片偏移到屏幕内
            store.card_positon_move_hide = false
        
        },100)   
    })
    //路由出动画队列（进入文章）
    let animation_queue_click_route_out = (id)=>{
        //所有窗口隐藏
        //navbar隐藏
        store.is_navbar_open = false 
        //信息栏隐藏
        store.infor_bar_status = false
        //卡片偏移到屏幕外
        store.card_positon_move_hide = true
        //开始路由
        setTimeout(()=>{
            router.push(store.index_array[id].navto)         
        },300) 
    }
    //从库中提取已经计算好的卡片尺寸_视窗使用
    let view_window_size = computed(()=>{
        return{
            width:store.get_thumcard_width,
            height:store.get_thumcard_height,
            transition:'all 0.3s ease-in'
        }
    })
    
    //======================================
    //幻灯片逻辑控制
    //======================================
    let action_lock = false
 
    //通过视窗宽度，计算翻页移动距离
    // let slides_position = computed(()=>{
    //     let a = store.page_width*0.4 + 16 
    //     return a*store.page_on*-1 + 'px'
    // })
    let slides_position = computed(()=>{
        let a = store.page_width*0.4 + 16 
        return `translateX(${a*store.page_on*-1}px`
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
    //处理hover事件
    let handle_card_hover = (id)=>{
        store.hover_id = id
    }
    //监听id和page_on的变化，做出反应，改变tracker的class
    watchEffect(()=>{
        if (store.hover_id == store.page_on){
            if(store.hover_id != 0 ){
                tracker_toggle('view_project')
            }else{
                tracker_toggle('hidden')
            }    
        }else if( store.hover_id > store.page_on){
            if(store.page_on == 0 ){
                tracker_toggle('projects')
            }else{
                tracker_toggle('next')
            }   
        }else if( store.hover_id < store.page_on){
            if(store.hover_id != 0 ){
                tracker_toggle('pre')
            }else{
                tracker_toggle('cover')
            }    
        }
    })
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
        //卡片偏移归位
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
            //卡片重新偏移
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


    watchEffect(()=>{
        store.card_size_status.forEach((item,index)=>{
            if (index!=store.expand_page_number){
                //默认小卡
                item.card_style = {
                    width:store.get_thumcard_width,
                    height:store.get_thumcard_height,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    filter:' drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))',
                } 
                item.card_move.t_scale= 'scale(1,1)'
                item.card_move.t_transition_backup= 'all ease-in 0.3s'
                item.card_class =  'container_default'
            }else{
                //全屏大卡
                item.card_style = {
                    width:store.get_thumcard_width,
                    height:store.get_thumcard_height,
                    margin:'0',
                }
                item.card_move.t_transition_backup= 'var(--animation-slow)'
                item.card_move.t_scale= 'scale(2.5,2.5)'
                item.card_class =  'container_expand'
            }
        })
    })

    watchEffect(()=>{
        store.card_size_status.forEach((item,index)=>{
            if(index != store.z_index_page_number){
                item.card_index = 'container_z_index_front'
            }else{
                item.card_index = 'container_z_index_back'
            } 
        })

    })
    
    watchEffect(()=>{
        store.card_size_status.forEach((item,index)=>{
            if(index == store.card_positon_move + 1){
                if(store.card_positon_move_hide){
             
                        item.card_move.t_translate = 'translate(100%, 0)'
                        item.card_move.t_transition='var(--animation-slow)'
                    
                }else if(['next','projects'].includes(store.tracker_status)){
                    item.card_move.t_translate ='translate(30%, 0)'
                    item.card_move.t_transition='var(--animation-slow)'
                    
                }else{
                    item.card_move.t_translate = 'translate(50%, 0)'
                    item.card_move.t_transition='var(--animation-slow)'
                    
                }
                
            }else if(index == store.card_positon_move - 1){
                if(store.card_positon_move_hide){
                    item.card_move.t_translate = 'translate(-100%, 0)'
                    item.card_move.t_transition='var(--animation-slow)'
                    
                }else if(['pre','cover'].includes(store.tracker_status)){
                    item.card_move.t_translate = 'translate(-30%, 0)'
                    item.card_move.t_transition='var(--animation-slow)'
                    
                }else{
                    item.card_move.t_translate = 'translate(-50%, 0)'
                    item.card_move.t_transition='var(--animation-slow)'
                    
                }
            }else{
                item.card_move.t_translate = 'translate(0, 0)'
                item.card_move.t_transition =  item.card_move.t_transition_backup
                
            } 
        })

    })

    
   
</script>

<style scoped>
.works_container{
    display:flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.view_window{
    will-change: width,height;
    height:100vh;
    width:100vw;
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
    left:0;
    transition:all 0.3s ease-out;
}
</style>


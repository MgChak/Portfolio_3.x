<template>

    <div class="container">

        <div class="view_window" :style="view_window_size">

            <div class="list_conatiner" :style="{left:slides_position}">

                
                     
                    <cover @click="handle_card_click(0)"/> 
               
                
                    <letsgo @click="handle_card_click(1)"/> 

                 
                    <transit @click="handle_card_click(2)"/> 


                    <abs @click="handle_card_click(3)"/>


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
//依赖引入
import {computed,ref} from 'vue'
import useStore from '../../store/index.js'
const store = useStore()


    //从库中提取已经计算好的卡片尺寸_给卡片盒子使用
    let view_window_size = computed(()=>{
        let view_window_animation_speed = 'all 0.3s ease-in'
        if (view_window_resize_num.value==1){
            view_window_animation_speed = 'all 0.3s ease-in'
        }else{
            view_window_animation_speed = 'var(--animation-slow)'
        }
        return {
            width:store.get_thumcard_container_width_number*view_window_resize_num.value+'px',
            height:store.get_thumcard_height,
            transition:view_window_animation_speed
        }
    })


    //======================================
    //幻灯片逻辑控制
    //======================================

    let action_lock = false

    let slides_on = ref(0)
    
    let view_window_resize_num = ref(1.8)
    

    //通过视窗宽度，计算翻页移动距离
    let slides_position = computed(()=>store.get_thumcard_container_width_number* slides_on.value*-1 + 'px')
    
    //处理点击事件-触发翻页动画队列
    let handle_card_click = (id)=>{
        if (id == slides_on.value){
            console.log("触发路由-进入卡片："+id)
        }else if( id > slides_on.value){
            animation_queue('next')
        }else if( id < slides_on.value){
            animation_queue('pre')
        }
    }
    //翻页动画队列
    let animation_queue = (val)=>{

        //卡片缩小
        update_cards_size('collapse')
        //视窗缩小
        view_window_resize('collapse')
        //信息卡隐藏
        store.infor_bar_status = false

        //0.3s后
        setTimeout(()=>{
            //卡片提升到默认层
            update_cards_z_index('front')
            //列表移动-slide_on发生变动
            slides_move(val)
            //修改显示的信息
            store.infor_show_witch = slides_on
        },250)

        //0.6s后
        setTimeout(()=>{
            //卡片沉降到-3
            update_cards_z_index('back')
            //卡片放大
            update_cards_size('expand')
            //视窗放大
            view_window_resize('expand')
            //信息卡出现
            store.infor_bar_status = true
        },550)

    }

    //改变store中的依赖
    let update_cards_size = (val)=>{
        if (val == 'expand'){
            store.expand_page_number = slides_on.value
        }else if(val == 'collapse'){
            store.expand_page_number = -1
        }  
    }
    let update_cards_z_index = (val)=>{
        if (val == 'back'){
            store.z_index_page_number = slides_on.value
        }else if(val == 'front'){
            store.z_index_page_number = -1
        }  
    }
    //翻页
    let slides_move = (tar)=>{
            if (tar == 'next'){
                slides_on.value++
            }else if (tar == 'pre'){
                slides_on.value--
            }
    }
    
    //修改视窗宽度
    let view_window_resize = (val)=>{
        if (val == 'expand'){
            view_window_resize_num.value = 1.8
    
        }else if(val == 'collapse'){
            view_window_resize_num.value = 1
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
    /* background: green; */

    position:relative;
    left:0;
    right:0;
    top:0;
    bottom:0;
}
.list_conatiner{
    display:flex;
    align-items: center;
    gap:0px;

    position:absolute;
    top:0;

    transition:all 0.3s ease-out;
}

</style>
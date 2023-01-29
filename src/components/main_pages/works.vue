<template>

    <div class="container">

        <div class="view_window" :style="card_size">

            <div class="list_conatiner" :style="{left:slides_position}">

                <div class="card_container" :style="card_size"> 
                    <abs @click="handle_card_click(0)"/> 
                </div>
                <div class="card_container" :style="card_size"> 
                    <cover @click="handle_card_click(1)"/> 
                </div>
                <div class="card_container" :style="card_size"> 
                    <letsgo @click="handle_card_click(2)"/> 
                </div>
                <div class="card_container" :style="card_size"> 
                    <transit @click="handle_card_click(3)"/> 
                </div>

            </div>
            
        </div>

    </div>
    
</template>

<script setup>
//组件引入
import abs from'./works_thum_cards/abs.vue'
import cover from'./works_thum_cards/cover.vue'
import letsgo from'./works_thum_cards/letsgo.vue'
import transit from'./works_thum_cards/transit.vue'
//依赖引入
import {computed,ref} from 'vue'
import useStore from '../../store/index.js'
const store = useStore()


    //从库中提取已经计算好的卡片尺寸_给视窗使用
    let card_size = computed(()=>{
        return {
            width:store.get_thumcard_container_width,
            height:store.get_thumcard_height
        }
    })

    //======================================
    //幻灯片逻辑控制
    //======================================

    let action_lock = false

    let slides_on = ref(0)

    //通过视窗宽度，计算翻页移动距离
    let slides_position = computed(()=>store.get_thumcard_container_width_number* slides_on.value*-1 + 'px')

    //控制翻页
    let slides_move = (tar)=>{
        if (tar == 'next'){
            slides_on.value++
        }else if (tar == 'pre'){
            slides_on.value--
        }
    }
    //处理点击事件
    let handle_card_click = (id)=>{

        if (id == slides_on.value){
            console.log("触发路由-进入卡片："+id)
        }else if( id > slides_on.value){
            slides_move('next')
        }else if( id < slides_on.value){
            slides_move('pre')
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
    background: green;

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

    transition:all 0.3s ease-in-out;
}
.card_container{
    display:flex;
    justify-content: center;
}

</style>
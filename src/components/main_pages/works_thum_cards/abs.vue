<template>
        <div class="container" :style="[card_size,card_position]" :class="[card_class,card_z_index]" >
            <img :style="img_position" src="../../../assets/thum_cards/abs_2.png" alt="">
            <img :style="img_position" src="../../../assets/thum_cards/abs_1.png" alt="">
        </div>
    
</template>

<script setup>
//hooks引入
import{handle_img_position_change} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()

    
    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = 3

    let card_size = computed(()=>store.card_size_status[card_id].card_style)
    let card_class = computed(()=>store.card_size_status[card_id].card_class)
    let card_z_index = computed(()=>store.card_size_status[card_id].card_index)
    let card_position = computed(()=>{
        return {
        transform:`${store.card_size_status[card_id].card_move.t_scale} ${store.card_size_status[card_id].card_move.t_translate}`,
        transition:store.card_size_status[card_id].card_move.t_transition
        }
    })
    let img_position = computed(()=>handle_img_position_change(card_id))



    


</script>

<style scoped>
.container{
    background:linear-gradient(270.03deg, #F9193D 0.03%, #322632 35.03%, #1B2731 62.5%, #2F7DA1 99.97%);
    will-change: z-index,transform;
    overflow: hidden;
    position:relative;
}
.container_z_index_back{
    z-index:0;
}
.container_z_index_front{
    z-index:1;
}
.container_expand > img:first-child{
    position:absolute;
    left:12%;
    bottom: 10%;
    width:70%;
    transition:var(--animation-slow);
}
.container_expand > img:last-child{
    position:absolute;
    right:18%;
    bottom: 10%;
    width:20%;
    transition:var(--animation-slow);
}
.container_default> img:first-child{
    position: absolute;
    left: 17%;
    bottom: 12%;
    width: 56%;
    transition: all 0.3s ease-in;
}
.container_default> img:last-child{
    position: absolute;
    right: 25%;
    bottom: 14%;
    width: 17%;
    transition: all 0.3s ease-in;
}
.container_router> img:first-child{
    position: absolute;
    left: 19%;
    bottom: 5%;
    width: 57%;
    transition: var(--animation-slow);
}
.container_router> img:last-child{
    position: absolute;
    right: 23%;
    bottom: 2%;
    width: 17%;
    transition: var(--animation-slow);
}
</style>
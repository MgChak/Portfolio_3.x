<template>

    <div class="container background" :style="[card_size,card_position]" :class="[card_class,card_z_index]" >
        
            <img :style="img_position" src="../../../assets/thum_cards/letsgo_large_p.webp" class="largephone" alt="">
            <img :style="img_position" src="../../../assets/thum_cards/letsgo_small_p.png" class="smallphone" alt="">

    </div>


</template>

<script setup>
//hooks引入
import{handle_img_position_change} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,defineProps, onMounted} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()
//监听对比需要展开的卡片id于自身id，并改变css
let card_id = 1

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
    will-change:z-index,transform;
}
img{
    will-change:transform;
}
.container_z_index_back{
z-index:0;
}
.container_z_index_front{
z-index:1;
}
.container_expand{
}
.container_default{
}
.container_router{
}
.background{
background: linear-gradient(90deg, #2D3527 0%, #3F4F33 49.65%, #2D3527 100%);
position:relative;
}
.container_default> .largephone {
position: absolute;
bottom:0;
left:5%;
width:85%;
z-index:1;
transition:all 0.3s ease-in;
}
.container_default> .smallphone {
position: absolute;
bottom:10%;
left:30%;
width:50%;
z-index:1;
transition:all 0.3s ease-in;
}
.container_expand > .largephone {
position: absolute;
bottom:0;
left:-14%;
width:110%;
z-index:3;
transition:var(--animation-slow);
}
.container_expand > .smallphone {
position: absolute;
bottom:0%;
left:30%;
width:65%;
z-index:3;
transition:var(--animation-slow);
}
.container_router > .largephone {
position: absolute;
bottom: 0;
left: -2%;
width: 90%;
z-index:3;
transition:var(--animation-slow)
}
.container_router > .smallphone {
position: absolute;
bottom: -2%;
left: 35%;
width: 53%;
z-index:3;
transition:var(--animation-slow)
}
</style>
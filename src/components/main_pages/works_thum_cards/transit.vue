<template>

        <div class="container background" :style="[card_size,card_position]" :class="[card_class,card_z_index,jump_animation]" ref="el">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">
                <img :style="img_position" src="../../../assets/thum_cards/transit_2.png" alt="">
        
            </div>
        </div>
</template>

<script setup>
//hooks引入
import{handle_img_position_change,handle_el_container_size} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,ref} from 'vue'
import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()

    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = store.index_array.findIndex((item)=> item.name == 'TRANSIT' )

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
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(card_id,width, height))
    let jump_animation = computed(()=>store.card_size_status[card_id].card_move.jump_animation)

</script>

<style scoped>
.container{
    will-change: z-index;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

}
img{

}
.jump_animation{
    animation: animation 5s infinite;
    animation-delay: 1s;
}
@keyframes animation {
    0%{left:0%}
    5%{left:2.5%}
    10%{left: -2%}
    15%{left: 1.5%}
    20%{left: 0%}
    100%{left: 0%}
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
.el_conatiner{
    position:relative;
    /* background-color: green; */
}

.background{
    background-image: url('../../../assets/thum_cards/transit_background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position:relative;
}
.container_default > .el_conatiner> img {
    position: absolute;
    bottom: -26%;
    left: -54%;
    width: 202%;
    z-index:-1;
    transition:all 0.3s ease-in;
}
.container_expand > .el_conatiner> img {
    position: absolute;
    bottom: -26%;
    left: -54%;
    width: 202%;
    z-index:-1;
    transition:var(--animation-slow);
}
.container_router > .el_conatiner> img {
    position: absolute;
    bottom: -26%;
    left: -37%;
    width: 171%;
    z-index:-1;
    transition:var(--animation-slow);
}


</style>
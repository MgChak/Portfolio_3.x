<template>
        <div class="container" :style="[card_size,card_position]" :class="[card_class,card_z_index]" ref="el" >
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}"> 
                <img :style="img_position" src="../../../assets/thum_cards/abs_2.png" alt="">
                <img :style="img_position" src="../../../assets/thum_cards/abs_1.png" alt="">
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
    let card_id = store.index_array.findIndex((item)=> item.name == 'ABS_INTERNSHIP' )

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


</script>

<style scoped>
.container{
    background:linear-gradient(270.03deg, #F9193D 0.03%, #322632 35.03%, #1B2731 62.5%, #2F7DA1 99.97%);
    will-change: z-index;
    overflow: hidden;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_z_index_back{
    z-index:0;
}
.container_z_index_front{
    z-index:1;
}
.el_conatiner{
    position:relative;
    /* background-color: green; */
}

.container_expand > .el_conatiner> img:first-child{
    position:absolute;
    right: 1%;
    bottom: 18%;
    width: 104%;
    transition:var(--animation-slow);
}
.container_expand> .el_conatiner > img:last-child{
    position:absolute;
    right: -1%;
    bottom: 13%;
    width: 40%;
    transition:var(--animation-slow);
}
.container_default> .el_conatiner> img:first-child{
    position: absolute;
    right: 1%;
    bottom: 18%;
    width: 104%;
    transition: all 0.3s ease-in;
}
.container_default> .el_conatiner> img:last-child{
    position: absolute;
    right: -1%;
    bottom: 13%;
    width: 40%;
    transition: all 0.3s ease-in;
}
.container_router> .el_conatiner> img:first-child{
    position: absolute;
    right: 1%;
    bottom: 18%;
    width: 104%;
    transition: var(--animation-slow);
}
.container_router> .el_conatiner> img:last-child{
    position: absolute;
    right: -1%;
    bottom: 13%;
    width: 40%;
    transition: var(--animation-slow);
}
</style>
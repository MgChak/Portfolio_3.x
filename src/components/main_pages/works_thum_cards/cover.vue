<template>

    <div class="container" :style="[card_size,card_position]" :class="[card_class,card_z_index]" ref="el" >
        <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">

            <div class="title_container">
                <div class="box box1">
                
                    <img src="../../../assets/thum_cards/hi.svg" alt="">
                </div>
                <div class="box box2">
                    <img src="../../../assets/thum_cards/im.svg" alt="">
                </div>
                <div class="box box3">
                    <img src="../../../assets/thum_cards/design.svg" alt="">
                </div>
            </div>
            <img class="arrow" :style="img_position" src="../../../assets/thum_cards/cover_arrow.png" alt="">
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
    let card_id = store.index_array.findIndex((item)=> item.name == 'COVER' )

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
    background:linear-gradient(360deg, #253238 -3.36%, #000000 49.04%);
    will-change: z-index;
    overflow: hidden;
    display: flex;
    justify-content: start;
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
.title_container{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 80%;
    top: 30%;
    left: 10%;
    z-index: 1;

}
.box{
    display: flex;
    overflow: hidden;
}
.box1{
    width: 60%;
}
.box2{
    width:100%;
    z-index:1;
    margin-top:-5%;
}
.box3{
    width:40%
}
.box > img{
    width: 100%;
    transform:translateY(102%);
}
.arrow{
    position: absolute;
    width: 42vw;
    max-width: 1200px;
    margin: auto;
    top: 0%;
    bottom: 0%;
    left:-200%;
}
.container_expand > .el_conatiner > .arrow{
    animation: ani_arrow 0.6s var(--animation-slow-cubic) 0.6s forwards;
}
.container_expand > .el_conatiner >.title_container > .box1 > img{
    animation: ani_font 0.6s var(--animation-slow-cubic) forwards;
}
.container_expand > .el_conatiner >.title_container > .box2 > img{
    animation: ani_font 0.6s var(--animation-slow-cubic) 0.3s forwards;
}
.container_expand > .el_conatiner >.title_container > .box3 > img{
    animation: ani_font 0.6s var(--animation-slow-cubic) 0.6s forwards;
}


.container_default > .el_conatiner >.title_container > .box > img{
    animation: ani_font2 0.3s ease-in forwards;
}
.container_default > .el_conatiner > .arrow{
    animation: ani_arrow2 0.3s ease-in forwards;
}
h1,
h2,
h3,
h4{
    color:var(--main-light-100);
}

@keyframes ani_font {
    from{transform:translateY(102%);}
    to{transform:translateY(0%);}
}
@keyframes ani_font2 {
    from{transform:translateY(0%);}
    to{transform:translateY(102%);}
}

@keyframes ani_arrow {
    from{left:-200%;}
    to{left:-20%;}
}
@keyframes ani_arrow2 {
    from{left:-20%;}
    to{left:-200%;}
}
</style>
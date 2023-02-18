<template>

    <div class="container" :style="[card_size,card_position]" :class="[card_class,card_z_index]" >
        <div class="title_container">
            <div class="h1_conatiner">
                <img src="../../../assets/thum_cards/cover_title_1.svg" alt="">
            </div>
            <div class="base_box">
                <div class="h2_conatiner">
                    <img src="../../../assets/thum_cards/cover_title_2.svg" alt="">
                </div>
                <div class="arrows_conatiner">
                    <svg  viewBox="0 0 984 187" fill="none" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
                        <path d="M591.5 8H982.5V81.5H1V179H401" stroke="#F5F7FB"/>
                        <path d="M595 8L583 14.9282L583 1.0718L595 8Z" fill="#F5F7FB"/>
                        <path d="M398 179L410 172.072L410 185.928L398 179Z" fill="#F5F7FB"/>
                    </svg>
                    <img src="../../../assets/thum_cards/cover_title_3.svg" alt="">
                    <svg  viewBox="0 0 1006 16" fill="none" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8H1074" stroke="#F5F7FB"/>
                        <path d="M16 8L4 14.9282L4 1.0718L16 8Z" fill="#F5F7FB"/>
                    </svg>
                </div>
                
            </div>
            
        </div>
        

    </div>
    
</template>

<script setup>
//hooks引入
import{} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()
    
    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = 0

    let card_size = computed(()=>store.card_size_status[card_id].card_style)
    let card_class = computed(()=>store.card_size_status[card_id].card_class)
    let card_z_index = computed(()=>store.card_size_status[card_id].card_index)
    let card_position = computed(()=>{
        return {
        transform:`${store.card_size_status[card_id].card_move.t_scale} ${store.card_size_status[card_id].card_move.t_translate}`,
        transition:store.card_size_status[card_id].card_move.t_transition
        }
    })
    // let img_position = computed(()=>handle_img_position_change(card_id))





</script>

<style scoped>
.container{
    background:linear-gradient(360deg, #253238 -3.36%, #000000 49.04%);
    will-change: z-index,transform;


}
.container_z_index_back{
    z-index:0;
}
.container_z_index_front{
    z-index:1;
}


.title_container{
    width:90%;
    position:absolute;
    left:10%;
    top:20%;
    display:flex;
    flex-direction: column;

}
.h1_conatiner{
    width:70%;
    overflow: hidden;
    display: flex;
}
 .h1_conatiner  >img{
    width:84%;
    transform: translate(0,150%);
    transition:all 0.3 ease-in;
}
.base_box{ 
    position:relative;
    margin-top:1%;
    width:100%;
}
.h2_conatiner{
    width:100%;
    overflow: hidden;
    display: flex;
}
.h2_conatiner >img{
    width:33%;
    transform: translate(0,150%);
    transition:all 0.3 ease-in;
}
.arrows_conatiner{
    position:absolute;
    width:100%;
    display: flex;
    flex-direction: column;
    top:20%;
}
.arrows_conatiner> svg:first-child{
    width: 59%;
}
.arrows_conatiner> svg:first-child >path:first-child{
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
}
.arrows_conatiner> img{
    width: 7%;
    position: absolute;

    bottom: 1%;
    left: 26.2%;

    opacity:0;

}
.arrows_conatiner> svg:first-child >path:nth-child(2){
    opacity: 0;
   
} 
.arrows_conatiner> svg:first-child >path:nth-child(3){
    opacity: 0;
    
}


.arrows_conatiner> svg:last-child{
    position: absolute;
    width: 60%;
    left: 34.7%;
    bottom: 0%;
}
.arrows_conatiner> svg:last-child >path:first-child{
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
}
.arrows_conatiner> svg:last-child >path:nth-child(2){
    opacity: 0;
   
} 

/* .container_expand{} */

.container_expand > .title_container > .h1_conatiner  >img{
    transform: translate(0,0);
    transition:var(--animation-slow) 0.6s
}

.container_expand >.title_container >.base_box >.h2_conatiner >img{
    transform: translate(0,0);
    transition:var(--animation-slow) 0.9s 
}
.container_expand >.title_container >  .base_box >.arrows_conatiner> svg:first-child >path:first-child{
    animation:svganimation 0.6s ease-in-out 1.5s;
    animation-fill-mode:forwards;
}
.container_expand > .title_container >  .base_box >.arrows_conatiner> svg:first-child >path:nth-child(2){
    
    animation:svganimation1 0.1s linear 1.5s;
    animation-fill-mode:forwards;
}
.container_expand > .title_container >  .base_box >.arrows_conatiner> svg:first-child >path:nth-child(3){
    animation:svganimation1 0.1s linear 2.1s;
    animation-fill-mode:forwards;
}
.container_expand > .title_container >  .base_box >.arrows_conatiner> img{
    opacity:1;
    transition: all 0.2s linear 2.1s;
}
.container_expand >.title_container >  .base_box >.arrows_conatiner> svg:last-child >path:first-child{
    animation:svganimation 0.6s ease-in-out 2.3s;
    animation-fill-mode:forwards;
}
.container_expand > .title_container >  .base_box >.arrows_conatiner> svg:last-child >path:nth-child(2){
    
    animation:svganimation1 0.1s linear 2.3s;
    animation-fill-mode:forwards;
}


@keyframes svganimation {
    to{
        stroke-dashoffset: 0;
    }
}
@keyframes svganimation1 {
    to{
       opacity: 1;
    }
}


/* .container_default{} */

h1,
h2,
h3,
h4{
    color:var(--main-light-100);
}

</style>
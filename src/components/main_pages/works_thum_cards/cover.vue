<template>

    <div class="container container_expand"  ref="el" >
        <div class="flex_container" :style="{height:flex_height}">
            <div class="el_conatiner" >
                <img class="title_container" src="../../../assets/thum_cards/intro.svg" alt="">
            </div>
        </div>
        
        <div class="background_holder" >
                <div class="top_cover"></div>
                <div class="top_cover_2"></div>
                <Background_Element/>
        </div>
        
    </div>
    
</template>

<script setup>
//hooks引入
import{handle_el_container_size} from '../../../hooks/use_works_slideshow_handle.js'
import Background_Element from "../../comps/background_elements.vue"
//依赖引入
import {computed,ref} from 'vue'

import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()



    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    //使用屏幕的真实高度
    let cover_height = '60vh'//
    let flex_height = '100%'



</script>

<style scoped>

.container{    
    overflow: hidden;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    position:relative;
    width:100vw;
    /* max-height:650px; */
    background: linear-gradient(0deg, #000 0%, #0B7BE2 100%);
}
.top_cover{    
    overflow: hidden;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    position:absolute;
    left:0;
    top:0;
    z-index: 1;
    width:100%;
    height:100%;
    background: linear-gradient(0deg, #000 0%, #00000000 100%);
}


.flex_container{
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    width:100vw;
}
.background_holder{
    position:absolute;
    left:0;
    bottom:0;
    z-index: 0;
    width:100%;
    height:100%;
    
}

.el_conatiner{
    position:relative;
    max-width: 700px;
    width:70%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    /* background-color: green; */
}

.title_container{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin:45% 0px 10px 0px;
    z-index: 1;


}

h1,
h2,
h3,
h4{
    color:var(--main-light-100);
}
h3{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color:rgba(255, 255, 255, 0.466);
}
a{
    text-decoration: underline;
    cursor: pointer;
    color:inherit;
}
a:hover{
    color:#FFD600;
}

@keyframes ani_font2 {
    from{transform:translateY(0%);}
    to{transform:translateY(102%);}
}

.arrow_animation{
    position: absolute;
    bottom:5%;
    margin:0 auto;
    left:0;
    right:0;
    width:200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:4px;
    overflow: hidden;
    transform: translateY(200%);
    opacity: 0;
}
h3{
    font-size: 15px;
    font-weight: 300;
}
.animation_box{
    width:80px;
    border-radius: 30px;
    height:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    opacity: 0.8;

    
}
.animation_box > img{
    width:40px;
    position:relative;
    animation:arrow linear 1.5s infinite;
}
.bobo_con {
width:60%;
height: 100%;
display: flex;
justify-content: center;
align-items: end;
position: relative;
overflow: hidden;
margin-bottom: 2%;
}

.img3 {
width: 50%;
z-index: 1;
transform-origin:center bottom;
transform: translateY(120%) scale(0.7,1.3);
}

.bobo_back {
background-color: white; /* 确保这也是白色 */
width: 100%;
height: 76.8%;
position: absolute;
bottom: 0;
left: 0;
z-index: 0;
border-radius: 20px;
overflow: hidden;
transform: translateY(120%);
}
.code_box{
    position: absolute;
    bottom:0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform:translateY(-8vh);
}

@keyframes arrow {
    0%{top:-40px;opacity: 0;}
    50%{opacity: 1;}
    100%{top:40px;opacity: 0;}
}


@media (max-width: 1300px){

    .title_container{
        margin:30% 0px 0px 0px;
    }
}

@media (max-width: 800px){
    h3{
        font-size: 15px;
        font-weight: 300;
    }
    .title_container{
        margin:200px 0px 0px 0px;
    }
}
</style>
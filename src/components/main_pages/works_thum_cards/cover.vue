<template>

    <div class="container container_expand" :style="{height:cover_height}" ref="el" >
        <div class="flex_container" :style="{height:flex_height}">
            <div class="el_conatiner" >
                <div class="title_container">
                    <div class="box box1">
                        <img ref="img123" class="imgs" src="../../../assets/thum_cards/hi.svg" alt="">
                    </div>
                    <div class="box box2">
                        <img ref="img2" class="imgs" src="../../../assets/thum_cards/im.svg" alt="">
                    </div>
                    <div class="box box3">
                        <img ref="img3" class="imgs" src="../../../assets/thum_cards/design.svg" alt="">
                    </div>
                    <div style="width:1px;height:5%;"></div>
                </div>
            
            </div>
            <!-- <div ref="arrow_box" class="arrow_animation">
                <h3>Explore More</h3>
                <div class="animation_box">
                    <img src="../../../assets/thum_cards/arrow.svg" alt="">
                </div>
            </div> -->
        </div>
        
        <div class="background_holder" >
                <div class="top_cover"></div>
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
    background: linear-gradient(0deg, #000 30%, #0B7BE2 100%);
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
    background: linear-gradient(0deg, #000 0%, #00000000 50%);
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
    height:100vh;
    
}

.el_conatiner{
    position:relative;
    max-width: 800px;
    transform: translateY(50px);
    width: 70%;
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
    
    margin:0 auto;
    z-index: 1;

}
.box{
    display: flex;
    overflow: hidden;
    position:relative;
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
    width:40%;
    margin-top:1%;
}
.box4{
    width:30%;
}
.img5_con{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.breakline{
    width:100%;
    height:0.5px;
    background-color: rgba(255, 255, 255, 0.292);
    margin:16px 0;
    transform: scaleX(0);
}
.imgs{
    width: 100%;
    position:relative;
    left:0;
    /* transform: translateY(100%); */
}


h1,
h2,
h3,
h4{
    color:var(--main-light-100);
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

@keyframes arrow {
    0%{top:-40px;opacity: 0;}
    50%{opacity: 1;}
    100%{top:40px;opacity: 0;}
}



@media (max-width: 800px){
    h3{
        font-size: 15px;
        font-weight: 300;
    }
    .arrow_animation{
        gap:16px;
    }
    .animation_box{
        width:80px;
        height:40px;
    }
    .animation_box > img{
        width:40px;
    }
    .box4{
        width:50%;
    }
}
</style>
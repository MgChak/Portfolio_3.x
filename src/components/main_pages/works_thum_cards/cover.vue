<template>

    <div class="container container_expand"  ref="el" >
        <div class="shadowing"></div>
        <div class="flex_container" :style="{height:flex_height}" >
            <div class="el_conatiner"  ref="img" >
                <img class="title_container" src="../../../assets/thum_cards/intro.svg" alt="">
            </div>
        </div>
        <code_c/>
        <div class="background_holder" >
                <div class="top_cover"></div>
                <Bubble_animation :img_width= img_width.width />
        </div>
        
    </div>
    
</template>

<script setup>
//hooks引入
import{handle_el_container_size} from '../../../hooks/use_works_slideshow_handle.js'

//依赖引入
import {computed,ref} from 'vue'
import code_c from '../works_thum_cards/code_c.vue'

import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
import Bubble_animation from '../../comps/bubble_animation.vue'
const store = useStore()



    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    const img = ref(null)
    const img_width = useElementSize(img)


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
    background-color: #171718;
    
}

.shadowing{
    width:100%;
    height:20px;
    background-color: rgb(0, 0, 0);
    position:absolute;
    z-index: 5;
    top:100%;
    box-shadow: 0px -4px 6px 0px rgb(0 0 0 / 24%), 0px -10px 40px 0px rgb(0 0 0 / 24%)
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
.top_cover{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    background-color: rgba(10, 10, 10, 0.92);
    z-index: 1;
}
.el_conatiner{
    position:relative;
    padding-top:100px;
    max-width: 750px;
    width:70%;
    height:600px;
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
    margin:35% 0px 35% 0px;
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


h3{
    font-size: 15px;
    font-weight: 300;
}



@media (max-width: 1300px){


}

@media (max-width: 800px){
    h3{
        font-size: 15px;
        font-weight: 300;
    }

    .el_conatiner{

    height:400px;

}
}
@media (max-width: 500px){

    .el_conatiner{

    height:300px;

}

}
</style>
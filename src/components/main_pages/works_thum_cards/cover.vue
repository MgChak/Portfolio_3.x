<template>

    <div class="container container_expand" :style="{height:cover_height}" ref="el" >
        <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">

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
            </div>
        </div>

        <div ref="arrow_box" class="arrow_animation">
            <div class="animation_box">
                <img src="../../../assets/icons/arrow_downward.svg" alt="">
            </div>
            <h3>TO MY PROJECTS</h3>
        </div>
        <div class="background_holder" >
            <Background_Element/>
        </div>
    </div>
    
</template>

<script setup>
//hooks引入
import{handle_el_container_size} from '../../../hooks/use_works_slideshow_handle.js'
import Background_Element from "../../comps/background_elements.vue"
//依赖引入
import {computed,onMounted,ref, watchEffect} from 'vue'

import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
import { CustomEase } from "gsap/CustomEase";
import gsap from 'gsap'
const store = useStore()
gsap.registerPlugin(CustomEase);
    
    let name = 'LETS_GO'


    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    //使用屏幕的真实高度
    let cover_height = computed(()=>store.page_height +'px')


    //动画
    const img123 = ref(null)
        const img2 = ref(null)
        const img3 = ref(null)
        const arrow_box = ref(null)
    

    onMounted(()=>{
        

    const stop = watchEffect(()=>{
        console.log("执行")
        if(store.cover_animation){
            stop()
            store.cover_animation = false
            gsap.to(img123.value,{
                yPercent:-100,
                duration:0.6,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            })
            gsap.to(img2.value,{
                yPercent:-100,
                duration:0.6,
                ease: CustomEase.create("custom", store.animation_ease_c1),
                delay:0.3,
            })
            gsap.to(img3.value,{
                yPercent:-100,
                duration:0.6,
                ease: CustomEase.create("custom", store.animation_ease_c1),
                delay:0.6,
            })
            gsap.to(arrow_box.value,{
                yPercent:-200,
                duration:0.6,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            })
           
            
            
            
        }
    })
        

    })

    


</script>

<style scoped>
.container{    
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
    z-index: -1;
    width:100%;
    height:100%;
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
    width:40%
}
.imgs{
    width: 100%;
    position:relative;
    left:0;
    transform: translateY(100%);
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
    bottom:5vh;
    margin:0 auto;
    left:0;
    right:0;
    width:200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:24px;
    overflow: hidden;
    transform: translateY(200%);
}
h3{
    font-size: 20px;
    font-weight: 300;
}
.animation_box{
    width:30px;
    border: 2px solid white;
    border-radius: 30px;
    height:60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    opacity: 0.8;

    
}
.animation_box > img{
    width:20px;
    position:relative;
    animation:arrow linear 1.5s infinite;
}

@keyframes arrow {
    from{top:-40px}
    to{top:60px}
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
        width:20px;
        height:40px;
    }
    .animation_box > img{
        width:13px;
    }
}
</style>
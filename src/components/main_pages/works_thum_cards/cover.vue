<template>

    <div class="container container_expand" :style="{height:cover_height}" ref="el" >
        <div class="flex_container" :style="{height:flex_height}">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">
                <div class="title_container">
                    <div class="bobo_con">
                        <img ref="img4" class="imgs img3" src="../../../assets/thum_cards/bobo.svg" alt="">   
                        <div ref="con" class="bobo_back"></div>
                    </div>
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
                <h3>Explore More</h3>
            </div>
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
    


    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    //使用屏幕的真实高度
    let cover_height = '100vh'//
    let flex_height = computed(()=>store.page_height +'px')


    //动画
    const img123 = ref(null)
        const img2 = ref(null)
        const img3 = ref(null)
        const arrow_box = ref(null)
        const img4 = ref(null)
        const con = ref(null)

        var ani="M0,0 C0.39,0 0.589,1 1,1 "
    var time = 0.2
    

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
                opacity:1,
                duration:0.6,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            })
            gsap.to(con.value,{
                    yPercent:-120,
                    duration:0.3,
                    ease: CustomEase.create("custom", ani),
                    delay:0.6,
            })

            var tl = gsap.timeline()
            tl.to(img4.value,{
                    yPercent:-118,
                    scaleY:0.7,
                    scaleX:1.3,
                    duration:0.3,
                    ease: CustomEase.create("custom", ani),
                    delay:0.6,
                })
                tl.to(img4.value,{
                    scaleY:1.2,
                    scaleX:0.8,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img4.value,{
                    scaleY:0.8,
                    scaleX:1.2,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img4.value,{
                    scaleY:1.1,
                    scaleX:0.9,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img4.value,{
                    scaleY:0.95,
                    scaleX:1.05,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img4.value,{
                    scaleY:1.02,
                    scaleX:0.98,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img4.value,{
                    scaleY:1,
                    scaleX:1,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
           
            
            
            
        }
    })
        

    })

    


</script>

<style scoped>
.container{    
    overflow: hidden;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    position:relative;
    width:100vw;

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
    max-width: 800px;
    top:30%;
    left: 0;
    right:0;
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
    bottom:5%;
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
    opacity: 0;
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
<template>

    <div class="container container_expand" :style="{height:cover_height}" ref="el" >
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
        </div>

        <div class="arrow_animation">
            <div class="animation_box">
                <img src="../../../assets/icons/arrow_downward.svg" alt="">
            </div>
            <h3>TO MY PROJECTS</h3>
        </div>
        <div class="background_anim_holder" ref="background" :style="handle_background_size"></div>
    </div>
    
</template>

<script setup>
//hooks引入
import{handle_img_position_change,handle_el_container_size} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,onMounted,ref} from 'vue'
import { gsap } from 'gsap/gsap-core'
import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()
    
    let name = 'LETS_GO'

    // //计算内容物偏移的位置
    // let img_position = computed(()=>handle_img_position_change(card_id))

    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    //使用屏幕的真实高度
    let cover_height = computed(()=>store.page_height +'px')

    //计算背景应有的尺寸
    let handle_background_size = computed(()=>{
        var w
        var h
        var b
        if (store.page_height <= store.page_width){
            w = store.page_width*2
            h = store.page_width
            b = w/4
        }else {
            w = store.page_height*2
            h = store.page_height*2
            b = store.page_height
        }
        return {
            width:w+"px",
            height:h+"px",
            ["background-size"]:b+"px"
        }
    })


    //动画

    let background = ref(null)


    onMounted(()=>{
        gsap.to(background.value,{
            transformOrigin: "top,left",
            xPercent:-50,
            yPercent:25,
            duration:30,
            repeat:-1,
            ease:"none",
        })
    })

   

</script>

<style scoped>
.container{
    /* background:linear-gradient(360deg, #253238 -3.36%, #000000 49.04%); */
    
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    width:100vw;

}
.background_anim_holder{
    background-image: url("../../../assets/main_elements.svg");
    position:absolute;
    left:0;
    bottom:0;
    z-index: -1;
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

.container_expand > .el_conatiner >.title_container > .box1 > img{
    animation: ani_font 0.6s var(--animation-slow-cubic) forwards;
}
.container_expand > .el_conatiner >.title_container > .box2 > img{
    animation: ani_font 0.6s var(--animation-slow-cubic) 0.3s forwards;
}
.container_expand > .el_conatiner >.title_container > .box3 > img{
    animation: ani_font 0.6s var(--animation-slow-cubic) 0.6s forwards;
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
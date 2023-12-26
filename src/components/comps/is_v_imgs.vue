<template>

    <div class="background_container" ref="target">
        <div class="img_container" >
            <div ref="img" class="img">
                <slot ></slot>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { useIntersectionObserver,useElementSize } from '@vueuse/core'
import useStore from '../../store/index.js'
import { ref,watchPostEffect,computed } from 'vue'
import { gsap } from 'gsap/gsap-core'
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
const store = useStore()


    const target = ref(null)
    const is_show = ref(false)

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        is_show.value = isIntersecting
      },{
        threshold:0.4
      }
    )
    const { width, height } = useElementSize(target)

    let img = ref(null)

    let img_animation = ()=>{

        gsap.to(img.value,{
            yPercent:-20,
            opacity:1,
            duration: 0.6,
            ease: CustomEase.create("custom", store.animation_ease_c1),
        })
        console.log("动画运行")
    }
    
    const stop_1 = watchPostEffect(()=>{
        if(is_show.value){
            img_animation()
            stop()
            stop_1()
        }
    })



</script>

<style scoped>
.background_container{
    width:100%;
    position:relative;
}

/* .background_container::before{
    content:'';
    position: absolute;
    width: 100%;
    height: 10%;
    left: 0px;
    top: 10%;

    background: rgba(0, 255, 117, 0.5);
    filter: blur(163px);
    border-radius: 158.5px;

    opacity:1;
    
} */

.img_container{
    width:100%;

}
.img{
    opacity: 0;
    transform: translateY(20%);
}


</style>
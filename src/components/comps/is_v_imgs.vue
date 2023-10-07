<template>

    <div class="background_container" ref="target">
        <div class="img_container" >
            <div  :style = img_show >
                <slot ></slot>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { useIntersectionObserver,useElementSize } from '@vueuse/core'
import { ref,watchPostEffect,computed } from 'vue'

    const target = ref(null)
    const is_show = ref(false)

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        is_show.value = isIntersecting
      },{
        threshold:0.2
      }
    )
    const { width, height } = useElementSize(target)
    
    watchPostEffect(()=>{
        if(is_show.value){
            stop()
        }
    })

    let img_show = computed(()=>{
        if(!is_show.value){
            return {top: height.value * -1 +"px"}
        }else{
            return {top:'0px'}
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
    overflow: hidden;

    
}
.img_container > div{
    position:relative;

    left:0;
    top:-100%;
    transition:top 0.6s var(--animation-slow-cubic);
}


</style>
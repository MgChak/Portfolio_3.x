<template>

    <div class="background_container" ref="target">
        <div class="img_container" >
            <div  :class = '{show:is_show}' class="hide">
                <slot ></slot>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

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
    /* will-change: transform; */
}
.hide{
    /* opacity: 0; */
    transform: translateY(-100%);
    transition:transform 0.6s;
}
.show{
    /* opacity: 1; */
    transform: translateY(0);
    transition:transform 0.6s var(--animation-slow-cubic);

}

</style>
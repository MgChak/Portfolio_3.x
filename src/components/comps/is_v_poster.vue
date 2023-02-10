<template>
    <div class="img_container hide" ref="target" :class = '{show:is_show}'>
        <div class = "img_size" >
            <slot ></slot>
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
      },
    )

</script>

<style scoped>
.img_container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.hide{
    opacity: 0;
    transition:all 0.6s;
    overflow: hidden;
    width: 0;
}
.show{
    opacity: 1;
    width: 100%;
    transition:all 0.6s;
}
.img_size{
    width:100vw;
}

</style>
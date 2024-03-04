<template>
   <div class="background_anim_holder" ref="background" :style="handle_background_size">
        </div>
   
   
</template>

<script setup>
//依赖引入
import {computed,onMounted,ref} from 'vue'
import useStore from '../../store/index'
const store = useStore()

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

    // onMounted(()=>{
    //     gsap.to(background.value,{
    //         transformOrigin: "top,left",
    //         xPercent:-50,
    //         yPercent:25,
    //         duration:30,
    //         repeat:-1,
    //         ease:"none",
    //     })
    // })



</script>

<style scoped>

.background_anim_holder{
    background-image: url("../../assets/main_elements.svg");
    position:absolute;
    left:0;
    bottom:0;
    z-index: -1;
    transform-origin: "top,left";
    animation: ani 10s forwards;
}


@keyframes ani {
         from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(-50%, 25%);
        }
    
}
</style>
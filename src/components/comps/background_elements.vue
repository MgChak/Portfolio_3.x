<template>
   <div class="background_anim_holder"  :style="handle_background_size">
        </div>
   
   
</template>

<script setup>
//依赖引入
import {computed} from 'vue'
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
            ["background-size"]:b*0.5+"px"
        }
    })


</script>

<style scoped>

.background_anim_holder{
    background-image: url("../../assets/main_elements.svg");
    position:absolute;
    left:0;
    bottom:0;
    z-index: -1;
    transform-origin: "top,left";
    animation: ani 80s infinite linear;
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
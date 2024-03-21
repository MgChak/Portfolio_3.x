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
        
        var b = store.page_width
        
        if (b >= 1400){
            b = 1400
        }else if (b <=900){
            b = 900
        }





        return {
            width:'100%',
            height:'100%',
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
    /* animation: ani 100s infinite linear; */
    opacity: 1;
}
/* .background_anim_holder::before{
    content:'';
    position: absolute;
    width:100%;
    height:100%;
    background:linear-gradient(0deg, #0b7ae2 10%,#0b7ae2bf 30%,#0b7ae290 55%, #0b7ae200 80%);
} */


@keyframes ani {
         from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(-50%, 25%);
        }
    
}
</style>
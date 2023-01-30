<template>

    <div class="card_container" :style="card_conatiner_size"> 
        <div class="container background" :style="card_size" :class="[card_class,card_z_index]" >
            <img src="../../../assets/thum_cards/letsgo_large_p.png" class="largephone" alt="">
            <img src="../../../assets/thum_cards/letsgo_small_p.png" class="smallphone" alt="">
        </div>
    </div>
    
</template>

<script setup>
//hooks引入
import{handle_style_change,handle_class_change,handle_z_index_change,handle_view_window_resize} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()

    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = 1
    
    let card_size = computed(()=>handle_style_change(card_id))

    let card_class = computed(()=>handle_class_change(card_id))

    let card_z_index = computed(()=>handle_z_index_change(card_id))

    let card_conatiner_size = computed(()=>handle_view_window_resize(card_id))

</script>

<style scoped>
.container{
    background:rgb(88, 144, 77);
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin:0;
}
.container_z_index_back{
    z-index: -3;
}
.container_z_index_front{
    z-index:initial;
}
.container_expand{
    z-index:-3;
}
.container_default{

}
.card_container{
    position:relative;
    left:0;
    top:0;
}



.background{
    background: linear-gradient(90deg, #2D3527 0%, #3F4F33 49.65%, #2D3527 100%);
}
.container_default> .largephone {
    position: absolute;
    bottom:0;
    left:5%;
    width:85%;
    z-index:-1;
    transition:all 0.3s ease-in;
}
.container_default> .smallphone {
    position: absolute;
    bottom:10%;
    left:30%;
    width:50%;
    z-index:-1;
    transition:all 0.3s ease-in;
}
.container_expand > .largephone {
    position: absolute;
    bottom:0;
    left:0;
    width:93%;
    z-index:-1;
    transition:var(--animation-slow);
}
.container_expand > .smallphone {
    position: absolute;
    bottom:0%;
    left:28%;
    width:65%;
    z-index:-1;
    transition:var(--animation-slow);
}
</style>
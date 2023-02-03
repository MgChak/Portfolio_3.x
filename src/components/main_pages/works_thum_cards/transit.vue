<template>

        <div class="container background" :style="[card_size,card_position]" :class="[card_class,card_z_index]" >
            <img :style = "img_position" src="../../../assets/thum_cards/transit_hand.png" alt="">
        </div>
    
</template>

<script setup>
//hooks引入
import{handle_style_change,handle_class_change,handle_z_index_change,handle_card_position_change,handle_img_position_change} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()

    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = 2

    let card_size = computed(()=>handle_style_change(card_id))

    let card_class = computed(()=>handle_class_change(card_id))

    let card_z_index = computed(()=>handle_z_index_change(card_id))

    let card_position = computed(()=>handle_card_position_change(card_id))

    let img_position = computed(()=>handle_img_position_change(card_id))


</script>

<style scoped>
.container{
   
}
.container_z_index_back{
    z-index:0;
}
.container_z_index_front{
    z-index:1;
}
.container_expand{


}
.container_default{

}

.background{
    background-image: url('../../../assets/thum_cards/transit_background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.container_default> img {
    position: absolute;
    bottom:0;
    left:20%;
    width:60%;
    z-index:-1;
    transition:all 0.3s ease-in;
}
.container_expand > img {
    position: absolute;
    bottom:0;
    left:6%;
    width:85%;
    z-index:-1;
    transition:var(--animation-slow);
}



</style>
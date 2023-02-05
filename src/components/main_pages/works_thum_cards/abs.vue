<template>
        <div class="container" :style="[card_size,card_position]" :class="[card_class,card_z_index]" >
</div>
    
</template>

<script setup>
//hooks引入

//依赖引入
import {computed} from 'vue'
import useStore from '../../../store/index.js'
const store = useStore()

    
    //监听对比需要展开的卡片id于自身id，并改变css
    let card_id = 3

    let card_size = computed(()=>store.card_size_status[card_id].card_style)
    let card_class = computed(()=>store.card_size_status[card_id].card_class)
    let card_z_index = computed(()=>store.card_size_status[card_id].card_index)
    let card_position = computed(()=>{
        return {
        transform:`${store.card_size_status[card_id].card_move.t_scale} ${store.card_size_status[card_id].card_move.t_translate}`,
        transition:store.card_size_status[card_id].card_move.t_transition
        }
    })
    // let img_position = computed(()=>handle_img_position_change(card_id))



    


</script>

<style scoped>
.container{
    background:rgb(144, 77, 142);
    will-change: z-index;
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
</style>
<template>

    <div class="container">
        <div class="view_window" :style="card_size">
            <div class="list_conatiner">
                <div class="card_container"> <abs/> </div>
                <div class="card_container"> <cover/> </div>
                <div class="card_container"> <letsgo/> </div>
                <div class="card_container"> <transit/> </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
//组件引入
import abs from'./works_thum_cards/abs.vue'
import cover from'./works_thum_cards/cover.vue'
import letsgo from'./works_thum_cards/letsgo.vue'
import transit from'./works_thum_cards/transit.vue'
//依赖引入
import {computed} from 'vue'
import useStore from '../../store/index.js'
const store = useStore()


    //从库中提取已经计算好的卡片尺寸_给视窗使用
    let card_size = computed(()=>{
        return {
            width:store.get_thumcard_width,
            height:store.get_thumcard_height
        }
    })




</script>

<style scoped>
.container{
    width:100%;
    height:100vh;

    display:flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
}
.view_window{
    background: green;
}
.list_conatiner{
    display:flex;
    align-items: center;
    gap:24px;
}

</style>
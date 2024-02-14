<template>
    <div class="main_container" v-if="props.infor_obj.type=='main'">
        <div v-if = "store.page_width>=750" class="list_container" :style="{transform : 'translateX('+ store.bar_move +'%)'}" ref="el">
            <div v-for = "i in list_length" class="item_container">
                <h1>{{ props.infor_obj.text}}</h1>
                <div class="sub_container">
                    <h2>{{ props.infor_obj.bio }}</h2>
                    <div class="time_container">
                        <!-- <h2>{{ props.infor_obj.time }}</h2> -->
                        <div class="time_line"></div>
                    </div>
                </div> 
            </div>
        </div>
        <div v-if = "store.page_width < 750" class="list_container" :style="{width : 100+'%'}">
            <div class="item_container">
                <h1>{{ props.infor_obj.text}}</h1>
                <div class="time_line"></div>
                <div class="sub_container">
                    <h2>{{ props.infor_obj.bio }}</h2>
                    <div class="time_container">
                        <!-- <h2>{{ props.infor_obj.time }}</h2> -->
                        <div class="time_line"></div>
                    </div>
                </div> 
            </div>
        </div>
        
    </div>
    <div class="main_container_sub" v-if="props.infor_obj.type=='sub' && store.page_width>=750">
        <div  class="list_container_sub" :style="{right : bar_move +'%'}" ref="el">
            <div v-for = "i in list_length" class="item_container_sub">
                <h3>{{ props.infor_obj.text}}</h3>
                <h3>{{ props.infor_obj.bio }}</h3>
                <!-- <h3>{{ props.infor_obj.time }}</h3> -->
                <div class="time_line_sub"></div>
                
            </div>
        </div>
        
    </div>
    
</template>

<script setup>
import { computed, ref,watchPostEffect} from 'vue';
import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()
    //引入props/接收数据
    let props = defineProps(['infor_obj'])

    //列表长度
    let list_length = ref(3)

    //动画
    let scroll_animation = ref('var(--animation-slow)')

    //获取页面宽度和修改列表长度
    const el = ref(null)
    const { width } = useElementSize(el)
    watchPostEffect(()=>{
        if (width.value<store.page_width*2){
            list_length.value = list_length.value + 5
        }
    })

</script>

<style scoped>
.main_container{
    width:100%;
    position: relative;
    display: flex;
    overflow: hidden;
}
.main_container_sub{
    width:100%;
    height:40px;
    position: relative;
    display: flex;
    overflow: hidden;
}
.list_container{
    display: flex;
    gap:40px;
    position:relative;
    transition:var(--animation-slow);
}
.list_container_sub{
    display: flex;
    gap:40px;
    position:absolute;
    transition:var(--animation-slow);
    opacity: 0.3;
}
.item_container{
    display: flex;
    align-items: center;
    gap:16px;
    flex:none;
}
.item_container_sub{
    display: flex;
    align-items: center;
    gap:16px;
    flex:none;
}
.sub_container{
    display: flex;
    flex-direction: column;
    flex:none;
    gap:5px;
}
.time_container{
    display: flex;
    gap:16px;
    align-items: center;
}
.time_line{
    flex:1;
    background-color: var(--main-light-100);
    height:18px;
}
.time_line_sub{
    width:50px;
    flex:1;
    background-color: var(--main-light-100);
    height:20px;
}
h1{
    font-size: 56px;
    line-height: 80px;
    font-weight: 600;
    text-transform: uppercase;
    color:var(--main-light-100);
    flex:none;
}
h2{
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color:var(--main-light-100);
    line-height: 20px;
    flex:none;
}
h3{
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    color:var(--main-light-100);
    flex:none;
}

@media (max-width: 1280px) {
    h1{
    font-size: 50px;
    line-height: 80px;
    font-weight: 600;
    text-transform: uppercase;
    color:var(--main-light-100);
    flex:none;
}
    h2{
        font-size: 18px;
        font-weight: 400;
        text-transform: uppercase;
        color:var(--main-light-100);
        flex:none;
    }
}

@media (max-width: 900px) {
    h1{
    font-size: 40px;
    line-height: 40px;
    font-weight: 600;
    text-transform: uppercase;
    color:var(--main-light-100);
    flex:none;
}
    h2{
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        color:var(--main-light-100);
        flex:none;
    }
    .item_container{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap:0px;
        flex:none;
    }
    .time_line{
        flex:1;
        background-color: var(--main-light-100);
        height:15px;
    }
}
@media (max-width: 750px) {
    h1{
        font-size: 40px;
        line-height: 40px;
        font-weight: 600;
        text-transform: uppercase;
        color:var(--main-light-100);
        flex:none;
    }
    h2{
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        color:var(--main-light-100);
        flex:none;
    }
    .item_container{
        width:90%;
        margin:0 auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap:0px;
    }
    .time_line{
        flex:1;
        background-color: var(--main-light-100);
        height:15px;
    }
    
}
</style>
<template>
    <div class="main_container" :style="[bar_position,bar_width]">
        <h1>{{ render_infor.name}}</h1>
        <div class="sub_container">
            <h2>{{ render_infor.bio }}</h2>
            <h2>{{ render_infor.time }}</h2>
        </div>
    </div>
    
</template>

<script setup>
import { computed, reactive } from 'vue';
import useStore from '../../../store/index.js'
const store = useStore()
    let render_infor = computed(()=>store.index_array[store.infor_show_witch])
    let bar_position = computed(()=>{
        if(store.infor_bar_status && store.page_on != 0){
            return {bottom:'80px',transition:'var(--animation-slow)'}
        }else{
            return {bottom:'-120px',transition:'all 0.3s ease-in'}
        }
    })
    
    let bar_width = computed(()=>{
        return {width:store.page_width*0.75+'px'}
        })
</script>

<style scoped>
.main_container{
    height:120px;
    background:var(--color-glass-dark);
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    backdrop-filter: blur(4px); 
    -webkit-backdrop-filter: blur(4px);
    border-radius: 8px;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    margin: 0px auto;
    color:var(--main-light-100);
    display:flex;
    justify-content: space-between;
    align-items: center;
    cursor: none;
}
.sub_container{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin:24px 0;
}
h1{
    font-size: 40px;
    font-weight: 400;
    margin-left:60px;
    text-transform: uppercase;
}
h2{
    font-size: 20px;
    font-weight: 400;
    margin-right:60px;
    text-transform: uppercase;
}
</style>
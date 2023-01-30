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


    let render_infor = computed(()=>infor_array[store.infor_show_witch])

    let infor_array = [
        {
            name:'COVER',
            bio:'TRAVEL APP - UX/UI STUDY CASE - SOLO DESIGNER',
            time:'2022 spring'
        },{
            name:'lets go',
            bio:'TRAVEL APP - UX/UI STUDY CASE - SOLO DESIGNER',
            time:'2022 spring'
        },{
            name:'TRANSIT',
            bio:'TRAVEL APP - UX/UI STUDY CASE - SOLO DESIGNER',
            time:'2022 spring'
        },{
            name:'POSITION',
            bio:'TRAVEL APP - UX/UI STUDY CASE - SOLO DESIGNER',
            time:'2022 spring'
        }
    ]

    let bar_position = computed(()=>{
        if(store.infor_bar_status){
            return {bottom:'40px',transition:'var(--animation-slow)'}
        }else{
            return {bottom:'-64px',transition:'all 0.3s ease-in'}
        }
    })
    
    let bar_width = computed(()=>{
        return {width:store.get_thumcard_container_width_number*1.8+'px'}
        })


</script>

<style scoped>
.main_container{
    height:64px;
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
}
.sub_container{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin:24px 0;
}
h1{
    font-size: 24px;
    font-weight: 400;
    margin-left:24px;
    text-transform: uppercase;

}
h2{
    font-size: 12px;
    font-weight: 400;
    margin-right:24px;
    text-transform: uppercase;
}

</style>
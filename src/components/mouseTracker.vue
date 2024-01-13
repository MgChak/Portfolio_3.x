<template>

<div 
    class="mouse_tracker_container" 
    :style="tracker_position"
    :class = "tracker_status"
>

    <div class="background">
        
    </div>

</div>
    
</template>

<script setup>
//依赖引入
import {computed} from 'vue'
import useStore from '../store/index.js'
const store = useStore()

    //控制container移动
    //从库中（getter）取值鼠标坐标，赋值给container。
    let tracker_position = computed(()=>{ 
        return {
            left:store.get_mouse_position_x,
            top:store.get_mouse_position_y
        }
    })

    //根据库中的状态，赋予conatiner作为class name
    let tracker_status = computed(()=>store.tracker_status)



</script>

<style scoped>
.mouse_tracker_container{
    width:100px;
    height:100px;
    /* background:rgb(117, 133, 225); */
    opacity: 1;
    

    position:fixed;
    z-index:10;

    pointer-events: none;
    transform: translate(-50%,-50%);

    display: flex;
    justify-content: center;
    align-items: center;
}
.mouse_tracker_container > .background{
    width:100%;
    height:100%;
    border-radius: 50%;
    overflow: hidden;
    
    background:white;

    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow:0px 0px 14px 7px rgba(0,0,0,0.25);
    
}


.hidden > .background{
    width:0px;
    height:0px;
    opacity: 0;

    transition:all 0.3s ;
}



.view_project > .background{
    width:100%;
    height:100%;

    transition:all 0.3s ;
    
}
.view_project > .background::before{
    content: 'VIEW';
    font-size: 15px;
    color: black;
    font-weight: 700;
}


.next > .background,
.projects> .background{
    width:100%;
    height:100%;

    transition:all 0.3s ;
    
}
.next > .background::before{
    content: 'NEXT';
    font-size: 15px;
    color: black;
    font-weight: 700;
}
.projects > .background::before{
    content: 'WORKS';
    font-size: 15px;
    color: black;
    font-weight: 700;
}
.next > .background::after,
.projects> .background::after{
    content: '';
    background-image: url('../assets/icons/arrow_circle_right.svg');
    height:18px;
    width:18px;
    background-position: center;
    background-size:100%;
    background-repeat: no-repeat;
}


.pre > .background,
.cover > .background{
    width:100%;
    height:100%;

    transition:all 0.3s ;
    
}
.pre > .background::after{
    content: 'PREV';
    font-size: 15px;
    color: black;
    font-weight: 700;
}
.cover > .background::after{
    content: 'COVER';
    font-size: 15px;
    color: black;
    font-weight: 700;
}
.pre > .background::before,
.cover > .background::before{
    content: '';
    background-image: url('../assets/icons/arrow_circle_right.svg');
    transform: rotate(180deg);
    height:18px;
    width:18px;
    background-position: center;
    background-size:100%;
    background-repeat: no-repeat;
}
</style>
    
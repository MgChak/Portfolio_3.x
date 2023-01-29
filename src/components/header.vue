<template>
<div class="container">

    <div class="inner_container">

        <img src="../assets/logo/logo.svg" alt="" class="web_logo">

        <div class="nav_list_container">

            <div 
                class="nav_container" 
                v-for="n in nav_list" :key="n.id"
                @click="handle_nav_click(n.id,n.navto)"
            >

                <div class="dot_container">
                    
                    <div class="dot"></div>
                
                </div>

                <h1 class="nav_text">{{n.text}}</h1>

            </div>   

        </div> 

    </div>   

</div>

   

</template>

<script setup>
//依赖引入
import {useRouter} from 'vue-router'
import useStore from '../store/index.js'
const router = useRouter()
const store = useStore()

//逻辑

    //用户渲染导航列表的数据
    const nav_list = [
        {id:0,text:'Works',navto:'works'},
        {id:2,text:'Playground',navto:'playground'},
        {id:3,text:'About',navto:'about'},
        {id:4,text:'Resume',navto:''},
    ]

    let handle_nav_click = (id,navto) =>{
        if (id!==4){//id为3不触发路由，直接转跳google drive
            //触发路由
            console.log(id)
            router.push({
                name:navto
            })
        }else if(id == 4){
            window.open('http://chakshing.com/chak.pdf')
        }  
    }





</script>

<style scoped>
.container{
    background:rgb(87, 87, 87);
    width: 100%;
    height:64px;

    display:flex;
    justify-content: center;
    align-items: center;
    
}
.inner_container{
    width:var(--content-width);
    height:100%;

    display:flex;
    justify-content: space-between;
    align-items: center;
    
}
.nav_list_container{
    width:fit-content;
    height:fit-content;

    display:flex;
    justify-content: center;
    align-items: center;
    gap:24px;
}
.nav_container{
    width:fit-content;
    height:fit-content;

    display:flex;
    justify-content: center;
    align-items: center;
    gap:4px;

    cursor: pointer;
}

.dot_container{
    width:12px;
    height:12px;

    overflow:hidden;

    position:relative;
    left:0;
    top:0;
}

.dot{
    width:8px;
    height:8px;
    background: var(--main-light-100);
    border-radius: 8px;

    position:absolute;
    bottom:0;
    right:0;
    left:0;
    margin: 0 auto;
}

h1{
    color:var(--main-light-30);
    font-size:12px;
    font-weight: 400;
}

</style>
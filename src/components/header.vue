<template>
<div class="container" :style = "navbar_status">

    <div class="inner_container">

        <img src="../assets/logo/logo.svg" alt="" class="web_logo">

        <div class="nav_list_container">

            <!-- 根据path_now属性是否等于自身navto属性，决定是否绑定active class -->
            <div 
                class="nav_container" 
                v-for="n in nav_list" :key="n.id"
                @click="handle_nav_click(n.id,n.navto)"
                :class="{ active : n.navto==path_now }"
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
import {computed} from 'vue'
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

    //处理导航栏的点击事件
    let handle_nav_click = (id,navto) =>{
        if (id!==4){//id为3不触发路由，
            //触发路由
            router.push({
                name:navto
            })
        }else if(id == 4){//直接打开路径下的pdf
            window.open('http://chakshing.com/chak.pdf')
        }  
    }

    //取出响应式的路径数据。模板中，dot会根据根据这一参数决定是否绑定active class
    let path_now = computed(()=>store.path_now)

    //根据库中状态，相应navbar的开关
    let navbar_status = computed(()=>{
        if (store.is_navbar_open){
            return {top:'0px'}
        }else{
            return {top:'-80px'}
        }
    })


</script>

<style scoped>
.container{
    background:var(--color-glass-dark);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(9.5px); 
    -webkit-backdrop-filter: blur(9.5px);
    width: 100%;
    height:80px;

    display:flex;
    justify-content: center;
    align-items: center;

    position:fixed;
    left:0;

    z-index:1;

    transition:all 0.3s ease-out;    
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
    gap:2px;

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
    width:6px;
    height:6px;
    background: var(--main-light-100);
    border-radius: 8px;

    position:absolute;
    bottom:-6px;
    right:0;
    left:0;
    margin: auto;
    transition:all 0.3s;
}

h1{
    color:var(--main-light-30);
    font-size:15px;
    font-weight: 400;
    line-height: 12px;
    transition:all 0.3s ease-out;
}

.active > .dot_container >.dot{
    bottom:2px;
}
.active > h1{
    color:var(--main-light-100);
}

</style>
<template>
<div :style = "navbar_status_style" :class="navbar_status_class" @mouseover= "tracker_toggle('hidden')">

    <!-- 默认全功能导航 -->

    <div class="inner_container" v-if="store.navbar_status == 0">

        <img src="../assets/logo/logo.svg" alt="" class="web_logo">

        
        <div class="nav_list_container" >

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
    
    <!-- 文章内导航 -->
    <div class="inner_container" v-if="store.navbar_status == 1">

        <div class="back_conatiner" @click="handle_nav_click(0,'works')">
            <img src="../assets/icons/arrow_circle_left.svg" alt="" class="icon">
            <h3>Back to Index</h3>
        </div>

        <div class="nav_list_container" >

            <!-- 根据path_now属性是否等于自身navto属性，决定是否绑定active class -->
            <div 
                class="nav_container" 
                v-for="n in nav_list_in_article" :key="n.id"
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
//hook 引入
import{tracker_toggle} from '../hooks/use_mouse_tracker_toggle'
//依赖引入
import {computed} from 'vue'
import {useRouter} from 'vue-router'
import useStore from '../store/index.js'
const router = useRouter()
const store = useStore()

//逻辑

    //用户渲染导航列表的数据_默认
    const nav_list = [
        {id:0,text:'Works',navto:'works'},
        {id:1,text:'Playground',navto:'playground'},
        {id:2,text:'About',navto:'about'},
        {id:3,text:'Resume',navto:''},
    ]
    //用户渲染导航列表的数据_文章内
    const nav_list_in_article = [
        {id:1,text:'Playground',navto:'playground'},
        {id:2,text:'About',navto:'about'},
        {id:3,text:'Resume',navto:''},
    ]

    //处理导航栏的点击事件
    let handle_nav_click = (id,navto) =>{
        if (id!==3){//id为3不触发路由，
            //触发路由
            router.push({
                name:navto
            })
        }else if(id == 3){//直接打开路径下的pdf
            window.open('http://chakshing.com/chak.pdf')
        }  
    }

    //取出响应式的路径数据。模板中，dot会根据根据这一参数决定是否绑定active class
    let path_now = computed(()=>store.path_now)

    //根据库中状态，相应navbar的开关
    let navbar_status_style = computed(()=>{
        if (store.is_navbar_open){
            return {top:'0px',transition:'top 0.6s var(--animation-slow-cubic)'}
        }else{
            return {top:'-120px',transition:'all 0.3s ease-out'}
        }
    })


    //根据不同状态修改导航栏classname
    let navbar_status_class = computed(()=>{
        if(store.navbar_status == 0){
            return 'container'
        }else if(store.navbar_status == 1){
            return 'container_art'
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
    height:100px;

    display:flex;
    justify-content: center;
    align-items: center;

    margin:0 auto;

    position:fixed;
    left:0;
    right:0;

    z-index:1;

        
}
.container_art{
    background:var(--color-glass-dark);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(9.5px); 
    -webkit-backdrop-filter: blur(9.5px);
    width: 650px;
    height:80px;
    border-radius: 40px;

    margin:24px auto;

    display:flex;
    justify-content: center;
    align-items: center;

    position:fixed;
    left:0;
    right:0;

    z-index:1;

        
}

.inner_container{
    width:var(--content-width);
    height:100%;

    display:flex;
    justify-content: space-between;
    align-items: center;
    
}
.back_conatiner{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:4px;
    cursor: pointer;
    
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
h3{
    color:var(--main-light-100);
    font-size:15px;
    font-weight: 500;
    line-height: 12px;
    transition:all 0.3s ease-out;
}

</style>
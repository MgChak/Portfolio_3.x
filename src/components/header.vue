<template>
    <div :style = "navbar_status_style" :class="navbar_status_class" @mouseover= "handle_hover">
    
        <!-- 默认全功能导航 -->
    
        <div class="inner_container" v-if="store.navbar_status == 0">
    
            <img src="../assets/logo/logo2.svg" alt="" class="web_logo">
    
            
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

            <div class="nav_list_container_mv" @click = "handle_mv_menu_click">
                <img :src="icons"  alt="">
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

                            
            <div class="nav_list_container_mv"  @click = "handle_mv_menu_click">
                <img :src="icons" alt="">
            </div>
    
        </div>   
    
    </div>
    <!-- 收集导航折叠菜单 -->
    <div class="mv_nav_list_conatiner">
        <div class="mv_nav_list" :style="{right:mv_list_position}">
            <div class="mv_nav" v-for="n in nav_list" :key="n.id"
                    @click="handle_nav_click(n.id,n.navto)"
                    >

                    <div class="v_button button">
                    <h4>{{n.text}}</h4>
                    <div class="arrow_container">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9675 7.05293C12.2826 6.73785 12.2826 6.227 11.9675 5.91192L6.83296 0.777356C6.51788 0.462274 6.00703 0.462274 5.69195 0.777356C5.37687 1.09244 5.37687 1.60329 5.69195 1.91837L10.256 6.48242L5.69195 11.0465C5.37687 11.3616 5.37687 11.8724 5.69195 12.1875C6.00703 12.5026 6.51788 12.5026 6.83296 12.1875L11.9675 7.05293ZM0.101562 7.28924H11.397V5.6756H0.101562V7.28924Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    <div class="mv_nav_list_background" v-if = "is_mv_nav_open" @click = "handle_mv_menu_click"></div>   
    
    </template>
    
    <script setup>
    //hook 引入
    import{tracker_toggle} from '../hooks/use_mouse_tracker_toggle'
    //依赖引入
    import {computed,ref} from 'vue'
    import {useRouter} from 'vue-router'
    import useStore from '../store/index.js'
    //引入图标
    import close from '../assets/icons/close.svg'
    import menu from '../assets/icons/menu.svg'

    const router = useRouter()
    const store = useStore()


    let is_mv_nav_open = ref(false)
    //逻辑
        //用户渲染导航列表的数据_默认
        const nav_list = [
            {id:0,text:'Works',navto:'works'},
            // {id:1,text:'Playground',navto:'playground'},
            {id:2,text:'About',navto:'about'},
            {id:3,text:'Resume',navto:''},
        ]
        //用户渲染导航列表的数据_文章内
        const nav_list_in_article = [
            // {id:1,text:'Playground',navto:'playground'},
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

            is_mv_nav_open.value = false
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
        let handle_hover= ()=>{
            tracker_toggle('hidden')
            store.hover_id = undefined
        }





       

        let mv_list_position = computed(()=>{
            if (is_mv_nav_open.value){
                return '7.5%'
            }else {
                return '-100%'
            }
        })

        let handle_mv_menu_click = ()=>{
            is_mv_nav_open.value = !is_mv_nav_open.value 
        }

        let icons = computed(()=>{
            if(is_mv_nav_open.value){
                return close
            }else{
                return menu
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
        z-index:4;
            
    }
    .container_art{
        background:var(--color-glass-dark);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(9.5px); 
        -webkit-backdrop-filter: blur(9.5px);
        max-width: 650px;
        width:var(--content-width);
        height:80px;
        border-radius: 40px;
        margin:24px auto;
        display:flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        left:0;
        right:0;
        z-index:5;
            
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
    .mv_nav_list_background{
        width:100vw;
        height:100vh;
        display: none;
        background-color: rgba(0, 0, 0, 0.233);
        backdrop-filter: blur(9.5px);
        -webkit-backdrop-filter: blur(9.5px);
        position:fixed;
        left:0;
        top:0;
        z-index:3;
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
    .nav_list_container_mv{
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .mv_nav_list_conatiner{
        position:fixed;
        right:0;
        top:120px;
        width:100%;
        z-index: 5;
        display: none;
        flex-direction: column;
        gap:20px;
        align-items: end;
        pointer-events: none;
    }
    .mv_nav_list{
        display: flex;
        flex-direction: column;
        gap:20px;
        align-items: end;
        pointer-events: none;
        position:fixed;
        right:7.5%;
        transition:var(--animation-slow);
    }
    .mv_nav{
        display: flex;
        pointer-events: all;
    }
    .button{
        background:rgba(0, 0, 0, 0.475);
        display: flex;
        align-items: center;
        justify-content: end;
        gap:16px;
        padding:8px;
        border-radius: 50px;
        cursor: pointer;
        border: 1px solid #ffffff5c;
    }
    h4{
        font-size:20px;
        margin-left:24px;
        font-weight: 400;
        color:white;
    } 
    .arrow_container{
        width:50px;
        height:50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background:rgb(255, 255, 255);
        border-radius: 25px;
        
    }
@media (max-width: 1000px){
    .nav_list_container{
        display: none;
    }
    .nav_list_container_mv{
        display: flex;
    }
    .mv_nav_list_conatiner{
        display: flex;
    }
    .mv_nav_list_background{
        display: inline-block;
    }
}
    </style>
<template>
<div ref="outer_container" class="outer_container">
    <div v-if="store.navbar_status == 0" class="outer2_container container"  @mouseover= "handle_hover()">
    
        <!-- 默认全功能导航 -->
    
        <div class="inner_container" v-if="store.navbar_status == 0">
    
            <div class="logo_con">
            <DotLottieVue autoplay loop ref="playerRef" src="../../public/logo.lottie" class="web_logo_ani"/>
            <img src="../assets/logo/logo2.svg" alt="" class="web_logo_text">
            </div>
            <div class="nav_list_container" >
    
                <!-- 根据path_now属性是否等于自身navto属性，决定是否绑定active class -->
                <div 
                    class="nav_container" 
                    v-for="n in nav_list" :key="n.id"
                    @click="handle_nav_click(n.id,n.navto)"
                    @pointerover="handle_hover_1(1,$event)" 
                    @pointerleave="handle_hover_1(0,$event)"
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

    </div>
    <div class="inart_con" v-if="store.navbar_status == 1">

        <div  ref="con" class="outer3_container container_art" @mouseover= "handle_hover()">

            <div class="inner_container" v-if="store.navbar_status == 1">

                <div class="back_conatiner" @click="handle_nav_click(0,'works')"
                    >
                    <div>
                        <img src="../assets/icons/arrow_back.svg" alt="" class="icon">
                    </div>
                    <h3>Works</h3>
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
        <div ref="bac" class="backtotop" 
            @click="handle_back_to_top()" 
            @pointerover="handle_hover_2(1,$event)" 
            @pointerleave="handle_hover_2(0,$event)"
        >
            <img ref="backtotopimg" src="../assets/icons/backtotop.svg" alt="">
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
    
    <div class="mv_nav_list_background" v-if = "store.is_mv_nav_open" @click = "handle_mv_menu_click()"></div>   
    
    </template>
    
    <script setup>
    //hook 引入
    import{tracker_toggle} from '../hooks/use_mouse_tracker_toggle'
    import {scrollto} from '../hooks/use_scroll'
    //依赖引入
    import {computed,ref,watch} from 'vue'
    import {useRouter} from 'vue-router'
    import useStore from '../store/index.js'

    import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
    //引入图标
    import close from '../assets/icons/close.svg'
    import menu from '../assets/icons/menu.svg'

    import { gsap } from "gsap";
    import { CustomEase } from "gsap/CustomEase";

    const router = useRouter()
    const store = useStore()


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
                window.open('http://www.chakshing.com/chak.pdf')
            }  
            
            store.is_mv_nav_open = false
        }
        //取出响应式的路径数据。模板中，dot会根据根据这一参数决定是否绑定active class
        let path_now = computed(()=>store.path_now)

        //根据库中状态，相应navbar的开关
        const outer_container = ref()
        watch(()=>store.is_navbar_open,()=>{
            if (store.is_navbar_open){
                gsap.to(outer_container.value,{
                            y:120,
                            duration: 0.6,
                            ease: CustomEase.create("custom", store.animation_ease_c1),
                        })
            }else{
                gsap.to(outer_container.value,{
                            y:0,
                            duration: 0.3,
                            ease: CustomEase.create("custom", store.animation_ease_c1),
                        })
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

        //处理hover
        let handle_hover= ()=>{
            tracker_toggle('hidden')
            store.hover_id = undefined
        }


        const backtotopimg =ref()

        let handle_hover_2 = (val, e)=>{

            if(e.pointerType == 'mouse'){
                if(val == 1){
                    gsap.to(backtotopimg.value,{
                        scaleX: 1.2,
                        scaleY:1.2,
                        duration: 0.3,
                        ease: CustomEase.create("custom", store.animation_ease_c1),
                    })
                }else{
                    gsap.to(backtotopimg.value,{
                        scaleX: 1,
                        scaleY:1,
                        duration: 0.3,
                        ease: CustomEase.create("custom", store.animation_ease_c1),
                    })
                    
                }
                
            }
        }




       

        let mv_list_position = computed(()=>{
            if (store.is_mv_nav_open){
                return '7.5%'
            }else {
                return '-100%'
            }
        })

        let handle_mv_menu_click = ()=>{
            store.is_mv_nav_open = !store.is_mv_nav_open 
        }

        let icons = computed(()=>{
            if(store.is_mv_nav_open){
                return close
            }else{
                return menu
            }
        })


        //
        let nav_width = computed(()=>{
            var a
            if (store.scroll_position>=store.page_height && store.navbar_status == 1){
                a = 80
            }else{
                a = 0
            }
            return a+"px"
        })

        let navbar_status_style2 = computed(()=>{
            if(store.navbar_status == 0){
                return '0px'
            }else if(store.navbar_status == 1){
                return '80px'
            }
        })

        let con = ref(null)
        let bac = ref(null)

        

        let animation_open = ()=>{
            var tl = gsap.timeline(); 
            tl.fromTo(con.value, {
                width: "100%",
            }, {
                width: "calc(100% - 80px)",
                duration: 0.3,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            });
            tl.fromTo(bac.value,{
                width: "0px",
                scale:0
            }, {
                width: "60px",
                scale:0,
                duration: 0.3,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            },"<")
            tl.fromTo(bac.value,{
                scale:0
            }, {
                scale:1,
                duration: 0.3,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            },">")

        }
        let animation_close = ()=>{
            var tl = gsap.timeline(); 
            tl.fromTo(bac.value,{
                scale:1,
                width:"60px"
            }, {
                scale:0,
                width:"60px",
                duration: 0.3,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            },"")
            tl.fromTo(bac.value,{
                width:"60px"
            }, {
                width:"0px",
                duration: 0.1,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            },">")
            tl.to(con.value, {
                width: "100%",
                duration: 0.3,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            });
        }


        //监听滚动位置
        const isGreaterThanPageHeight = computed(() => store.scroll_position >= store.page_height);
        watch(isGreaterThanPageHeight, (newValue, oldValue) => {
            if(store.navbar_status == 1 && !store.is_mv_nav_open){
                // 当条件从false变为true时触发动画
                if (newValue && !oldValue) {
                        animation_open()
                }
                // 当条件从true变为false时触发另一个动画
                else if (!newValue && oldValue) {
                    animation_close() 
                }
            }   
            
        });
        //监听菜单打开
        watch(()=>store.is_mv_nav_open,()=>{
            if(store.scroll_position >= store.page_height){
                if (store.is_mv_nav_open) { 
                    animation_close()
                }else{
                    animation_open()
                }
            }
            
        })

        let handle_back_to_top =()=>{
            scrollto(0,'smooth')
        }

    </script>
    
    <style scoped>
    .web_logo_ani{
        width:70px;
    }
    .web_logo_text{
        width:100px ;
        margin-top: 20px;
    }
    .logo_con{
        display: flex;
        height:100%;
        gap:4px

    }
    .outer_container{
        position:fixed;
        left:0;
        right:0;
        top:-120px;
        width:100%;
        z-index:15; 
        display: flex;
        justify-content: center;
    }
    .container{
        width: 100%;
        height:100px;
        display:flex;
        margin:0 auto;  
    }
    .container > div{
        width:90%;
    }
    .container_art{
        
        height:66px;
        border-radius: 40px;
        display:flex;
        justify-content: space-between;
        border-radius: 60px;
        
            
    }
    .inart_con{
        width:var(--content-width);
        max-width:450px;
        display: flex;
        margin-top: 24px;
        justify-content: space-between;
    }
    .outer2_container{
        background:var(--color-glass-dark);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(9.5px); 
        -webkit-backdrop-filter: blur(9.5px);
        width:100%;
        display: flex;
        
        justify-content: center;
        align-items: center;
    }
    .outer3_container{
        background:rgba(44, 44, 44, 0.648);
        box-shadow: 0px 0px 6px rgba(20, 20, 20, 0.25);
        backdrop-filter: blur(9.5px); 
        -webkit-backdrop-filter: blur(9.5px);
        width:100%;
        display: flex;
        
        justify-content: center;
        align-items: center;
    }
    .backtotop{
        height:60px;
        width:0px;
        transform: scale(0,0);
        flex:none;
        background-color: var(--color-glass-light);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(9.5px); 
        -webkit-backdrop-filter: blur(9.5px);
        border-radius: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
    }
    .backtotop>img{
        width:20px;
        
    }
    .inner_container{
        width:100%;
        max-width: 1000px;
        margin:0 0 0 0 ;
        height:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .inart_con .inner_container{
        margin:0 30px 0 0 ;
    }
    .back_conatiner{
        display: flex;
        height:100%;
        justify-content: center;
        align-items: center;
        gap:16px;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.274);
        padding:0 40px 0 8px;
        border-radius: 100px;
    }
        .back_conatiner > div{
            width:50px;
            height:50px;
            border-radius: 40px;
            background-color:#9ba1a76f;
            display: flex;
            align-items: center;
            justify-content: center;
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
        z-index:14
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
    .nav_container>h1{
        opacity: 0.5;
    }
    .nav_container>h1:hover{
        opacity: 1;
        font-weight: 500;
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
        background: #FFD600;
        border-radius: 8px;
        position:absolute;
        bottom:-10px;
        right:0;
        left:0;
        margin: auto;
        transition:all 0.3s;
    }
    h1{
        color:var(--main-light-100);
        font-size:15px;
        font-weight: 400;
        line-height: 12px;
        transition:all 0.3s ease-out;
    }
    .active > .dot_container >.dot{
        bottom:2px;
    }
    .active > h1 {
        color:#FFD600;
        font-weight: 500;
        opacity: 1;
    }
    /* .active > h1{
        font-weight: 900;
    } */
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
        opacity: 0.5;
    }
    .mv_nav_list_conatiner{
        position:fixed;
        right:0;
        top:120px;
        width:100%;
        z-index: 15;
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
        z-index: 14;
    }


    .inart_con{
        width:90%;
    }

    .inart_con .outer3_container{
        background: transparent; 
        box-shadow: none;
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
    }
    .inart_con .inner_container{
        width:100%;
        margin:0
    }

    .inart_con .back_conatiner{
        background-color: transparent;
    }
    .inart_con .back_conatiner h3{
        display: none;
    }
    
    .inart_con .back_conatiner div{
        background-color: #1516168b;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        width:60px;
        height:60px;
        
    }

    .inart_con .back_conatiner div img{
        filter:invert(1)
    }

    .inart_con .nav_list_container_mv{

        width:60px;
        height:60px;
        background-color: #1516168b;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 100px;
        opacity: 1;
    }

}
    </style>
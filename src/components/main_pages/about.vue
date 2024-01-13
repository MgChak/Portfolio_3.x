<template>

<div class="about_main_container" id="article_container_for_scroll"  ref="el" >
   <div class="placeholder"></div>
    <div class="about_contents_container">
        <div class="name">
            <div class="box box1">
                <img ref="img1" class="imgs img1" src="../../assets/about/CHAKSHING.svg" alt="">
            </div>
            <div class="subline">
                <div class="box box2">
                    <img ref="img2" class="imgs img2" src="../../assets/about/LAM.svg" alt="">
                </div>
                <div class="bobo_con">
                    <img ref="img3" class="imgs img3" src="../../assets/about/bobo.svg" alt="">   
                    <div ref="con" class="bobo_back"></div>
                </div>
            </div> 
        </div>
    </div>
    <div class="about_contents_container">
        <img ref="me" class="me" src="../../assets/about/me.png" alt="">
    </div>

    <div class="about_contents_container">
        <div ref="breakline1" class="breakline"></div>
        <div class="flexbox">
            <link_button_for_about :prototype_links = 'email_button'/>
            <link_button_for_about :prototype_links = 'link_button'/>
            <link_button_for_about :prototype_links = 'ins_button'/>
        </div>
        <div ref="breakline2" class="breakline"></div>
    </div>
    <div ref="contents" class="about_contents_container contents" style="gap:24px">
        <h1>ABOUT ME</h1>
        <h3>Hello, I'm Chakshing Lam, a UX/UI & product designer with a multifaceted educational background encompassing UX/UI design, graphic design, fine arts, and front-end programming. My fervent passion for design fuels my constant quest for innovation and pushing the envelope in creativity. In every project, I aim to craft intuitive, captivating, and visually extraordinary designs that not only fulfill but surpass client expectations. I eagerly anticipate the opportunity to apply my skills and zeal to any upcoming projects. Thank you for your time in getting to know a bit about me.</h3>
    </div>
    <div class="placeholder"></div>
</div>    

</template>

<script setup>
import useStore from '../../store/index'
import { s_lock,s_unlock } from '../../hooks/use_page_scroll_locker'
import {get_all_imgs} from'../../hooks/use_art_page_functions'
import {onMounted,ref,onBeforeMount,watchEffect,reactive} from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import {scrollto} from '../../hooks/use_scroll'
import { screen_open,screen_cover } from '../../hooks/use_full_sreen_cover'
import { CustomEase } from "gsap/CustomEase";
import link_button_for_about from "../comps/link_button_for_about.vue"
import {tracker_toggle} from '../../hooks/use_mouse_tracker_toggle'
import gsap from 'gsap'
const store = useStore()
gsap.registerPlugin(CustomEase);



    //按钮array
    let email_button =reactive({
        ani:false,
        main_color:'white',
        sub_color:'black',
        width:120,
        text:'Email',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-46685&t=YIt6F0pheIRRFmXT-1&scaling=min-zoom&page-id=13%3A45022&mode=design',
    })
    let link_button = reactive({
        ani:false,
        main_color:'white',
        sub_color:'black',
        width:140,
        text:'LinkedIn',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-46685&t=YIt6F0pheIRRFmXT-1&scaling=min-zoom&page-id=13%3A45022&mode=design',
    })
    let ins_button = reactive({
        ani:false,
        main_color:'white',
        sub_color:'black',
        width:150,
        text:'Instagram',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-46685&t=YIt6F0pheIRRFmXT-1&scaling=min-zoom&page-id=13%3A45022&mode=design',
    })





    //初始化1
    onBeforeMount(()=>{
        //锁定滚动
        s_lock()
    
    })

    //动画
    const img1 = ref(null)
    const img2 = ref(null)
    const img3 = ref(null)
    const con = ref(null)
    var me = ref(null)
    var breakline1 = ref(null)
    var breakline2 =ref(null)
    var contents =ref(null)

    var ani="M0,0 C0.39,0 0.589,1 1,1 "
    var time = 0.2

    let other_anis = ()=>{
        gsap.to(me.value,{
            opacity:1,
            duration:0.6,
            ease: CustomEase.create("custom", store.animation_ease_c1),
        })
        gsap.to(contents.value,{
            opacity:1,
            duration:0.6,
            ease: CustomEase.create("custom", store.animation_ease_c1),
        })
        gsap.to(breakline1.value,{
            scaleX:1,
            duration:0.6,
            ease: CustomEase.create("custom", store.animation_ease_c1),
        })
        gsap.to(breakline2.value,{
            scaleX:1,
            duration:0.6,
            ease: CustomEase.create("custom", store.animation_ease_c1),
        })

    }

    onMounted(()=>{

        //隐藏鼠标追踪器
        tracker_toggle('hidden')
        //复位路由路径
        store.is_route_to_work = false
        //初始化文章位置设置为0
        scrollto(0,'jump')
        //修改导航栏状态到初始状态
        store.navbar_status = 0
        
        
        //打开屏幕遮罩
        screen_open()
        
        store.loader_status = true//开启loader

        get_all_imgs()//统计图片

        var stop = watchEffect(()=>{
            if(store.is_loader_animation_finished){
                //复位动画状态
                store.is_loader_animation_finished = false
                stop()
                //打开导航栏
                store.is_navbar_open = true

                //开启about的动画
                store.about_animation = true
                
                setTimeout(()=>{
                    //解锁滚动
                    s_unlock() 
                    
                },600)   
            }
        })

        
        var stop2 = watchEffect(()=>{
            console.log("执行")
            var tl = gsap.timeline() 
            if(store.about_animation){
                store.about_animation = false
                stop2() 
                gsap.to(img1.value,{
                    yPercent:-120,
                    duration:0.6,
                    ease: CustomEase.create("custom", store.animation_ease_c1),
                })
                gsap.to(img2.value,{
                    yPercent:-120,
                    duration:0.6,
                    ease: CustomEase.create("custom", store.animation_ease_c1),
                    delay:0.3,
                })
                gsap.to(con.value,{
                    yPercent:-120,
                    duration:0.3,
                    ease: CustomEase.create("custom", ani),
                    delay:0.6,
                })
                tl.to(img3.value,{
                    yPercent:-118,
                    scaleY:0.7,
                    scaleX:1.3,
                    duration:0.3,
                    ease: CustomEase.create("custom", ani),
                    delay:0.9,
                })
                tl.to(img3.value,{
                    scaleY:1.2,
                    scaleX:0.8,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img3.value,{
                    scaleY:0.8,
                    scaleX:1.2,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img3.value,{
                    scaleY:1.1,
                    scaleX:0.9,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img3.value,{
                    scaleY:0.95,
                    scaleX:1.05,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                    onComplete:()=>{
                        email_button.ani = true
                        link_button.ani = true
                        ins_button.ani =true
                        other_anis()
                    },
                })
                tl.to(img3.value,{
                    scaleY:1.02,
                    scaleX:0.98,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
                tl.to(img3.value,{
                    scaleY:1,
                    scaleX:1,
                    duration:time,
                    ease: CustomEase.create("custom", ani),
                })
            }
        })
    })

    onBeforeRouteLeave((to,from,next)=>{
        //遮挡屏幕
        screen_cover()
        //关闭导航栏
        store.is_navbar_open = false
        setTimeout(()=>{
            next()        
        },350) 
    })


    let handle_click = (url)=>{
        window.open(url)
    }

    



    


</script>

<style scoped>

.placeholder{
    width:1px;
    height:80px;
}

.about_main_container{    
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
    width:100%;
    background-color: linear-gradient(180deg, #162228 0%, #0A141A 100%);;
    gap:80px;
}
.about_contents_container{
    width:var(--content-width);
    max-width:800px;
    display: flex;
    flex-direction: column;
    gap:40px;
}




.background_holder{
    position:absolute;
    left:0;
    bottom:0;
    z-index: -1;
    width:100%;
    height:100%;
}

.subline{
    display: flex;
    align-items: end;
    gap:24px;
}

.imgs{
    position:relative;
    left:0;
    overflow: hidden;
}
img{
    overflow: hidden;
    /* transform: translateY(100%); */
}
.box{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position:relative;
}
.box1{
    width:100%;
}
.img1{
    width:100%;
    transform: translateY(120%);
}
.box2{
    width:35.62%;

}
.img2{
    width:100%;
    transform: translateY(120%);
}

.bobo_con {

    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;
    overflow: hidden;
}

.img3 {
    width: 50%;
    z-index: 1;
    transform-origin:center bottom;
    transform: translateY(120%) scale(0.7,1.3);
}

.bobo_back {
    background-color: white; /* 确保这也是白色 */
    width: 100%;
    height: 76.8%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    border-radius: 20px;
    overflow: hidden;
    transform: translateY(120%);
}
.me{
    width:100%;
    border-radius: 20px;
    opacity: 0;
}
.flexbox{
    display: flex;
    gap:40px
}
.breakline{
    width:100%;
    height:1px;
    background-color: white;
    opacity: 0.3;
    transform-origin: left center;
    transform: scaleX(0);
}
.contents{
    opacity: 0;
}

h1{
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 
    color:white;

}
h3{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color:rgba(255, 255, 255, 0.612);
}

@media (max-width: 750px) {
    .flexbox{
        flex-wrap: wrap;
        gap:24px;
    }
    .about_main_container{
        gap:40px;
        
    }
    
}

</style>
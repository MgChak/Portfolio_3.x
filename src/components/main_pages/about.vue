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

    <div ref="contents" class="about_contents_container contents" style="gap:24px">
        <h1>ABOUT ME</h1>
        <h3>Hey there! I'm a UX/UI designer passionate about elevating user experiences with innovative design solutions. My journey in design started with a love for visuals and interactivity, aiming to turn complex challenges into sleek, engaging interfaces.</h3>
        <h3>Throughout my career, I've not only built up a solid set of skills but also took on the exciting task of developing my own portfolio website to showcase my technical prowess and creative flair. I'm well-versed in a variety of design tools like Figma and Adobe Creative Suite and have hands-on programming skills in HTML, CSS, JavaScript, and Vue.js.</h3>
        <h3>My work goes beyond just making things look good and function well—I focus on enhancing user interaction through dynamic graphic design. I believe great design solves problems and sparks emotional connections. In this AI-driven age, I'm also keen on exploring how to integrate AI into user experience design to keep pushing the envelope in interface and experience innovation.</h3>
        <h3>Thanks for stopping by my site! I hope you find something inspiring. If you'd like to chat about potential collaborations or just want to drop a suggestion, feel free to reach out through the contact info on my site!</h3>
    </div>
    <div class="placeholder"></div>
    <com_footer/>
</div>    

</template>

<script setup>
import useStore from '../../store/index'
import com_footer from '../com_footer.vue'
import { s_lock,s_unlock } from '../../hooks/use_page_scroll_locker'
import {onMounted,ref,onBeforeMount,watch,reactive} from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import {scrollto} from '../../hooks/use_scroll'
import { screen_open,screen_cover } from '../../hooks/use_full_sreen_cover'
import { CustomEase } from "gsap/CustomEase";
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
        link:'mailto:'+'chakshinglam@gmail.com',
    })
    let link_button = reactive({
        ani:false,
        main_color:'white',
        sub_color:'black',
        width:140,
        text:'LinkedIn',
        link:'https://www.linkedin.com/in/chakshing-lam/',
    })
    let ins_button = reactive({
        ani:false,
        main_color:'white',
        sub_color:'black',
        width:150,
        text:'Instagram',
        link:'https://www.instagram.com/chakshinglam/',
    })

    let links = ["https://www.linkedin.com/in/chakshing-lam/","https://www.instagram.com/chakshinglam/"]
    let handle_linkout = (val)=>{
        var tar = ''
        if(val==1){
            tar = links[0]
        }else{
            tar = links[1]
        }
        window.open(tar)
    }




    //初始化1
    onBeforeMount(()=>{
        //锁定滚动
        s_lock()
    
    })


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

       
        //打开导航栏-存在于loading关闭
        store.is_navbar_open = true

        
        setTimeout(()=>{
            //解锁滚动
            s_unlock() 
            //开启about的动画
        store.about_animation = true

            
        },600) 
    
    })

    onBeforeRouteLeave((to,from,next)=>{
        var index = store.index_array.findIndex((i)=>i.navto==to.name)
        //遮挡屏幕
        screen_cover()
        if(index >=0){
            //关闭导航栏
             store.is_navbar_open = false
        }
        
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
    background: #1C1E20;
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
   
}
.box2{
    width:35.62%;

}
.img2{
    width:100%;
   
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

}
.me{
    width:100%;
    border-radius: 20px;
    opacity: 1;
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
  
}
.contents{
    opacity: 1;
}

h1{
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    color:white;

}
h3{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%;
    color:rgba(255, 255, 255, 0.7);
}

.linkout{
    text-decoration: underline;
    cursor: pointer;
}
.linkout::after{
    content: ' ';
    display: inline-block;
    width:18px;
    height:18px;
    background-image: url('../../assets/icons/arrow_circle_right_w.svg');
    background-size: cover;
    position: relative;
    left:4px;
    top:2px;
    opacity: 0.7;
}

.icon::before{
    content: ' ';
    display: inline-block;
    width:18px;
    height:18px;
    background-size: cover;
    position: relative;
    top:2px;
    margin-right: 16px;
    opacity: 0.7;
}
    .icon:nth-child(1)::before{
        background-image: url('../../assets/logo/link.svg');
    }
    .icon:nth-child(2)::before{
        background-image: url('../../assets/logo/ins.svg');
    }
    .icon:nth-child(3)::before{
        background-image: url('../../assets/logo/call.svg');
    }
    .icon:nth-child(4)::before{
        background-image: url('../../assets/logo/mail.svg');
        width:18px;
        height:15px;
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
<template>

    

    <div class="main_container" id="article_container_for_scroll" :style="[scroll_position,store.scroll_animation]">
        <!-- 头部头像显示 -->
        <div class="header_container">
            <div class="gif_container">
                <img class="gif" src="../../assets/about/me.gif" alt="">
            </div>
            <img class="talkbar" src="../../assets/about/talk.svg" alt="">
            <div class="background_conatiner">
                <img class="header_back" src="../../assets/about/back.png" alt="">
            </div>
        </div>

        <div class="section_conatier">
            <h1>CONTACT ME</h1>
            <div class="inner_conatiner">
                <div class="contect_container">
                    <img src="../../assets/about/g.svg" alt="">
                    <h2>chakshinglam@gmail.com</h2>
                </div>
                <div class="contect_container">
                    <img src="../../assets/about/i.svg" alt="">
                    <h2>chakshinglam</h2>
                </div>
                <div class="contect_container">
                    <img src="../../assets/about/l.svg" alt="">
                    <h2>www.linkedin.com/in/chakshing-lam</h2>
                </div>
            </div>
        </div>



        <div class="section_conatier">
            <h1>ABOUT ME</h1>
            <h2>Hello, I'm Chakshing Lam, a UX/UI & product designer. I have a diverse educational background that includes UX/UI design, graphic design, fine arts, and front-end programming. My passion for design is what drives me, and I'm constantly seeking new ways to challenge myself and push the boundaries of what's possible. With each new project, I strive to create intuitive, engaging, and visually stunning designs that not only meet but exceed my clients' expectations. I look forward to bringing my skills and enthusiasm to any project that comes my way. Thank you for taking the time to learn a little bit about me.</h2>
        </div>
        <div class="section_conatier">
            <h1>KEY WORDS</h1>
            <div class="key_words_container">
                <img src="../../assets/about/code.svg" alt="">
                <h2>CODING _ During the process of learning UX/UI, I came across courses related to JS. I became fascinated by this language because I could use JS to turn my design concepts into real apps. So, I taught myself Vue.js, and the website you are currently seeing was built using Vue.</h2>
            </div>
            <div class="key_words_container">
                <img src="../../assets/about/game.svg" alt="">
                <h2>GAME _ I am a complete video game enthusiast. Compared to single-player games, I prefer multiplayer online games, such as WOW, FF14, LOL. I really enjoy the feeling of working together with teammates to achieve a common goal.</h2>
            </div>
            <div class="key_words_container">
                <img src="../../assets/about/home.svg" alt="">
                <h2>HOME _ Compared to going out, I prefer spending my leisure time at home. This includes exercising, which I also do at home. However, every year I still go on one or two trips with my friends.</h2>
            </div>
            <div class="key_words_container">
                <img src="../../assets/about/pets.svg" alt="">
                <h2>CAT _ I have a very cute Siamese cat! I love it very much, it's my everything. However, as it's getting older, its fur is starting to become darker lol. If you know how to prevent it from becoming black, please let me know.</h2>
            </div>
        </div>



        <div class="placeholder"></div>
   </div>

    
</template>

<script setup>
import useStore from '../../store/index'
import {onMounted,computed} from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
const store = useStore()

    onMounted(()=>{

        //复位路由路径
        store.is_route_to_work = false
        //将滚动行为设置成0=文章滚动
        store.scroll_event_status = 0
        //修改导航栏状态到默认状态
        store.navbar_status = 0
        //初始化文章位置设置为0
        store.scroll_position = 0
        //修改导航栏状态到初始状态
        store.navbar_status = 0
        //将滚动行为设置成0=文章滚动
        store.scroll_event_status = 0
        //将文章的高度保存到库
        store.scroll_page_height = document.getElementById('article_container_for_scroll').clientHeight
        setTimeout(()=>{
            //打开导航栏
            store.is_navbar_open = true
        },100)   
    })

    onBeforeRouteLeave((to,from,next)=>{
        //将滚动行为初始化为锁定状态
        store.scroll_event_status = undefined
        //初始化文章位置设置为0
        store.scroll_position = 0

        next()
    
    })

    let scroll_position = computed(()=>{
        return {transform: 'translateY('+ store.scroll_position*-1+'px)'}
    })


    let copy_arry = [
        'chakshinglam@gmail.com',
        'chakshinglam',
        'www.linkedin.com/in/chakshing-lam'
    ]

    let handle_copy = (id)=>{

    }

</script>

<style scoped>
.main_container{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:80px;
}
.header_container{
    margin-top: 200px;
    width:40vw;
    height:40vw;
    max-width: 500px;
    max-height: 500px;
    position:relative;
    
}
.gif_container{
    width:100%;
    height:100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 50%;
}
.gif{
    width:120%;
    
}
.background_conatiner{
    width:100%;
    height:100%;
    position:absolute;
    z-index:-1;
    top: 0;
    left: 0;
}
.header_back{
    width: 700%;
    position: absolute;
    top: -301%;
    left: -300%;
    z-index: -1;
    animation:back_animation 6s linear infinite;
}
.talkbar{
    position: absolute;
    right: -22%;
    top: -19%;
    width: 81%;
}
@keyframes back_animation {
    0%{opacity:1}
    50%{opacity:0.5}
    100%{opacity:1}
}




h1{
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 45px;
    color: rgba(248, 251, 246, 0.85);

}
h2{
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 45px;
    color: rgba(248, 251, 246, 0.85);

}

.section_conatier{
    width:var(--content-width);
    max-width:1150px ;
    display: flex;
    flex-direction: column;
    gap:40px;
}
.key_words_container{
    display: flex;
    align-items: start;
    gap:16px;
}
.key_words_container > img{
    width:40px;
}
.key_words_container > h2{
    margin-top:-10px;
    flex:1;
}

.contect_container{
    display:flex;
    align-items: center;
    gap:16px;
}
.inner_conatiner{

}
.contect_container > h2{
    pointer-events: all;
    -webkit-user-select:auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
}
.contect_container > img{
    width: 60px;
    flex:none;
}
.copy_container{
    display: flex;
    cursor: pointer;
}
.copy_container > img {
    width:20px;
}
.copy_container > h3{
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 45px;
    color: rgba(248, 251, 246, 0.85);
    text-decoration: underline;
}
.placeholder{
    width:1px;
    height:300px;
}

</style>
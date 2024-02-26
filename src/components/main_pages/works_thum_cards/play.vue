<template>

    <div class="container container_expand" :style="{height:cover_height}" ref="el" >
        <div class="content_background">
            <div class="content_container">
                <div class="text_container">
                    <h1>PLAY & EXPLORE</h1>
                    <div class="breakline"></div>
                </div>
                <img_slideshow :slideshow_arr = 'play_arry'/> 
            </div>
        </div>
        
        <!-- <div class="background_holder" >
            <div class="background_anim_holder">
        </div>
        </div> -->
        
    </div>
    
</template>

<script setup>
//hooks引入
import img_slideshow from '../../comps/img_slideshow.vue';
import useStore from '../../../store/index.js'
const store = useStore()

    let v_1  = "https://player.vimeo.com/video/916366055?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_2= "https://player.vimeo.com/video/916366087?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_3 = "https://player.vimeo.com/video/916366100?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_4 = "https://player.vimeo.com/video/916366062?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_5 = "https://player.vimeo.com/video/916366070?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_6 = "https://player.vimeo.com/video/916366078?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

let play_arry = {
        color:'white',
        type:'vimeo',
        resize:false,
        isPlaySection:true,
        covered:true,
        contents:[
            [v_1,"Motion Graphic","HBO logo motion graphic design."],
            [v_2,"Motion Graphic","Motion graphic timeline design for BMW vehicles."],
            [v_3,"Front-End Coding","Mobile web app coding demo for cat distribution recording."],
            [v_4,"Front-End Coding","Portfolio website interactive animation coding demo."],
            [v_5,"Front-End Coding","Portfolio website interactive animation coding demo."],
            [v_6,"Graphic Design","Rebranding design for the columbus museum of art."],
        ]
    }   



</script>

<style scoped>
.container{    
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    width:100vw;
}
.content_background{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    max-width: 1200px;
    margin: 80px 0;
}
.content_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
    width:85%;
    max-width: 1000px;
    gap:24px;
}
.text_container{
    width:100%;
    display:flex;
    flex-direction: column;
    gap:24px;
}
.background_holder{
    position:absolute;
    left:0;
    bottom:0;
    z-index: -1;
    width:100%;
    height:100%;
}

.background_anim_holder{
    background-image: url("../../../assets/main_elements.svg");
    width:100%;
    height:100%;
    background-size: 50%;
    position:absolute;
    left:0;
    bottom:0;
    z-index: -1;
}

h1{
    color: #FFD600;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 
}
.breakline{
    background-color: white;
    opacity: 0.2;
    width:100%;
    height:1px;
}


</style>
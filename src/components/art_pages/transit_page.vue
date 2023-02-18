<template>

<div class="main_container" id="article_container_for_scroll" :style="[scroll_position,store.scroll_animation]">
    <transit/> 

    <div class = "overview_sec">
        <div style="{width:200px}">
            <img class="logo" src="../../assets/art_pages/letsgo/logo.svg" alt="">
        </div>
        <div class="overview_container">
            <div class="overview_cum1">
                <div class="overview overview_infor">
                    <h2>OVERVIEW</h2>
                    <h3>Lets Go is a travel planner app witch allowed users to create, search, and share their travel plans. There are two primary features involved: online  community and travel planner.</h3>
                </div>
                <div class="type overview_infor">
                    <h2>TYPE OF PROJECT</h2>
                    <h3>App Concept / Product Design</h3>
                </div>
            </div>
            <div class="overview_cum2">
                <div class="my_roll overview_infor">
                    <h2>MY ROLL</h2>
                    <h3>Solo designer
                        <br>_Research
                        <br>_UX Design
                        <br>_Visual Design
                        <br>_Prototyping
                    </h3>
                </div>
            </div>
        </div>
       
    </div>  


    <div class="placehoudler"></div>
    <p>==end==</p>

</div>

    
</template>

<script setup>
//组件引入
import transit from'../main_pages/works_thum_cards/transit.vue'
import prototype_links from'../comps/prototype_links.vue'
import is_v_imgs from'../comps/is_v_imgs.vue'
import is_v_poster from'../comps/is_v_poster.vue'
//hook引入
import {animation_queue_route_in,animation_queue_route_out} from'../../hooks/use_art_page_functions'
//依赖引入
import { computed,onMounted} from 'vue' 
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';

const store = useStore()

    let page_id = 2
    onMounted(()=>{
        animation_queue_route_in(page_id)
    })

    onBeforeRouteLeave((to,from,next)=>{
        animation_queue_route_out(page_id,to)
        setTimeout(()=>{
            next()
        },700)    
    })

    //依赖于库中的数据平滑滚动文章
    let scroll_position = computed(()=>{
        return {transform: 'translateY('+ store.scroll_position*-1+'px)'}
    })



    

</script>

<style scoped>

.main_container{
    will-change: transform;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:180px;

    position:absolute;
    left:0;

    background: linear-gradient(90deg, #101013 0%, #191b2e 48.61%, #101013 100%);

    
    /* top 1s cubic-bezier(0.36, 0.36, 0.31, 1) */
  
}

h1{
    /* Section Title */
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 60px;
    /* or 100% */
    /* #8CDB4D */

    margin-bottom:-40px;

    color: #8CDB4D;

}
h2{
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 45px;
    /* margin-bottom:-20px; */
    /* identical to box height */



    /* light_main_100% */

    color: #F5F7FB;
}
h3{
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    max-width: 1400px;
    /* or 188% */
    /* light_main_60% */
    color: rgba(248, 251, 246, 0.85);
}
.style_italic{
    font-style: italic;
}

.img_conatiner_s_out{
    width:var(--content-width);
    max-width:var(--max-content-width) ;
}
.img_conatiner_s_out > img{
    width:100%;
}

img{
    width:100%;
}
.video_conatiner_s{
    width:100%;
}
.section_conatiner{
    width:var(--content-width);
    max-width:var(--max-content-width) ;
    display: flex;
    flex-direction: column;
    gap:80px;
}
.section_inner_container{
    display: flex;
    flex-direction: column;
    gap:32px;
}
.section_inner_container > h2{
    margin-bottom:-20px;
}

.overview_sec{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:40px;
}
.overview_container{
    display:flex;
    gap:40px;
}
.overview_infor{
    display: flex;
    flex-direction: column;
    gap:4px;
}
.overview_cum1{
    display: flex;
    flex-direction: column;
    gap:40px;
}
.overview{
    max-width: 550px;
}







.interview_feedbacks{
    display:flex;
    align-items: center;
    gap:16px;
}

.interview_feedbacks > img{
    width:100px;
    height: 100px;
}

.prototype_links_container{
    display: flex;
    flex-direction: column;
    gap:24px;
}








.placehoudler{
    width:100%;
    height:200px;
}
p{
    color:white;
}


</style>
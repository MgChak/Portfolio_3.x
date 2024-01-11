<template>

<div class="main_container" id="article_container_for_scroll">
    <nebu/> 

    <div class = "ov_section_container bc_s">
        <div class="content_container">
            <h4>NEBU</h4>
            <div class="breakline bc_w1"></div>
            <overview_info :ov_data="ov_data" />
            <div class="breakline bc_w1"></div>
            <h3>Introducing Nebu, the In-Vehicle Robot crafted specifically for your Mars adventure! Nebu brings holographic displays to life, offering a wide range of entertainment options and an immersive experience. </h3>
        </div>
    </div>  


    <div class = "section_container">
        <div class="content_container">
            <div class="content_block_center">
                <img class="sp_nasa_img" src="../../assets/art_pages/nebu/nasa.png" alt="">
                <h3 style="text-align:center;">A collaborative project <br>sponsored by NASA.</h3>
            </div>
        </div>
        <img class="sp_background_img" src="../../assets/art_pages/nebu/background_2.jpg" alt="">
    </div> 



    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_flex">
                <h1>OVERVIEW</h1>
                <link_button :prototype_links = 'case_study_button'/>
            </div>
            <h3>This project is centered on designing for space tourism, anticipating a future around 2060 when orbital space travel around Earth becomes commonplace. We envision a time when people are not only orbiting Earth but also seeking to travel to Mars.
The primary objective of our project is to enhance the safety, ease, and comfort of tourists' journeys to Mars.</h3>
            <img class="no_raius" src="../../assets/art_pages/nebu/o_1.jpg" alt="">
        </div>
    </div> 

    <div class = "section_container bc_s">
        <div class="content_container">
            <h1>DESIGND BY - TEAM APOGEE</h1>
            <div class="content_block_flex">
                <div class="team_m">
                    <img class="team_img" src="../../assets/art_pages/nebu/zeo.png" alt="">
                    <div class="teaminfo">
                        <h3>Zeo Zhang</h3>
                        <h3>Industrial</h3>
                    </div>
                </div>
                <div class="team_m">
                    <img class="team_img" src="../../assets/art_pages/nebu/emily.png" alt="">
                    <div class="teaminfo">
                        <h3>Emily Tedja</h3>
                        <h3>Industrial</h3>
                    </div>
                </div>
                <div class="team_m">
                    <img class="team_img" src="../../assets/art_pages/nebu/chak.png" alt="">
                    <div class="teaminfo">
                        <h3>Chashing Lam</h3>
                        <h3>UX/UI</h3>
                    </div>
                </div>
                <div class="team_m">
                    <img class="team_img" src="../../assets/art_pages/nebu/edward.png" alt="">
                    <div class="teaminfo">
                        <h3>Edward Tsai</h3>
                        <h3>UX/UI</h3>
                    </div>
                </div>
                <div class="team_m">
                    <img class="team_img" src="../../assets/art_pages/nebu/jiayu.png" alt="">
                    <div class="teaminfo">
                        <h3>Jiayu Wang</h3>
                        <h3>Graphic</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="breakline bc_w1"></div>
        <div class="content_container">
            <h1>MY MAIN TAKES</h1>
            <div class="content_block_list">
                <div class="list_i">
                    <div class="dot"></div>
                    <h3>Environmental simulation _ interaction & UX/UI design.</h3>
                </div>
                <div class="list_i">
                    <div class="dot"></div>
                    <h3>Robot-face display design.</h3>
                </div>
                <div class="list_i">
                    <div class="dot"></div>
                    <h3>Robot skins and animation design.</h3>
                </div>
                <div class="list_i">
                    <div class="dot"></div>
                    <h3>Navigation feature design.</h3>
                </div>
            </div>
        </div>
    </div> 

    <div class = "section_container">
        <div class="content_container">
            <h1 class="fc_m">LOGO & COLORS</h1>
            <img class="cardshadow" src="../../assets/art_pages/nebu/logo.jpg" alt="">
        </div>
        <img class="sp_background_img" src="../../assets/art_pages/nebu/background_2.jpg" alt="">
    </div> 



    <div class = "section_container bc_s">
        <div class="content_container">
            <div class="content_block_flex">
                <h1>STORYBOARD HIGHLIGHTS</h1>
                <link_button :prototype_links = 'case_study_button_dark'/>
            </div>
            <img_slideshow :slideshow_arr = 'highlight_arry'/> 
        </div>
    </div> 

    <div class = "section_container">
        <div class="content_container">
            <h1 class="fc_m">CUSTOMIZABLE</h1>
            <h3>To cater to the diverse preferences of as many users as possible, we have equipped Nebu with a 360-degree display screen. This feature allows users to customize Nebu's 'skin' to their liking, whether they prefer solid colors, images, or even animations. This customization ensures that every user has a unique and personal companion robot experience.</h3>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901211431?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="nebu_skin"></iframe></div>
        </div>
        <img class="sp_background_img" src="../../assets/art_pages/nebu/background_2.jpg" alt="">
    </div> 

    <div class = "section_container bc_s">
        <div class="content_container">
            <div class="content_block_flex">
                <h1>RESEARCH SUMMARY</h1>
                <link_button :prototype_links = 'case_study_button_dark'/>
            </div>
            <img_slideshow :slideshow_arr = 'research_arry'/> 
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <img src="../../assets/art_pages/letsgo/p1.jpg" alt="">
            <div class="content_block_texts">
                <h1 class="fc_s">DEFINE PROBLEMS</h1>
                <h3 class="fc_s">Planning group travel can be challenging for users due to the lack of adequate tools and resources. As a result, users often have a poor experience when trying to plan trips with a team.</h3>
            </div>
        </div>
        <div class="breakline bc_s center"></div>
        <div class="content_container">
            <img src="../../assets/art_pages/letsgo/p2.jpg" alt="">
            <div class="content_block_texts">
                <h1 class="fc_s">HOW MIGHT WE STATEMENT</h1>
                <h3 class="fc_s">How might we help young adults with expendable income for travel, use mobile technology to be well prepared for a group trip? </h3>
            </div>
        </div>
    </div> 




    <div class = "section_container bc_m">
        <div class="content_container">
            <h1 class="fc_s">PREMARY FEATURE 01<br>_CREATE NEW TRIP PLAN</h1>
            <h3 class="fc_s">Users can effortlessly create a travel plan in Let's Go and begin adding their favorite events. During the creation process, they can also invite friends who will be traveling with them to join in shaping a unique and collaborative travel plan.</h3>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_1'/>
                <link_button :prototype_links = 'fp_button_1'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901210479?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="l_p_create"></iframe></div>
        </div>
    </div> 


    <the_footer :index = "store.index_array.findIndex((item)=> item.name == 'TRANSIT' )">
        <transit/>
    </the_footer>


</div>

    
</template>

<script setup>
//组件引入
import nebu from'../main_pages/works_thum_cards/nebu.vue'
import transit from'../main_pages/works_thum_cards/transit.vue'
import the_footer from '../footer.vue'
import overview_info from '../comps/overview_info.vue'
import link_button from '../comps/link_button.vue'
import img_slideshow from '../comps/img_slideshow.vue'
//引入hooks
import {animation_queue_route_in,animation_queue_route_out,animation_queue_before_route_in} from'../../hooks/use_art_page_functions'
//依赖引入
import {onMounted,onBeforeMount} from 'vue' 
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';
//img引入
import r1 from "../../assets/art_pages/nebu/r_1.jpg"
import r2 from "../../assets/art_pages/nebu/r_2.jpg"
import r3 from "../../assets/art_pages/nebu/r_3.jpg"
import r4 from "../../assets/art_pages/nebu/r_4.jpg"
import r5 from "../../assets/art_pages/nebu/r_5.jpg"
//img引入
import h1 from "../../assets/art_pages/nebu/h_1.jpg"
import h2 from "../../assets/art_pages/nebu/h_2.jpg"
import h3 from "../../assets/art_pages/nebu/h_3.jpg"
import h4 from "../../assets/art_pages/nebu/h_4.jpg"



const store = useStore()

    let page_id = store.index_array.findIndex((item)=> item.name == 'NEBU' )

    onBeforeMount(()=>{
        animation_queue_before_route_in(page_id)
    })
    
    onMounted(()=>{
        animation_queue_route_in(page_id)
    })

    onBeforeRouteLeave((to,from,next)=>{
        animation_queue_route_out(page_id,to,next)
    })




    //overview_data数列
    let ov_data = {
        type:"Space Travel Companion Design",
        roll:"Team Apogee - My Roll: UX/UI Designer",
        time:"2023",
        detail:"Brand, Web, UX, Motion"
    }



    //高光功能
    let highlight_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [h1,"Searching Result Cards"],
            [h2,"Treval Plan Detail Page"],
            [h3,"Ai Assistant"],
            [h4,"Ai Assistant"],
        ]
    }    


    //研究总结
    let research_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [r1,"Competitive Analysis Overview"],
            [r2,"Interview Results Summary"],
            [r3,"Background Research Summary"],
            [r4,"Background Research Summary"],
            [r5,"Background Research Summary"]
        ]
    }  

     //按钮依赖
    let case_study_button = {
        main_color:'#000000',
        sub_color:'var(--p-color-main)',
        width:165,
        text:'CASE STUDY',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=1-5902&t=DoNIWpc88yBJsBBQ-1&scaling=contain&page-id=1%3A2&mode=design',
    }
    let case_study_button_dark = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:165,
        text:'CASE STUDY',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=1-5902&t=DoNIWpc88yBJsBBQ-1&scaling=contain&page-id=1%3A2&mode=design',
    }

    let vp_button_1 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901210479?share=copy',
    }

    let fp_button_1 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-5790&t=o80NHiywyoFzdJoz-1&scaling=scale-down&page-id=13%3A5789&starting-point-node-id=13%3A5790&mode=design',
    }



    


</script>

<style scoped>

.main_container{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    position:absolute;
    left:0;
    overflow: hidden;

    /* background: black; */

    --p-color-main:#77DEFF;
    --p-color-sub:#141416;
    --p-color-font-white-100:rgb(248, 251, 246);
    --p-color-font-white-60: rgba(248, 251, 246, 0.60);
  
}

h1{
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 
    color:var(--p-color-main);

}
h2{
    font-size: 30px;
    font-style: normal;
    font-weight: 900;
    line-height: 30px;
    color:var(--p-color-font-white-100);
}
h3{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color:var(--p-color-font-white-60);
}

h4{
    font-size: 90px;
    font-style: normal;
    font-weight: 900;
    line-height: 90px;
    color:var(--p-color-font-white-60);
}




.section_container{
    width:100%;
    padding:150px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:80px;
    position:relative;
}
.ov_section_container{
    width:100%;
    padding:80px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:40px
}

.content_container{
    width:var(--content-width);
    max-width:var(--max-content-width);
    display: flex;
    flex-direction: column;
    gap:24px
}
.content_block_flex{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content_block_texts{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:8px
}
.content_block_center{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:24px
}

.content_block_buttons{
    width:100%;
    display: flex;
    gap:24px
}
.content_block_list{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:8px
}
.list_i{
    display: flex;
}
.dot{
    width:30px;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dot::after{
    display: block;
    content:'';
    width:4px;
    height:4px;
    background-color: var(--p-color-font-white-60);
    border-radius: 4px;
}
.pp_container{
    overflow: hidden;
    border-radius: 20px;

}
.cardshadow{
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.50);
}

.breakline{
    width: 70%;
    max-width: 320px;
    height:0.5px;
    opacity: 0.3;
}
.center{
    margin:0 auto;
}
img{
    width:100%;
    border-radius: 20px;
}
.no_radius{
    border-radius: 0px;
}





.fc_m{
    color:var(--p-color-main)
}
.fc_s{
    color:var(--p-color-sub)
}
.fc_w1{
    color:var(--p-color-font-white-100)
}
.fc_w6{
    color:var(--p-color-font-white-60)
}
.bc_m{
    background:var(--p-color-main)
}
.bc_s{
    background:var(--p-color-sub)
}
.bc_b{
    background:black;
}
.bc_w6{
    background:var(--p-color-font-white-60);
}
.bc_w1{
    background:var(--p-color-font-white-100);
}
.sp_background_img{
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    z-index:-1;
    border-radius: 0;
    
}
.sp_nasa_img{
    width:200px;
}
.team_m{
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:8px;
}
.team_img{
    overflow: hidden;
    width:100px;
    height:100px;
    border-radius: 100px;
    border:1.5px var(--p-color-font-white-60) solid;
}
.teaminfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}



@media (max-width: 800px){

.ov_section_container{
    width:100%;
    padding:60px 0px;
    gap:40px
}    
h4{
    font-size: 60px;
    line-height: 40px; 

}
.content_block_flex{
    flex-direction: column;
    align-items: flex-start;
    gap:24px;
}

.content_block_buttons{
    flex-direction: column;

}


}
</style>
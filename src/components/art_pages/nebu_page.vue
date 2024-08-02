<template>

<div class="main_container">
    <nebu/> 
<div ref='ani_el' class="routin_ani_conatiner">
    <div class = "ov_section_container bc_s">
        <div class="ov_content_container">
            <h6>NEBU</h6>
            <div class="breakline bc_w1"></div>
            <overview_info :ov_data="ov_data" />
        </div>
    </div>  


    <div class = "main_section_container">
        <div class="sub_section_container" style="position:relative;display:flex;flex-direction: column;justify-content: center; align-items: center; padding:120px 0;">
            
            <v-lazy-image style="width:200px;" :src="images['nasa.png']" :src-placeholder="images['nasa@s.png']"/>
            <h3 style="text-align:center;">A collaborative project <br>sponsored by NASA.</h3>
            <v-lazy-image :src="images['background_2.jpg']" :src-placeholder="images['background_2@s.jpg']" style="width:100%;height:100%;position:absolute;z-index:-1;"/>
        </div>

        <div class="section_title_container">
            <h1>Overview</h1>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Space Travel Companion</h2>
            </div>
            <div class="body_block">
                <h3>This project is centered on designing for space tourism, anticipating a future around 2060 when orbital space travel around Earth becomes commonplace. We envision a time when people are not only orbiting Earth but also seeking to travel to Mars. The primary objective of our project is to enhance the safety, ease, and comfort of tourists' journeys to Mars.</h3>
            </div>
            <v-lazy-image :src="images['o_1.png']" :src-placeholder="images['o_1@s.png']"/>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>My Main Tasks</h2>
            </div>
            <div class="body_block">
                <div class="list01">
                    <ul>
                        <li><h3>Environmental simulation _ interaction & UX/UI design.</h3></li>
                        <li><h3>Robot-face display design.</h3></li>
                        <li><h3>Robot skins and animation design.</h3></li>
                        <li><h3>Navigation feature design.</h3></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Note</h2>
            </div>
            <div class="body_block">
                <h3>This page showcases only the parts of the projects that I was responsible for designing. 
                    <br>If you would like to view the complete projects or need more detailed information, please feel free to contact me.
                </h3>
            </div>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Holographic Projection</h2>
            </div>
            <div class="body_block">
                <h3>Nebu, equipped with two retractable hemispherical holographic projectors, can create 360-degree holographic projections, greatly enhancing interaction possibilities.
                </h3>
            </div>
            <v-lazy-image :src="images['s1_1.png']" :src-placeholder="images['s1_1@s.png']"/>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Environmental Simulation</h2>
            </div>
            <div class="body_block">
                <h3>Nebu uses holographic projections to simulate enjoyable scenes, reducing mental stress in enclosed spaces. Its AI analyzes user preferences to automatically select the most suitable scene.
                </h3>
            </div>
            <v-lazy-image :src="images['n1.png']" :src-placeholder="images['n1@s.png']"/>
        </div>
        
    </div> 
    
    <div class="main_section_container">
        <div class="section_title_container">
            <h1>Environmental Simulation <br>_ Interaction & UX/UI</h1>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Final Design : Hi-Fi Prototype</h2>
            </div>
            <div class="body_block">
                <h3>In the process of environmental simulation, users have the flexibility to adjust the simulated scenes not only through voice command but also via a control panel. Nebu will project a control panel around the user's hand using holographic projection. Furthermore, Nebu will monitor the user's hand movements through a camera, enabling responsive interaction based on these gestures. </h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/901211459?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Task</h2>
            </div>
            <div class="body_block">
                <h3>Design an interactive mode that allows users to adjust the environmental content of holographic projections, including lighting, seasons, and scenery.</h3>
            </div>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Challenge</h2>
            </div>
            <div class="body_block">
                <h3>This was the first time I attempted to design an interface and interaction mode in 3D space. As with all design challenges, I look forward to taking them on so I can grow and learn. So, before I even jumped into Figma, I did some initial sketching and explorations on paper to gather some ideas.</h3>
            </div>
            <v-lazy-image :src="images['in1.png']" :src-placeholder="images['in1@s.png']"/>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Design</h2>
            </div>
            <div class="body_block">
                <h3>Unlike designing traditional screen interfaces, when designing interactive pages in 3D space, the addition of a completely new dimension requires me to consider the real-world usage scenarios of users interacting with these UIs.</h3>
            </div>
            <v-lazy-image :src="images['in2.png']" :src-placeholder="images['in2@s.png']"/>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Issue</h2>
            </div>
            <div class="body_block">
                <h3>In this design, users can control holographic simulations via a panel, achieving all intended functionalities. Yet, it lacks the futuristic feel we aimed for and doesn't significantly advance beyond traditional interactions. Its complexity might also confuse new users. I'll aim for a more natural and innovative approach to reduce distractions and enhance the immersive relaxation experience.</h3>
            </div>
            <v-lazy-image :src="images['in3.png']" :src-placeholder="images['in3@s.png']"/>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>New Sketch</h2>
            </div>
            <div class="body_block">
                <h3>Therefore, I started sketching again. This time, I wanted to use as simple visual presentations as possible to allow users to control complex functions. At the same time, I aimed to pair this with intuitive gesture controls to minimize the learning curve.</h3>
            </div>
            <v-lazy-image :src="images['in4.png']" :src-placeholder="images['in4@s.png']"/>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Interaction _ Select</h2>
            </div>
            <div class="body_block">
                <h3>In the interface, users select options by pointing their fingers at the target buttons. The selected button enlarges, and its function is displayed above it for clarity. Simultaneously, the left side of the panel shows the current menu level the user is navigating, ensuring an intuitive and user-friendly experience.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924237286?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Interaction _ Swipe</h2>
            </div>
            <div class="body_block">
                <h3>For menus with more than four options, additional buttons are minimized and hidden. Activating the scroll feature is as simple as using two fingers, which then displays a scrollbar at the top of the panel. Users can scroll through the menu to easily locate their desired function.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924237278?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Interaction _ Back To</h2>
            </div>
            <div class="body_block">
                <h3>When users are in the third or fourth level of the menu, they can quickly return to the main menu using the 'Back To' feature. To activate this function, users simply extend a second finger while selecting the 'Back' button. <br> Additionally, by bending the second finger, users can choose the specific menu level they want to return to, ensuring a swift and intuitive navigation experience.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924237270?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>
    </div>

    <div class="main_section_container">
        <div class="section_title_container">
            <h1>Customizable</h1>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Final Design : Hi-Fi Prototype</h2>
            </div>
            <div class="body_block">
                <h3>To cater to the diverse preferences of as many users as possible, we have equipped Nebu with a 360-degree display screen. This feature allows users to customize Nebu's 'skin' to their liking, whether they prefer solid colors, images, or even animations. This customization ensures that every user has a unique experience.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/901211431?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
 
            <div class="flex center_center" style="flex:1;justify-content: space-between;">
                <div style="width:20%"><v-lazy-image :src="images['c1.png']" :src-placeholder="images['c1@s.png']"/></div>
                <div style="width:20%"><v-lazy-image :src="images['c2.png']" :src-placeholder="images['c2@s.png']"/></div>
                <div style="width:20%"><v-lazy-image :src="images['c1.png']" :src-placeholder="images['c1@s.png']"/></div>
                <div style="width:20%"><v-lazy-image :src="images['c2.png']" :src-placeholder="images['c2@s.png']"/></div>
            </div>
            <div class="flex center_center" style="flex:1;justify-content: space-between;">
                <div style="width:20%"><v-lazy-image :src="images['c5.png']" :src-placeholder="images['c5@s.png']"/></div>
                <div style="width:20%"><v-lazy-image :src="images['c6.png']" :src-placeholder="images['c6@s.png']"/></div>
                <div style="width:20%"><v-lazy-image :src="images['c7.png']" :src-placeholder="images['c7@s.png']"/></div>
                <div style="width:20%"><v-lazy-image :src="images['c8.png']" :src-placeholder="images['c8@s.png']"/></div>
            </div>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Challenge</h2>
            </div>
            <div class="body_block">
                <h3>Due to the tight project timeline, our team had to work on the hardware and UI designs simultaneously. So, before we decided on the final shape of the robot, I began designing the facial display for Nebu. I explored many possibilities, including detailed animal images and simple geometric combinations. Ultimately, to make Nebu appeal to as wide an audience as possible (as a companion robot for space commercial travel), we decided on a simple facial design with customizable skin displays.</h3>
            </div>
            <v-lazy-image :src="images['f1.png']" :src-placeholder="images['f1@s.png']"/>
            <v-lazy-image :src="images['f2.png']" :src-placeholder="images['f2@s.png']"/>

        </div>
    </div>


    <div class="main_section_container">
        <div class="section_title_container">
            <h1>Additional Applications</h1>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Caption Display & Navigation</h2>
            </div>
            <div class="body_block">
                <h3>To enhance communication between Nebu and its users, the words spoken by Nebu will be displayed in speech bubbles above its head. Additionally, when guiding users to their destination, Nebu will project a guiding line in front of the user, providing a more intuitive understanding of the direction to proceed.</h3>
            </div>
            <v-lazy-image :src="images['s1_2.png']" :src-placeholder="images['s1_2@s.png']"/>
        </div>

        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>UI Display</h2>
            </div>
            <div class="body_block">
                <h3>The holographic projection capability of Nebu takes user interaction to a new level by enabling the projection of complex UI content directly into the air. This innovation not only facilitates effortless reading but also simplifies the user's interaction with the system. By bringing interface into a more accessible, three-dimensional space, it enhances user engagement and ease of use.</h3>
            </div>
            <v-lazy-image :src="images['s1_3.png']" :src-placeholder="images['s1_3@s.png']"/>
        </div>
    </div>

    <div class="main_section_container">
        <div class="section_title_container">
            <h1>Next...</h1>
        </div>

        <div class="sub_section_container">
            <div class="body_block">
                <h3>Designing commercial space travel involves focusing on the visual and interactive aspects of the companion robot, Nebu, due to production time constraints. We plan to expand spaceship features and activities to meet diverse traveler needs and explore possible activities and accommodations on Mars with NebuLine. Looking ahead, we aim to further enhance the broader user experience of interstellar travel.</h3>
            </div>
            <v-lazy-image :src="images['s2_6.png']" :src-placeholder="images['s2_6@s.png']"/>
        </div>

        <div class="section_title_container">
            <h1>Thanks</h1>
        </div>

        <div class="sub_section_container">
            <div class="body_block">
                <h3>I would like to extend my special thanks to every member of Team Apogee. Your professionalism and exceptional design skills have significantly contributed to our project over the past fourteen weeks. I am deeply grateful for your dedication and the outstanding work each of you has delivered.</h3>
                <h3>Team：<br>Chakshing Lam ( IXD ) | Edward Tsai ( IXD ) | Zeo Zhang ( IND ) | Emily Tedja ( IND ) | Jiayu Wang ( GR )</h3>
            
            </div>
            <v-lazy-image :src="images['team.png']" :src-placeholder="images['team@s.png']"/>
        </div>
    </div>

    

</div>
    <the_footer :use_data="{
        index: store.index_array.findIndex((item)=> item.name == 'TRANSIT'),
        b_color:'#000000',
        f_color:'#ffffff',
        t_color:'#000000'
    }">
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
import VLazyImage from "v-lazy-image"
import vimeo_container from '../comps/vimeo_container.vue'
//引入hooks
import {animation_queue_route_in,animation_queue_route_out,animation_queue_before_route_in} from'../../hooks/use_art_page_functions'
//依赖引入
import {onMounted,onBeforeMount,ref} from 'vue' 
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';




const store = useStore()

const ani_el = ref(null)

    let page_id = store.index_array.findIndex((item)=> item.name == 'NEBU' )

    onBeforeMount(()=>{
        animation_queue_before_route_in(page_id,ani_el)
    })
    
    onMounted(()=>{
        animation_queue_route_in(page_id,ani_el)
    })

    onBeforeRouteLeave((to,from,next)=>{
        animation_queue_route_out(page_id,to,next)
    })

    // 使用 import.meta.globEager 同步导入图片
    const imageModules = import.meta.globEager('../../assets/art_pages/nebu/*');
    // 直接使用普通对象存储导入的图片路径
    const images = Object.entries(imageModules).reduce((acc, [path, module]) => {
        const imageName = path.split('/').pop();
        acc[imageName] = module.default;
        return acc;
    }, {});




    //overview_data数列
    let ov_data = {
        type:"Space Travel Companion Design",
        roll:"Team Apogee - My Roll: UX/UI Designer",
        time:"2023",
        detail:"Brand, Web, UX, Motion",
        apps:"Figma, After Effects, Cinema 4D, Blender"
    }



</script>

<style scoped>
.routin_ani_conatiner{
    width: 100%;
    position:relative;
}

.main_container{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    position:absolute;
    left:0;
    overflow: hidden;

    background: #1C1E20;
    --background-color:#1C1E20;
    --p-color-font-white-100:rgba(255, 255, 255, 0.95);
    --p-color-font-white-60: rgba(255, 255, 255, 0.75);
    --line-color:rgba(255, 255, 255, 0.15);

  
}

h1{
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    color:var(--p-color-font-white-100);

}
h2{
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    color:var(--p-color-font-white-100);
}
h3{
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 200%;
    color:var(--p-color-font-white-60);
}


h4{
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color:var(--p-color-font-white-60);
}
h6{
    font-size: 90px;
    font-style: normal;
    font-weight: 900;
    line-height: 90px;
    color:var(--p-color-font-white-60);
}
a{
    text-decoration: underline;
    cursor: pointer;
    color:inherit;
}
a:hover{
    color:var(--p-color-main)
}
/* -------------------------------------------------------containers */
.ov_section_container{
    width:100%;
    padding:80px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:40px
}

.ov_content_container{
    width:var(--content-width);
    max-width:var(--max-content-width);
    display: flex;
    flex-direction: column;
    gap:24px
}



.main_section_container{
    width:100%;
    padding:80px 0px 80px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:80px
}


.sub_section_container{
    width:var(--content-width);
    max-width:var(--max-content-width);
    display: flex;
    flex-direction: column;
    gap:40px
}
.section_title_container{
    width:var(--content-width);
    max-width:var(--max-content-width);
    display: flex;
    flex-direction: column;
}

.flex_container{
    width:100%;
    display: flex;
    gap:24px;
    justify-content: space-between;
    align-items: center;
}
.flex_container_reverse{
    width:100%;
    display: flex;
    flex-direction: row-reverse;
    gap:24px;
    justify-content: space-between;
    align-items: center;
}
.cards_container{
    width:100%;
    display: flex;
    gap:16px;
    justify-content: space-between;
    align-items: center;
}


.gap_40_container{
    display: flex;
    width:100%;
    flex-direction: column;
    gap:40px
}
.gap_16_container{
    display: flex;
    flex-direction: column;
    gap:16px
}

/* -----------------------------------------------------blocks */

.sub_title_block{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.body_block{
    width:100%;
    max-width: 650px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    gap:8px;
}

.body_block_highlight{
    width:100%;
    max-width: 650px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    gap:8px;
    border-left: var(--p-color-font-white-100) 6px solid;
}
    .body_block_highlight > h3{
        font-size: 25px;
        font-weight: 700;
        padding-left: 16px;
        color:var(--p-color-font-white-100)
    }



.iframe_block_flex_row {
    width:100%;
    max-width: 650px;
    flex:none;
    display: flex;
    flex-direction: column;
}
/* ----------------------------------------------------------cards */
.card_01{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:32px;
    padding:32px;
    /* background: black; */
    border-radius: 20px;
    align-self:stretch;
    flex:1;
}
    .card_01 > img{
        width:60px;
        height:60px;
    }

.card_02{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap:32px;
    padding:40px 32px;
    /* background: black; */
    border-radius: 20px;
    align-self:stretch;
    flex:1;
}
    .card_02 > img{
        width:80px;
        height:80px;
    }
    .card_02 > h3{
        text-align: center;
    }

.card_03{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:32px;
    padding:40px 32px;
    /* background: black; */
    border-radius: 20px;
    align-self:stretch;
    flex:1;
}
    .card_03 > img{
        width:80px;
        height:80px;
    }
    .card_03 > div > h2{
        font-weight: 700;
    }
    .card_03 > div > h3{
        line-height: 150%;
    }
/* ----------------------------------------------------------cards */
.list01{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:8px;
}
    .list01 > ul{
        list-style: number;
        border-left:2px solid var(--p-color-font-white-60);
        margin-left:32px;
        padding-left: 48px;
    }
    .list01 >ul> li{
        font-size: 20px;
        color:var(--p-color-font-white-60);
        line-height: 200%;
        font-weight: 400;
    }
/* ----------------------------------------------------------breaklines */
.breakline{
    width: 70%;
    max-width: 320px;
    height:0.5px;
    opacity: 0.3;
    background-color: var(--line-color);
}

/* ------------------------------------------------------tags */
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
/* ------------------------------------------------------flex system */
.flex{
    display: flex;
}
.flex_column{
    display: flex;
    flex-direction: column;
}
.gap_16{
    gap:16px;
}
.center_center{
    justify-content: center;
    align-items: center;
}
/* ------------------------------------------------------------scope */
.logo_box{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 125px;
    width:40%;
    background-color: black;
    border-radius: 20px;
    align-self:stretch;
}
    .logo_box> div{
        min-width: 60px;
        width:40%;
    }

.microani_container
{
    display: flex;
    flex-direction: column;
    gap:16px;
    padding:8px 0px;
    align-items: center;
    justify-content: center;
    width:100%;
}
.lottie_ani{
    width:100%;
    max-width: 250px;
    
}

@media (max-width: 1000px){


.ov_section_container{
    width:100%;
    padding:60px 0px;
    gap:40px
}    
h6{
    font-size: 60px;
    line-height: 60px; 

}
h1{
    font-size: 50px;
}
h2{
    font-size: 35px;
}
h3{
    font-size: 20px;
}
h4{
    font-size: 25px;
}
.main_section_container{
    padding:80px 0px 80px 0px;
    gap:80px
}
.sub_section_container{
    gap:40px
}

.flex_container_reverse,
.flex_container{
    flex-direction: column;
}
.gap_40_container{

    gap:16px
}
.cards_container{
    flex-direction: column;

}
.card_03{
    flex-direction: column;
}

}
@media (max-width: 800px){

.content_block_multi_grid{
    flex-direction: column;
}

.main_section_container{
    padding:40px 0px 40px 0px;
    gap:40px
}
.sub_section_container{
    gap:24px
}
h1{
    font-size: 40px;
}
h2{
    font-size: 24px;
}
h3{
    font-size: 17px;
}

}

</style>
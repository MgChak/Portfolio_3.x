<template>

<div class="main_container">
    <nebu/> 

    <div class = "ov_section_container bc_s">
        <div class="ov_content_container">
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
                <v-lazy-image class="sp_nasa_img" :src="images['nasa.png']" :src-placeholder="images['nasa@s.png']"/>

                <h3 style="text-align:center;">A collaborative project <br>sponsored by NASA.</h3>
            </div>
        </div>
        
        <v-lazy-image :src="images['background_2.jpg']" :src-placeholder="images['background_2@s.jpg']" class="sp_background_img"/>
    </div> 

    <div class = "section_container bc_s">
        <div class="content_container">
            
            
            <div class="content_block_flex_2">
                
                <div class="content_container_inflex">
                    <h1>My Main Tasks</h1>
                    <div class="content_block_list">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Environmental simulation <br>_ interaction & UX/UI design.</h3>
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

                <div class="breakline_h bc_w1"></div>

                <div class="content_container_inflex">
                    <h1>Team APOGEE</h1>
                    <div class="content_block_list">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Chakshing Lam ( IXD )</h3>
                        </div>
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Edward Tsai ( IXD )</h3>
                        </div>
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Zeo Zhang ( IND )</h3>
                        </div>
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Emily Tedja  ( IND )</h3>
                        </div>
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Jiayu Wang ( GR )</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div> 



    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_flex">
                <h1>NABU</h1>
                <link_button :prototype_links = 'case_study_button'/>
            </div>
            <div class="content_block_texts">
                <h2>Space Travel Companion</h2>
                <h3>This project is centered on designing for space tourism, anticipating a future around 2060 when orbital space travel around Earth becomes commonplace. We envision a time when people are not only orbiting Earth but also seeking to travel to Mars.
The primary objective of our project is to enhance the safety, ease, and comfort of tourists' journeys to Mars.</h3>
            </div>
            <v-lazy-image :src="images['o_1.png']" :src-placeholder="images['o_1@s.png']"/>
            <div class="content_block_texts">
                <h2>Holographic Projection</h2>
                <h3>Nebu, equipped with two retractable hemispherical holographic projectors, can create 360-degree holographic projections, greatly enhancing interaction possibilities.</h3>
            </div>
            <v-lazy-image :src="images['s1_1.png']" :src-placeholder="images['s1_1@s.png']"/>
            <div class="content_block_texts">
                <h2>Environmental Simulation</h2>
                <h3>Nebu uses holographic projections to simulate enjoyable scenes, reducing mental stress in enclosed spaces. Its AI analyzes user preferences to automatically select the most suitable scene.</h3>
            </div>
            <v-lazy-image :src="images['n1.png']" :src-placeholder="images['n1@s.png']"/>
        </div>
    </div> 


    <div class = "section_container">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>Environmental Simulation <br>_ Interaction & UX/UI</h1>
                <h3>In the process of environmental simulation, users have the flexibility to adjust the simulated scenes not only through voice command but also via a control panel. Nebu will project a control panel around the user's hand using holographic projection. Furthermore, Nebu will monitor the user's hand movements through a camera, enabling responsive interaction based on these gestures.</h3>
            </div>
            <link_button :prototype_links = 'vp_button_1'/>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/901211459?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>
        <v-lazy-image :src="images['background_2.jpg']" :src-placeholder="images['background_2@s.jpg']" class="sp_background_img"/>
    </div> 

    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_texts">
                <h2>Interaction _ Select</h2>
                <h3 >In the interface, users select options by pointing their fingers at the target buttons. The selected button enlarges, and its function is displayed above it for clarity. Simultaneously, the left side of the panel shows the current menu level the user is navigating, ensuring an intuitive and user-friendly experience</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924237286?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Interaction _ Swipe</h2>
                <h3 >For menus with more than four options, additional buttons are minimized and hidden. Activating the scroll feature is as simple as using two fingers, which then displays a scrollbar at the top of the panel. Users can scroll through the menu to easily locate their desired function.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924237278?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Interaction _ Back To</h2>
                <h3 >When users are in the third or fourth level of the menu, they can quickly return to the main menu using the 'Back To' feature. To activate this function, users simply extend a second finger while selecting the 'Back' button. <br> Additionally, by bending the second finger, users can choose the specific menu level they want to return to, ensuring a swift and intuitive navigation experience.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924237270?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>
    </div>

    <div class = "section_container">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_m">Customizable</h1>
                <h3>To cater to the diverse preferences of as many users as possible, we have equipped Nebu with a 360-degree display screen. This feature allows users to customize Nebu's 'skin' to their liking, whether they prefer solid colors, images, or even animations. This customization ensures that every user has a unique and personal companion robot experience.</h3>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901211431?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="nebu_skin"></iframe></div>
        </div>
        <v-lazy-image :src="images['background_2.jpg']" :src-placeholder="images['background_2@s.jpg']" class="sp_background_img"/>
    </div> 

    






    <!-- <div class = "section_container">
        <div class="content_container">
            
            <h1 >DEFINE PROBLEMS</h1>
            <v-lazy-image :src="images['p_1.png']" :src-placeholder="images['p_1@s.png']"/>
            <div class="content_block_texts">
                <h2 >Boredom and Isolation </h2>
                <h3 >During the extended journey, passengers may experience anxiety and boredom, longing for more entertaining ways to spend their time.</h3>
            </div>
            <div class="content_block_texts">
                <h2 >Health Issues in Zero Gravity</h2>
                <h3 >In zero gravity, passengers may feel physical discomfort and uncertainty about maintaining their health, worrying about the prolonged impact on their bodies.</h3>
            </div>
        </div>
        <v-lazy-image :src="images['background_2.jpg']" :src-placeholder="images['background_2@s.jpg']" class="sp_background_img"/>
    </div>  -->




    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>Additional Applications:</h1>
            </div>
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Caption Display & Navigation</h2>
                <h3 >To enhance communication between Nebu and its users, the words spoken by Nebu will be displayed in speech bubbles above its head. Additionally, when guiding users to their destination, Nebu will project a guiding line in front of the user, providing a more intuitive understanding of the direction to proceed.</h3>
            </div>
            <v-lazy-image :src="images['s1_2.png']" :src-placeholder="images['s1_2@s.png']"/>
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>UI Display</h2>
                <h3 >The holographic projection capability of Nebu takes user interaction to a new level by enabling the projection of complex UI content directly into the air. This innovation not only facilitates effortless reading but also simplifies the user's interaction with the system. By bringing interface into a more accessible, three-dimensional space, it enhances user engagement and ease of use.</h3>
            </div>
            <v-lazy-image :src="images['s1_3.png']" :src-placeholder="images['s1_3@s.png']"/>
        </div>


        <!-- <div class="content_container">
            <div class="content_block_flex">
                <h2>More Storyboards</h2>
                <link_button :prototype_links = 'case_study_button_dark'/>
            </div>
            <img_slideshow :slideshow_arr = 'highlight_arry'/> 
        </div> -->
    </div> 


   
    
    <div class = "section_container">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>Next...</h1>
                <h3>Designing a commercial space travel experience is a vast and challenging endeavor. Due to time constraints in production, our current focus has been primarily on the visual and interactive design of the companion robot Nebu. Beyond visual customization, we should consider expanding the range of features and activities available on the spaceship to cater to the diverse needs of travelers. Additionally, it would be beneficial to explore the types of activities and accommodations that NebuLine could offer on Mars, ensuring a well-rounded and satisfying experience for all. As for the future, we anticipate delving deeper into the broader aspects of interstellar travel, continually evolving and enhancing the user experience.</h3>
            </div>
            <link_button :prototype_links = 'case_study_button_dark'/>
            <v-lazy-image :src="images['s2_6.png']" :src-placeholder="images['s2_6@s.png']"/>
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>Thanks</h1>
                <h3>I would like to extend my special thanks to every member of Team Apogee. Your professionalism and exceptional design skills have significantly contributed to our project over the past fourteen weeks. I am deeply grateful for your dedication and the outstanding work each of you has delivered.</h3>
            </div>
            <v-lazy-image :src="images['team.png']" :src-placeholder="images['team@s.png']"/>
        </div>
        <v-lazy-image :src="images['background_2.jpg']" :src-placeholder="images['background_2@s.jpg']" class="sp_background_img"/>
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
import VLazyImage from "v-lazy-image"
import vimeo_container from '../comps/vimeo_container.vue'
//引入hooks
import {animation_queue_route_in,animation_queue_route_out,animation_queue_before_route_in} from'../../hooks/use_art_page_functions'
//依赖引入
import {onMounted,onBeforeMount} from 'vue' 
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';




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



    //高光功能
    let highlight_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [[images['h_1.png'],images['h_1@s.png']],"Caption Display & Navigation"],
            [[images['h_2.png'],images['h_2@s.png']],"Interface Display"],
            [[images['h_3.png'],images['h_3@s.png']],"Environmental Simulation"],
            [[images['h_4.png'],images['h_4@s.png']],"Environmental Simulation _ Interaction"],
        ]
    }    


    //研究总结
    let research_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [[images['r_1.png'],images['r_1@s.png']],"Research about robot shape"],
            [[images['r_2.png'],images['r_2@s.png']],"Tracking human physical staus in space"],
            [[images['r_3.png'],images['r_3@s.png']],"Tracking human physical staus in space"],
            [[images['r_4.png'],images['r_4@s.png']],"About the maintenance of robots"],
            [[images['r_5.png'],images['r_5@s.png']],"Issues might encounter in the spaceship"]
        ]
    }  

     //按钮依赖
    let case_study_button = {
        main_color:'#000000',
        sub_color:'var(--p-color-main)',
        width:180,
        text:'PRESENTATION',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=14-5230&t=QQI6hKGLwnpZBfID-1&scaling=min-zoom&page-id=14%3A3693&mode=design',
    }
    let case_study_button_dark = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:180,
        text:'PRESENTATION',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=14-5230&t=QQI6hKGLwnpZBfID-1&scaling=min-zoom&page-id=14%3A3693&mode=design',
    }
    let research_button_dark = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:157,
        text:'RESEARCH',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=14-6607&t=zi2twlrOCafqzPlO-1&scaling=min-zoom&page-id=14%3A6606&mode=design',
    }

    let vp_button_1 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901211459?share=copy',
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
    --p-color-font-white-60: rgb(171, 171, 171);
  
}

h1{
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px; 
    color:var(--p-color-main);

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
    font-weight: 400;
    line-height: 40px;
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

.ov_content_container{
    width:var(--content-width);
    max-width:var(--max-content-width);
    display: flex;
    flex-direction: column;
    gap:24px
}
.content_container{
    width:var(--content-width);
    max-width:var(--max-content-width);
    display: flex;
    flex-direction: column;
    gap:40px
}

.content_block_flex{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.content_block_flex_2{
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: top;
}
.content_container_inflex{
    max-width:var(--max-content-width);
    display: flex;
    flex-direction: column;
    width:340px;
    gap:40px;
    
}
.content_block_texts{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:8px
}
.content_block_texts_24{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:24px
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
    flex:none;
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
    background-color: black;
    z-index: 0;
}

.pp_container::after{
    content:'Loading...';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color:var(--p-color-font-white-60);
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
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
.breakline_h{
    height: 160px;
    max-width: 320px;
    width:0.5px;
    opacity: 0.3;
    margin-top: auto;
    margin-bottom: auto;
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
    .breakline_h{
        display: none;
    }

.ov_section_container{
    width:100%;
    padding:60px 0px;
    gap:40px
}    
h4{
    font-size: 60px;
    line-height: 60px; 

}
.content_block_flex{
    flex-direction: column;
    align-items: flex-start;
    gap:24px;
}
.content_block_flex_2{
    flex-direction: column;
    align-items: flex-start;
    gap:80px;
}

.content_block_buttons{
    flex-direction: column;

}

.team_m{
    flex-direction: row;
    gap:24px;
}
.team_img{
    width:65px;
    height:65px;
}
.teaminfo{
    justify-content: flex-start;
    align-items: flex-start;
}


}
</style>
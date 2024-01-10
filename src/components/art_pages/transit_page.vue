<template>

<div class="main_container" id="article_container_for_scroll">
    <transit/> 

    <div class = "overview_sec">
        <div style="{width:200px}">
            <img class="logo" src="../../assets/art_pages/transit/logo.svg" alt="">
        </div>
        <div class="overview_container">
            <div class="overview_cum1">
                <div class="overview overview_infor">
                    <h2>OVERVIEW</h2>
                    <h3>Transit it is an app that tracks bus routes in real time and provides directions for users. Most importantly, this app provides all the information you need for the route, such as arrival time for a specific bus, and names of each bus stop on the route, and even the number of stops for a specific bus ride.</h3>
                </div>
                <div class="type overview_infor">
                    <h2>TYPE OF PROJECT</h2>
                    <h3>App Redesign</h3>
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

    <!-- grid_img -->
    <div class="section_conatiner">
        <is_v_imgs>
            <img src="../../assets/art_pages/transit/grid.png" alt="">
        </is_v_imgs>
    </div>

    <!-- design_process_sec -->
    <div class="section_conatiner">
        <h1>DESIGN PROCESS</h1>
        <h3>This is a redesign project, so I believe before I start thinking about how to design, I should analyze the software to determine which strengths to retain and which weaknesses to address with targeted designs. After understanding the current state of the software, I will conduct background research to understand the industry landscape and my target user group, which will serve as the basis for my design. Testing and modification should be the longest and most time-consuming part of the process because it is a repetitive process. I will continue to cycle through this process until I produce a design that satisfies both me and the target users.</h3>
        <is_v_imgs>
        <img src="../../assets/art_pages/transit/process.jpg" alt="">
        </is_v_imgs>
    </div>

    <is_v_imgs>
            <img src="../../assets/art_pages/transit/poster_1.jpg" alt="">
    </is_v_imgs>
    
    <!-- HEURISTIC EVALUATION -->
    <div class="discover_research_sec section_conatiner">
        
        <h1>HEURISTIC EVALUATION</h1>
        
        <h3>Conducting a HEURISTIC EVALUATION is a crucial step in redesigning app, as it will aid in understanding the current issues and problems with the TRANSIT APP.</h3>
        <div class="section_inner_container">
            <h2>Usability</h2>
            <h3>TRANSIT can effectively complete tasks of route search and navigation, with a simple and straightforward user experience. However, the lack of other commonly used features such as voice navigation and saving frequently used routes can cause inconvenience for users.
            </h3>
            
            <h2>Functionality </h2>
            <h3>Currently, the main function of TRANSIT is to search for public transportation routes to reach destinations. This is a crucial feature for users who frequently use public transportation, such as backpackers or residents of bustling cities. The most standout feature is the real-time tracking of the location of public transportation.
            </h3>
            
            <h2>Accessibility</h2>
            <h3>There are no voice reminders for walking navigation. Very unfriendly to users who use walking guidance. 
            </h3>
            
            <h2>Visual Design  </h2>
            <h3>Outdated UI design. 
                <br>Having too many separate pages that are not necessary. There are many functions that can be grouped together on the same page.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/old.jpg" alt="">
            </is_v_imgs>
        </div>
        
    </div>

   

    <!-- RESEARCH SUMMARY -->
    <div class="discover_research_sec section_conatiner">
        
        <h1>RESEARCH SUMMARY</h1>
        <div class="section_inner_container">
            <h2>Target Audience</h2>
            <h3>Age: 25-34
                <br>Gender: Female 55%, Male 45%
                <br>Income Range: 25k-45k
                <br>Occupation: Employed
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/re_1.jpg" alt="">
            </is_v_imgs>
            <a href="https://www.apta.com/wp-content/uploads/Resources/resources/reportsandpublications/Documents/APTA-Who-Rides-Public-Transportation-2017.pdf" >By American Public Transportation Association, “Who Rides Public Transportation”</a>
        </div>

        <div class="section_inner_container">
            <h2>App Ratings</h2>
            <h3>3.6out of 5
                <br>The app store rating has shown a serious polarization. Some users consider the feature of being able to track the location of public transportation in real-time through the app as a great help and have given it a 5-star rating. On the other hand, another portion of users have given a 1-star rating mainly due to the app's difficulties in use and outdated UI design.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/re_2.jpg" alt="">
            </is_v_imgs>
            <a href="https://apps.apple.com/us/app/transit-navigation/id561866269#see-all/reviews" >From Apple App Store</a>
        </div>

        <div class="section_inner_container">
            <h2>U.S Public Transportation</h2>
            <h3>In recent years, the public transportation system in the United States has developed rapidly. From these bar graphs, we can see that the reach of rail and bus is expanding, especially in bustling cities where the demand for public transportation is huge. At the same time, many convenient facilities have been added to the public transportation system. For example, the addition of WIFI and GPS systems has made real-time tracking of applications possible.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/re_3.jpg" alt="">
            </is_v_imgs>
            <a href="https://www.apta.com/wp-content/uploads/APTA-2021-Fact-Book.pdf" >By American Public Transportation Association, “APTA 2021 Fact Book”</a>
        </div>

        <div class="section_inner_container">
            <h2>New Functions</h2>
            <h3>WALKING NAVIGATION FEATURE
                <br>To help people get to their destinations on time, according to the university's survey.  Transit Navigation app should add walking navigation.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/re_4.jpg" alt="">
            </is_v_imgs>
            <a href="https://www.apta.com/wp-content/uploads/APTA-2021-Fact-Book.pdf" >By American Public Transportation Association, “APTA 2021 Fact Book”</a>
            <h3>SAFTY FEATURE
                <br>According to surveys, crime rates also rise in areas with well-developed public transportation. This is a fact that cannot be ignored. In order to protect public transportation users, it is highly necessary to add relevant security features to the app.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/re_5.jpg" alt="">
            </is_v_imgs>
            <a href="https://www.metro-magazine.com/10111994/sexual-crime-and-harassment-on-public-transportation-a-study" >By A. Weinstein Agrawal, PhD A.Loukaitou-Sideris PhD”Sexual crime and harassment on public transportation: A study</a>
            <a href="https://collected.jcu.edu/cgi/viewcontent.cgi?article=1003&context=jep" >By Morgan Neiss “Does Public Transit Affect Crime? The Addition of a Bus Line in Cleveland</a>
        </div> 
    </div>


    <!-- PERSONAS -->
    <div class="overflow_cutoff">
        <div class="discover_research_sec section_conatiner">
            
            <h1>PERSONAS</h1>
            <link_button :prototype_links = 'prototype_t'/>
            <img_slideshow :slideshow_arr = 'pc_arr_02'/> 
        
        </div>
    </div>

     <!-- PERSONAS -->
     <div class="overflow_cutoff">
        <div class="discover_research_sec section_conatiner">
            
            <h1>Video Test</h1>
            
            <img_slideshow :slideshow_arr = 'viedo_test_arry'/> 
        
        </div>
    </div>
   

    <is_v_imgs>
            <img src="../../assets/art_pages/transit/poster_2.jpg" alt="">
    </is_v_imgs>

     <!-- PERSONAS -->
     <div class="overflow_cutoff">
        <div class="discover_research_sec section_conatiner">
            
            <h1>Video Tes1111t</h1>

            <link_button :prototype_links = 'prototype_t'/>
            
            <img_slideshow :slideshow_arr = 'viedo_test_arry2'/> 
        
        </div>
    </div>

    <!-- PROBLEMS AND SOLUTIONS -->
    <div class="section_conatiner">
        <h1>PROBLEMS AND SOLUTIONS</h1>
        <h3>The two main issues for Transit currently are a lack of visual design and functionality. Although having strong functionality is essential for an app, according to HCI research, a well-designed visual design can make users perceive the app as more reliable. Users are more likely to choose an app with a visually appealing UI design over one with just strong functionality. This is a critical issue for Transit, as it is not able to stand out from its competitors with a superior UI design. With more and more competitors adding real-time location tracking, Transit is further losing its competitiveness. A weakness in functionality is another problem for Transit. Its single function cannot meet all of the users' needs when using public transportation. That's why in this redesign, I plan to design a brand new visual system for Transit and add more functions to ensure that Transit can meet all the needs of users when using public transportation, such as route saving, payment, security, and others.</h3>
    </div>

    <!-- FEATURE REDESIGN_ROUT NAVIGATION -->
    <div class="design_process_sec section_conatiner">

        <h1>FEATURE REDESIGN_ROUT NAVIGATION
        </h1>

        <h3>
            The navigation function is the core of Transit, and I hope to provide users with a fast and smooth user experience in this process. Firstly, I modified the layout of the home page, placing the operating area at the bottom of the screen, which will be more helpful for users to operate. At the same time, I also redesigned the display method of the search results, in order to allow users to quickly obtain useful information. More detailed information will be displayed in the prototype and subsequent text and graphics.
        </h3>

        <prototype_links :prototype_links = 'prototype_1'/>

        <div class="video_conatiner_s">
            <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/804028192?h=be0bf6d758&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="transit_p_01"></iframe></div>
        </div>

    </div>



    <the_footer :index = "store.index_array.findIndex((item)=> item.name == 'MEOW_MIND' )">
        <cat/>
    </the_footer>

    




    <p>==end==</p>

</div>

    
</template>

<script setup>
//组件引入
import transit from'../main_pages/works_thum_cards/transit.vue'
import cat from'../main_pages/works_thum_cards/cat.vue'
import prototype_links from'../comps/prototype_links.vue'
import link_button from'../comps/link_button.vue'
import is_v_imgs from'../comps/is_v_imgs.vue'
import img_slideshow from '../comps/img_slideshow.vue'
import the_footer from '../footer.vue'
//引入图片
import persona_1 from '../../assets/art_pages/transit/slideshow/persona_1.jpg'
import persona_2 from '../../assets/art_pages/transit/slideshow/persona_2.jpg'
import poc_20 from '../../assets/art_pages/transit/slideshow/poc_20.jpg'
import poc_21 from '../../assets/art_pages/transit/slideshow/poc_21.jpg'
//引入视频
import vt1 from '../../assets/art_pages/transit/slideshow/video/vt1.mp4'
import vt2 from '../../assets/art_pages/transit/slideshow/video/vt2.mp4'
import vt3 from '../../assets/art_pages/transit/slideshow/video/vt3.mp4'


//引入hooks
import {animation_queue_route_in,animation_queue_route_out,animation_queue_before_route_in} from'../../hooks/use_art_page_functions'
//依赖引入
import { computed,onMounted,onBeforeMount} from 'vue' 
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';


const store = useStore()

    let page_id = store.index_array.findIndex((item)=> item.name == 'TRANSIT' )

    onBeforeMount(()=>{
        animation_queue_before_route_in(page_id)
    })

    onMounted(()=>{
        animation_queue_route_in(page_id)
    })

    onBeforeRouteLeave((to,from,next)=>{
        animation_queue_route_out(page_id,to,next)  
    })




    //轮播图使用数列

    let pc_arr_02 = {//personas
        color:'#00FFE0',
        type:'img',
        contents:[
            [persona_1,"1Use gestures to bring up the control interface."],
            [persona_2,"2Use gestures to bring up the control interface."],
            [poc_20,"3Use gestures to bring up the control interface."],
            [poc_21,"4Use gestures to bring up the control interface."]
        ]
    }

    
    let viedo_test_arry = {
        color:'#00FFE0',
        type:'video',
        resize:true,
        contents:[
            [vt1,"11Use gestures to bring up the control interface.",persona_1],
            [vt2,"22Use gestures to bring up the control interface.",persona_1],
            [vt3,"33Use gestures to bring up the control interface.",persona_1]
        ]
            
    }

    var tt_1 = "https://player.vimeo.com/video/901211198?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

    var tt_2 = "https://player.vimeo.com/video/901211183?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

    var tt_3 = "https://player.vimeo.com/video/901211174?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

    let viedo_test_arry2 = {
        color:'#000000',
        type:'vimeo',
        resize:true,
        contents:[
            [tt_3,"12Use gestures to bring up the control interface.",persona_1],
            [tt_2,"13Use gestures to bring up the control interface.",persona_1],
            [tt_1,"14Use gestures to bring up the control interface.",persona_1]
        ]
            
    }


    //按钮依赖
    let prototype_1 = {
        color:'#00FFE0',
        text:'USER FLOW TASK 1-1 : Start a road navigation to company.',
        v_link:'https://vimeo.com/804028192',
        f_link:'https://www.figma.com/proto/3HQtCULnLSnwzNyZ61Hyw9/aau_2021f_wnm606_final_TRANSIT?node-id=1206%3A21618&scaling=scale-down&page-id=1086%3A20271&starting-point-node-id=1206%3A21618&show-proto-sidebar=1',
    }
    let prototype_2 = {
        color:'#00FFE0',
        text:'USER FLOW TASK 2-1 : Pay with yellow visa card.',
        v_link:'https://vimeo.com/804028251',
        f_link:'https://www.figma.com/proto/3HQtCULnLSnwzNyZ61Hyw9/aau_2021f_wnm606_final_TRANSIT?node-id=1086%3A20272&scaling=scale-down&page-id=1086%3A20271&starting-point-node-id=1086%3A20272&show-proto-sidebar=1',
    }
    let prototype_3 = {
        color:'#00FFE0',
        text:'USER FLOW TASK 3-1 : Share real-time location with mom and dad.',
        v_link:'https://vimeo.com/804035918',
        f_link:'https://www.figma.com/proto/3HQtCULnLSnwzNyZ61Hyw9/aau_2021f_wnm606_final_TRANSIT?node-id=1086%3A20272&scaling=scale-down&page-id=1086%3A20271&starting-point-node-id=1086%3A20272&show-proto-sidebar=1',
    }


    let prototype_t = {
        color:'#00FFE0',
        main_color:'#00FFE0',
        sub_color:'#000000',
        width:196,
        text:'Video Prototype',
        link:'https://vimeo.com/804035918',
    }
    
    

</script>

<style scoped>

.main_container{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:180px;
    overflow: hidden;

    position:absolute;
    left:0;

    background: rgb(44, 44, 47);
    /* top 1s cubic-bezier(0.36, 0.36, 0.31, 1) */
}

h1{
    /* Section Title */
    
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 60px;
    /* or 100% */
    /* #8CDB4D */

    margin-bottom:-40px;

    color: #00FFE0;;

}
h2{
   
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
    
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    max-width: 1400px;
    /* or 188% */
    /* light_main_60% */
    color: rgba(248, 251, 246, 0.85);
}
a{
    width:100%;
    text-align: right;
    color:rgba(248, 251, 246, 0.45);
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
    max-width:1000px ;
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
.overflow_cutoff{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
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

@media (max-width: 1000px){
    .main_container{
        gap:80px;
    }
    .section_conatine{
        gap:40px;
    }
    .section_inner_container{
        gap:20px;
    }
    .overview_container{
        flex-direction: column;
        gap:40px;
        width: var(--content-width)
    }
}
</style>
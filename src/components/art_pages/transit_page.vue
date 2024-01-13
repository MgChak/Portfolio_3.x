<template>

<div class="main_container">
    <transit/> 

    <div class = "ov_section_container bc_s">
        <div class="ov_content_container">
            <h4>LET'S GO</h4>
            <div class="breakline bc_w1"></div>
            <overview_info :ov_data="ov_data" />
            <div class="breakline bc_w1"></div>
            <h3>Let's Go is a versatile travel planning app featuring AI-assisted itinerary creation and a dynamic online community, all designed to simplify and enhance the process of organizing travel plans.</h3>
        </div>
    </div>  

    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>OVERVIEW</h1>  
                <h3>This redesign project focuses on enhancing Transit, an public transportation navigation app. Originally adept at assisting users in efficiently planning their routes and time, the app adapts to user habits, automatically suggesting routes and notifying users about changes in bus lines with alternative plans. In this redesign, I have incorporated two significant additions: an integrated payment system and enhanced safety features. The new payment system simplifies ticket purchasing and transit card management, while the safety features, including real-time location sharing, ensure a more secure environment for users in public transportation. These improvements aim to elevate the overall user experience, making Transit more intuitive, convenient, and safe.</h3>
            </div>
            <img class="no_raius" src="../../assets/art_pages/transit/o_1.png" alt="">
            <img class="no_raius" src="../../assets/art_pages/transit/o_3-1.png" alt="">
            <img class="no_raius" src="../../assets/art_pages/transit/o_3.png" alt="">
        </div>
    </div> 

    <div class = "section_container bc_m">
        <div class="content_container">
            <h1 class="fc_s">LOGO & COLORS</h1>
            <img class="cardshadow" src="../../assets/art_pages/transit/logo.png" alt="">
        </div>
    </div> 


    <div class = "section_container bc_s">
        <div class="content_container">
            <h1>FEATURE HIGHLIGHTS</h1>
            <img_slideshow :slideshow_arr = 'highlight_arry'/> 
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">OLD VERSION UI SCREENSHOT</h1>
                <img src="../../assets/art_pages/transit/p_1.png" alt="">
            </div>
        </div>
        <div class="breakline bc_s center"></div>
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">DEFINE PROBLEMS & SOLUTIONS </h1>
                <h3 class="fc_s">The main challenges for Transit are its visual design and functionality. While functionality is crucial, HCI research indicates that a visually appealing design enhances user perception of an app's reliability. Users often prefer apps with attractive UI designs over those with mere functionality. This is a critical issue for Transit, as it struggles to distinguish itself with superior UI design amidst competitors, many of whom are incorporating real-time location tracking, further eroding Transit's competitive edge. Additionally, Transit's limited functionality fails to address all user needs in public transportation. In this redesign, I plan to develop a new visual system for Transit and introduce additional features to fulfill comprehensive user needs in public transportation, including route saving, payment, security, and more.</h3>
            </div>
        </div>
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
            <div class="content_block_texts_24">
                <h1 class="fc_s">FEATURE REDESIGN<br>_ROUT NAVIGATION</h1>
                <h3 class="fc_s">The navigation feature is central to Transit, and my aim is to ensure a swift and seamless user experience. To achieve this, I restructured the home page layout by positioning the operation area at the bottom of the screen, enhancing user accessibility. Additionally, I revamped the presentation of search results to enable users to quickly access pertinent information. </h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_1'/>
                <link_button :prototype_links = 'fp_button_1'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901211038?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="t_p_road"></iframe></div>
        </div>
    </div> 


    <div class = "section_container bc_b">
        <div class="content_container">
            <h1>TEST RESULT <br>_HOME PAGE</h1>
            <div class="content_block_texts">
                <h2>A/B Test Round 01</h2>
                <h3>This test was conducted to determine the optimal layout for the app's home page, involving two rounds. In the first round, participants were presented with two layouts: Option A, featuring a hidden menu bar accessed via a hamburger icon, and Option B, utilizing a traditional bottom navigation bar. While Option A offered more display space for other content, the test results showed a clear preference for Option B's thicker bottom navigation bar. This preference was attributed to its intuitive design and alignment with user habits. Critically, Option B enabled one-step page switching, whereas Option A's foldable navigation required at least two steps, impacting user efficiency.</h3>
            </div>
            <img src="../../assets/art_pages/transit/s1_1.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>A/B Test Round 02</h2>
                <h3>For the second round of testing, I focused on the placement of the navigation bar, presenting two options: a traditional top navigation bar and a more modern bottom navigation bar. Despite the top bar's alignment with traditional user habits, the bottom bar was favored by users. Its popularity stemmed from the convenience it offered, allowing users to access functions without moving their hands to the top of the screen, thus facilitating easier and quicker use of the search function.</h3>
            </div>
            <img src="../../assets/art_pages/transit/s1_2.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Further improvement</h2>
                <h3>The first two rounds of testing established the layout for the menu and search bars. For a considerable period, I maintained this design for the home page without alterations. However, the addition of a route saving function to the search page, followed by usability testing, marked a significant change. User feedback was overwhelmingly positive, particularly among those who frequently reused saved routes, like daily commuters and students. This led me to consider relocating the saved route feature to the home page, aiming to reduce the number of steps needed for users to initiate navigation.</h3>
            </div>
            <img src="../../assets/art_pages/transit/s1_3.png" alt="">
            <img src="../../assets/art_pages/transit/s1_4.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <h1>TEST RESULT<br>_ROAD CARDS</h1> 
            <div class="content_block_texts">
                <h2>Key feedback / Problem</h2>
                <h3>In the initial design, I used color coding to indicate expected arrival times, with red for the fastest and green for the slowest. The information cards were small to display as many search results as possible, showing only essential information. User testing, however, revealed dissatisfaction with this approach. The color coding for time was confusing, and users desired more key information on the cards.</h3>
                <h3>Consequently, I revisited the design of the search list. Research indicated that public transportation route searches typically yield few results, negating the need for smaller information cards to display more outcomes. To enhance user comprehension, I decided to increase the size of the information cards. Moreover, I found that using color-differentiated icons to represent various types of public transport was more effective and intuitive for users than the previous color scheme for arrival times.</h3>
            </div>   
            <img src="../../assets/art_pages/transit/s1_4-1.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Key feedback / Problem</h2>
                <h3>In my initial design, the route detail page featured an expandable card mode. Clicking on a search result's information card would reveal more detailed route information within the same view, avoiding the need to navigate to a new page. However, user testing indicated a preference for maps on the detail page. Users found maps more intuitive than text for understanding routes. Consequently, I redesigned the detail page to incorporate maps, enhancing the user's ability to visually grasp the route information.</h3>
            </div>   
            <img src="../../assets/art_pages/transit/s1_5.png" alt="">
        </div>

        <div class="content_container">
            <h3>The redesigned detail page is now a standalone page, featuring an adjustable map display. Users can resize the map by dragging the bottom information bar, allowing for a customizable view.</h3>  
            <img src="../../assets/art_pages/transit/s1_6.png" alt="">
        </div>

        <div class="content_container">
            <h3>In the public transportation route information display, excessive stop names are hidden to conserve space. These collapsed names appear in a specialized format, and users can expand them by clicking on the three dots icon.</h3>  
            <img src="../../assets/art_pages/transit/s1_7.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <h1>TEST RESULT<br>_NAVIGATION</h1> 
            <div class="content_block_texts">
                <h2>Key feedbacks & Improvement</h2>
                <h3>The navigation page of the app underwent a redesign following user testing. In the initial design, all functions were placed at the bottom of the screen. Testing revealed that this layout, while not content-heavy, appeared cluttered to users due to the uniform design of all elements, making it difficult to distinguish between them at a glance. To address this, the new design reorganizes and differentiates the content using varied display methods.</h3>
                <h3>Additionally, the original design required users to return to the main page to access other functions like "payment" and "sharing" during navigation, which was cumbersome. The updated version introduces side buttons, enabling users to quickly access these functions directly from the navigation interface.</h3>
            </div>   
            <img src="../../assets/art_pages/transit/s1_8.png" alt="">
            <img src="../../assets/art_pages/transit/s1_9.png" alt="">
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">NEWLY ADDED FEATURE 01<br>_PAYMENT</h1>
                <h3 class="fc_s">Integrating a payment feature in Transit enables users to bypass the need to search for their wallet or card upon the vehicle's arrival. Paying with a phone aligns with the evolving trends in payment methods. Most significantly, electronic cards eliminate the hassle associated with losing and reapplying for physical cards.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_2'/>
                <link_button :prototype_links = 'fp_button_2'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901211014?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="t_p_pay"></iframe></div>
        </div>
    </div> 

    <div class = "section_container bc_b">
        <div class="content_container">
            <h1>TEST RESULT <br>_PAYMENT</h1>
            <div class="content_block_texts">
                <h2>Two rounds of A/B Test</h2>
                <h3>This test, conducted to determine the app's home page layout, consisted of two rounds. In the first, users compared two designs: Option A with a hidden menu accessed via a hamburger icon, and Option B with a traditional bottom navigation bar. Despite Option A providing more space for content, users clearly favored Option B for its thicker, intuitive bottom bar and compatibility with user habits. Importantly, Option B allowed for one-step page switching, while Option A's collapsible menu necessitated at least two steps, affecting user efficiency.</h3>
            </div>
            <img src="../../assets/art_pages/transit/s2_1.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Visual improvement</h2>
                <h3>During the card window design process, I experimented with various aspects that wouldn't impact functionality but aimed to enhance the visual experience. In the final design, a semi-transparent black background was added behind the card number to ensure the legibility of the information. Additionally, I detached the scan button from the card, ensuring it remains stationary and doesn't shift with card switches.</h3>
            </div>
            <img src="../../assets/art_pages/transit/s2_2.png" alt="">
        </div>      
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">NEWLY ADDED FEATURE 02<br>_REAL-TIME LOCATION SHARE</h1>
                <h3 class="fc_s">The design of the sharing function was conceived to improve user safety in public transportation. It enables users to share their real-time location via a unique URL, which can be accessed through any browser, eliminating the need for recipients to download the Transit app. This feature is intended to deter criminal activity and increase the cost of committing a crime, thereby enhancing user safety.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_3'/>
                <link_button :prototype_links = 'fp_button_3'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901211073?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="t_p_safe"></iframe></div>
        </div>
    </div> 

    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>DESIGN DETAIL <br>_REAL-TIME LOCATION SHARE</h1>
                <h3>The addition of the sharing function aims to safeguard user safety by allowing others to view the user's real-time location. In designing this feature, I prioritized caution and user awareness. A confirmation page serves as the final step before activation, displaying the names and phone numbers of authorized contacts. To ensure users don't overlook this crucial information, I incorporated a countdown button, preventing hasty actions and encouraging careful review.</h3>
            </div>
            <img src="../../assets/art_pages/transit/s2_1.png" alt="">
        </div>

        <div class="content_container">
            <h3>Upon activating the sharing function, the share button changes to a prominent red color. This serves as a constant reminder to the user that their location is being shared.</h3>
            <img src="../../assets/art_pages/transit/s2_2.png" alt="">
        </div>      

        <div class="content_container">
            <h3>To prioritize user safety, the feature remains active even after the user reaches their destination and doesn't turn off automatically. However, Transit regularly prompts the user with pop-up windows to inquire if they wish to stop sharing their location information.</h3>
            <img src="../../assets/art_pages/transit/s3_2.png" alt="">
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">NEXT...</h1>
                <h3 class="fc_s">As technology continually evolves, the smart devices people carry are no longer limited to just smartphones. If this project were to be expanded further, I would like to develop an app version of Transit for smartwatches, enabling users to use navigation services more effortlessly. Looking even further into the future, Transit could potentially have a VR version. This would allow navigation information to naturally float in front of the users, enhancing their experience with advanced, immersive technology.</h3>
            </div>
            <img src="../../assets/art_pages/transit/next.png" alt="">
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
import overview_info from '../comps/overview_info.vue'
import link_button from'../comps/link_button.vue'
import img_slideshow from '../comps/img_slideshow.vue'
import the_footer from '../footer.vue'
//img引入
import r1 from "../../assets/art_pages/transit/r_1.png"
import r2 from "../../assets/art_pages/transit/r_2.png"
import r3 from "../../assets/art_pages/transit/r_3.png"
import r4 from "../../assets/art_pages/transit/r_4.png"




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


        //overview_data数列
        let ov_data = {
        type:"App Redesign project",
        roll:"Solo designer",
        time:"2022 - 2023",
        detail:"Brand, Web, UX, Motion"
    }



    //高光功能

    let v_1 = "https://player.vimeo.com/video/901211174?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_2 = "https://player.vimeo.com/video/901211198?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_3 = "https://player.vimeo.com/video/901211183?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"


    let highlight_arry = {
        color:'var(--p-color-main)',
        type:'vimeo',
        resize:true,
        contents:[
            [v_1,"Route Detail"],
            [v_3,"Payment"],
            [v_2,"Location Share"],
        ]
    }    


    //研究总结
    let research_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [r1,"U.S public transportation rasearch"],
            [r2,"Walking navigation rasearch"],
            [r3,"Public safety rasearch"],
            [r4,"Public transportation users Summary"],
        ]
    }  

     //按钮依赖
    let case_study_button_dark = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:158,
        text:'RESEARCH',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=15-31111&t=bMrzmrL1eDR0NKJh-1&scaling=contain&page-id=15%3A29752&mode=design',
    }

    let vp_button_1 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901211038?share=copy',
    }

    let fp_button_1 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=15-16511&t=3vja6HfrWkhfmFSp-1&scaling=scale-down&page-id=15%3A15458&starting-point-node-id=15%3A16511&mode=design',
    }

    let vp_button_2 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901211014?share=copy',
    }

    let fp_button_2 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=15-19902&t=QTjZC4BQvvSXUDwe-1&scaling=scale-down&page-id=15%3A15459&mode=design',
    }

    let vp_button_3 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901211073?share=copy',
    }

    let fp_button_3 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=36-10006&t=ceT7pfIR5yBYHIMo-1&scaling=scale-down&page-id=15%3A15460&mode=design',
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

    background: black;

    --p-color-main:#67F1E0;
    --p-color-sub:#141C1B;
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
    gap:80px
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

.content_block_buttons{
    width:100%;
    display: flex;

    gap:24px
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





@media (max-width: 800px){

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

.content_block_buttons{
    flex-direction: column;

}


}
</style>
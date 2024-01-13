<template>

<div class="main_container">
    <letsgo/> 

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
            <div class="content_block_flex">
                <h1>OVERVIEW</h1>
                <link_button :prototype_links = 'case_study_button'/>
            </div>
            <h3>Let's Go is a travel planning application designed to assist users in creating, searching, and sharing multi-person travel plans. Utilizing the latest AI technology, the app becomes smarter, aiding users in crafting travel plans during chats with their travel companions and offering packing suggestions based on their itineraries. Additionally, users can share their travel plans with other travelers in the online community for inspiration and advice. Let Let's Go be your ultimate travel companion for your next journey.</h3>
            <img class="no_raius" src="../../assets/art_pages/letsgo/o_1.png" alt="">
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <h1 class="fc_s">LOGO & COLORS</h1>
            <img class="cardshadow" src="../../assets/art_pages/letsgo/logo.png" alt="">
        </div>
    </div> 



    <div class = "section_container bc_s">
        <div class="content_container">
            <div class="content_block_flex">
                <h1>FEATURE HIGHLIGHTS</h1>
                <link_button :prototype_links = 'case_study_button_dark'/>
            </div>
            <img_slideshow :slideshow_arr = 'highlight_arry'/> 
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <img src="../../assets/art_pages/letsgo/p1.png" alt="">
            <div class="content_block_texts_24">
                <h1 class="fc_s">DEFINE PROBLEMS</h1>
                <h3 class="fc_s">Planning group travel can be challenging for users due to the lack of adequate tools and resources. As a result, users often have a poor experience when trying to plan trips with a team.</h3>
            </div>
        </div>
        <div class="breakline bc_s center"></div>
        <div class="content_container">
            <img src="../../assets/art_pages/letsgo/p2.png" alt="">
            <div class="content_block_texts_24">
                <h1 class="fc_s">HOW MIGHT WE STATEMENT</h1>
                <h3 class="fc_s">How might we help young adults with expendable income for travel, use mobile technology to be well prepared for a group trip? </h3>
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
                <h1 class="fc_s">PREMARY FEATURE 01<br>_CREATE NEW TRIP PLAN</h1>
                <h3 class="fc_s">Users can effortlessly create a travel plan in Let's Go and begin adding their favorite events. During the creation process, they can also invite friends who will be traveling with them to join in shaping a unique and collaborative travel plan.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_1'/>
                <link_button :prototype_links = 'fp_button_1'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901210479?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="l_p_create"></iframe></div>
        </div>
    </div> 



    <div class = "section_container bc_b">
        <div class="content_container">
            <h1>USEABILITY TEST<br>_INVITE FRIENDS</h1>
            <div class="content_block_texts">
                <h2>Key feedback / Problems</h2>
                <h3>In both the collapsed and expanded versions of the card, the top part remains the same.  If the event name is lengthy, it will still be truncated in the expanded version.  Therefore, showcasing a larger image of the event in the expanded card version is more effective.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s1_1.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Improvements</h2>
                <h3>Compared to the old version where inviting friends and creating travel plans were separated into two different pages, the updated version now includes both on one page and displays the avatars of the top 10 friends in the user's friend list. Users can select friends by clicking on their avatars. If the desired friend is not among the top 10 displayed, users can browse the complete list of friends by clicking on the MORE icon at the bottom of the list.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s1_2.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>DESIGN EXPLORATIONS <br>_ADDING LOADING ANIMATION</h1>    
                <h3>Compared to the old version where inviting friends and creating travel plans were separated into two different pages, the updated version now includes both on one page and displays the avatars of the top 10 friends in the user's friend list. Users can select friends by clicking on their avatars. If the desired friend is not among the top 10 displayed, users can browse the complete list of friends by clicking on the MORE icon at the bottom of the list.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s1_3.png" alt="">
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">PREMARY FEATURE 02<br>_AI CHAT ASSISTANT</h1>
                <h3 class="fc_s">The AI chat assistant will automatically generates or adjusts travel plans based on users' chat content in Let's Go. As users discuss their travel ideas using the group chat feature, an AI assistant continuously scans the conversation, creating viable travel plans based on the group conversation. Users can then vote to decide whether to include the AI-generated content in their travel itinerary.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_2'/>
                <link_button :prototype_links = 'fp_button_2'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901210458?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="l_p_ai"></iframe></div>
        </div>
    </div> 


    <div class = "section_container bc_b">
        <div class="content_container">
            <h1>A/B TEST <br>_AI ASSISTANT POP UP</h1>
            <div class="content_block_texts">
                <h2>A/B Test Round 1</h2>
                <h3>In the first round of testing, most of the testers were more inclined towards option A because it did not interrupt the user's operation. Option B, on the other hand, completely disrupted the user's workflow and forced them to make a decision right away. This high level of intrusiveness made users resistant to this feature, especially since the window was triggered without any input from the user, and they had no advance warning that the window would appear.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s2_1.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>A/B Test Round 2</h2>
                <h3>After determining that users preferred a design with lower intrusiveness, I kept and modified option A, and designed a new option B with lower intrusiveness. Both options do not interrupt the user's current operation. I conducted new tests with these two options. However, the results did not provide a clear answer because the two options had different functionalities. Option B had some additional functions, which gave it a natural advantage, and this should not have been the case in this test.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s2_2.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>A/B Test Round 3</h2>
                <h3>In order to ensure the accuracy of the test results, I made further modifications to options A and B, and conducted a third round of testing. This time, both options had exactly the same functionality, with the only difference being in their display. Option A emerged as the winner in this test, so I ultimately decided to use option A as the final design</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s2_3.png" alt="">
            <img src="../../assets/art_pages/letsgo/s2_4.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <h1>USABILITY RESULT<br>_AI ASSISTANT POP UP</h1>
            <div class="content_block_texts">
                <h2>Improvements</h2>
                <h3>The new version of the confirmation page will display more detailed information and includes a button for users to directly navigate to the corresponding position in the event list.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s2_5.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <h1>USEABILITY TEST<br>_EVENT CARDS</h1>
            <div class="content_block_texts">
                <h2>Key feedback / Problems</h2>
                <h3>In both the collapsed and expanded versions of the card, the top part remains the same.  If the event name is lengthy, it will still be truncated in the expanded version.  Therefore, showcasing a larger image of the event in the expanded card version is more effective.</h3>
            </div>
            <div class="content_block_texts">
                <h2>Solutions</h2>
                <h3>I redesigned the top section to allocate more space for the event name, ensuring the full title is displayed.  Tags were relocated to the information area to provide more room for a larger event image.  Additionally, I replaced 'Move' with 'Date' for clarity, and introduced a rearrange icon to the list.  The 'Add tickets and reservation' feature was renamed to 'Attach' and its icon was changed to enhance user understanding of its functionality</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s2_6.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>DESIGN EXPLORATIONS <br>_INFORMATION CARDS</h1>    
                <h3>In the original design, lodging and event cards shared a similar visual style. While this was functional and didn't hinder usage, I realized that lodging and events are distinct types of information. Events change daily, but lodging may remain the same, leading to redundant display of information at the list's top. Consequently, I modified the lodging design to occupy minimal space and introduced color-coding for immediate recognition as lodging information.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s2_7.png" alt="">
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">PREMARY FEATURE 03<br>_PACKING ASSISTANT</h1>
                <h3 class="fc_s">The packing assistant feature provides users with a recommended packing list based on the weather forecast of their travel destination. For instance, in cold regions, Let's Go suggests bringing warm clothing. Additionally, users can utilize the luggage scanning function, where Let's Go identifies items in the camera view and automatically checks them off the list, aiding in efficient travel preparation.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_3'/>
                <link_button :prototype_links = 'fp_button_3'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901210506?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="l_p_scan"></iframe></div>
        </div>
    </div> 

    <div class = "section_container bc_b">
        <div class="content_container">
            <h1>USEABILITY TEST <br>_SCANING</h1>
            <div class="content_block_texts">
                <h2>Improvements</h2>
                <h3>In the new version, the entire page has been redesigned with a broader scanning range than the previous version. Additionally, a prompt stating 'Please do not stack the items on top of each other' has been added above the scanning button.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s3_1.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <h1>USEABILITY TEST <br>_ SECTION DISPLAY</h1>
            <div class="content_block_texts">
                <h2>Improvements</h2>
                <h3>The latest version features a redesigned weather display, now presenting daily weather information for the entire travel plan in a list format, rather than only for the first day. Furthermore, the weather forecast and recommendation list have been combined into a horizontally scrollable component, substantially freeing up space to display the packing list.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s3_2.png" alt="">
        </div>
       
    </div>


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">PREMARY FEATURE 04<br>_TRAVEL COMMUNITY</h1>
                <h3 class="fc_s">The primary goal of this feature is to provide users with a platform to share, find, and store their travel plans. The homepage automatically recommends popular travel plans or destinations tailored to the user's travel preferences. On the search results page, users can conveniently swipe through images included in the plans. Furthermore, the Plan Details page features a system-generated summary of the plan's highlights at the top, enabling users to quickly ascertain whether the plan aligns with their needs.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_4'/>
                <link_button :prototype_links = 'fp_button_4'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901210543?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="l_p_search"></iframe></div>
        </div>
    </div>  

    <div class = "section_container bc_b">
        <div class="content_container">
            <h1>A/B TEST<br>_Search Result Cards</h1>
            <div class="content_block_texts">
                <h2>Key feedback / Problems</h2>
                <h3>In the initial design, users could access a secondary menu by long-pressing on a card. However, usability testing revealed that several participants were unaware of this feature. Further interviews indicated a preference against the long-press interaction, as it was unclear whether it required a longer press or a harder push.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s4_1.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Solutions & A/B Test Round 1</h2>
                <h3>To resolve this issue, I tested four solutions across two A/B testing rounds. In the first round, I tried two approaches: SOLUTION 01 involved removing the secondary menu and adding feature icons directly on the card; SOLUTION 02 added a three-dots icon to indicate a long-press action. However, neither solution was effective. SOLUTION 01 overcrowded the card, obscuring the image, while SOLUTION 2 confused users, leading them to single-click instead of long-pressing.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s4_2.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Solutions & A/B Test Round 2</h2>
                <h3>Therefore, I developed SOLUTIONS 3 and 4. SOLUTION 3 added all feature icons to the card's bottom, while SOLUTION 4 used an expand-and-collapse approach with an arrow icon to hide these icons. At this stage, I also replaced the long-press interaction with a single-click, finding that long-press could disrupt the user's flow, even for just 1-2 seconds.</h3>
                <h3>Following the second round of A/B testing, I chose SOLUTION 4 as the final design. It offers a cleaner visual than SOLUTION 3 and suits the infrequent use of these features by users. Since these features are less relevant before users have read the article, they don't need constant visibility on the card.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s4_3.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <h1>DESIGN EXPLORATIONS <br>_HOME PAGE</h1>
            <div class="content_block_texts">
                <h2>Round 1</h2>
                <h3>Version 1 was the original design. In Version 2, I altered the 'What’s Popular' section's category tags to two lines with three-dot icons and used a larger font. In Version 3, while keeping the larger font, I reverted to Version 1's single-line tag display for space efficiency and content emphasis on the homepage.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s4_4.png" alt="">
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Round 2</h2>
                <h3>After completing the design of Version 3, I realized it presented too much information, making the interface appear cluttered and less streamlined. In fact, I wanted to highlight just two elements on the homepage: the search box and exquisite landscape photos. This led to the design of Version 4.</h3>
            </div>
            <img src="../../assets/art_pages/letsgo/s4_5.png" alt="">
        </div>
       
    </div>


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">NEXT...</h1>
                <h3 class="fc_s">The primary goal of this feature is to provide users with a platform to share, find, and store their travel plans. The homepage automatically recommends popular travel plans or destinations tailored to the user's travel preferences. On the search results page, users can conveniently swipe through images included in the plans. Furthermore, the Plan Details page features a system-generated summary of the plan's highlights at the top, enabling users to quickly ascertain whether the plan aligns with their needs.</h3>
            </div>
            <link_button :prototype_links = 'next_button'/>
            <img src="../../assets/art_pages/letsgo/next.png" alt="">
        </div>
    </div>  



    <the_footer :index = "store.index_array.findIndex((item)=> item.name == 'NEBU' )">
        <nebu/>
    </the_footer>


</div>

    
</template>

<script setup>
//组件引入
import letsgo from'../main_pages/works_thum_cards/letsgo.vue'
import nebu from'../main_pages/works_thum_cards/nebu.vue'
import the_footer from '../footer.vue'
import overview_info from '../comps/overview_info.vue'
import link_button from '../comps/link_button.vue'
import img_slideshow from '../comps/img_slideshow.vue'
//hook引入
import {animation_queue_route_in,animation_queue_route_out,animation_queue_before_route_in} from'../../hooks/use_art_page_functions'

//依赖引入
import {onMounted,onBeforeMount} from 'vue' 
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';

//img引入
import r1 from "../../assets/art_pages/letsgo/r1.png"
import r2 from "../../assets/art_pages/letsgo/r2.png"
import r3 from "../../assets/art_pages/letsgo/r3.png"
import r4 from "../../assets/art_pages/letsgo/r4.png"
import r5 from "../../assets/art_pages/letsgo/r5.png"


const store = useStore()

    let page_id = store.index_array.findIndex((item)=> item.name == 'LETS_GO' )

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
        type:"App Concept / Product Design",
        roll:"Solo designer",
        time:"2022 - 2023",
        detail:"Brand, Web, UX, Motion"
    }



    //高光功能

    let v_1 = "https://player.vimeo.com/video/901210718?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_2 = "https://player.vimeo.com/video/901210736?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_3 = "https://player.vimeo.com/video/901210750?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_4 = "https://player.vimeo.com/video/901210768?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_5 = "https://player.vimeo.com/video/901210786?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

    let highlight_arry = {
        color:'var(--p-color-main)',
        type:'vimeo',
        resize:true,
        contents:[
            [v_1,"Searching Result Cards"],
            [v_2,"Treval Plan Detail Page"],
            [v_3,"Ai Assistant"],
            [v_4,"Ai Assistant"],
            [v_5,"Ai Assistant"]
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

    let vp_button_2 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901210458?share=copy',
    }

    let fp_button_2 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-18028&t=qRlUGPp8nMwxhJ21-1&scaling=scale-down&page-id=13%3A12090&starting-point-node-id=13%3A18028&mode=design',
    }

    let vp_button_3 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901210506?share=copy',
    }

    let fp_button_3 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-30097&t=65Qp4icfxrfJLnfI-1&scaling=scale-down&page-id=13%3A21900&starting-point-node-id=13%3A30097&mode=design',
    }

    let vp_button_4 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901210543?share=copy',
    }

    let fp_button_4 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-33619&t=bU1kowQ0OmKC0Ffg-1&scaling=scale-down&page-id=13%3A31035&starting-point-node-id=13%3A33619&mode=design',
    }

    let next_button = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:165,
        text:'CASE STUDY',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=1-5902&t=DoNIWpc88yBJsBBQ-1&scaling=contain&page-id=1%3A2&mode=design',
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

    --p-color-main:#B1EF62;
    --p-color-sub:#191C19;
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
<template>

<div class="main_container" id="article_container_for_scroll">
    <letsgo/> 

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

    <div class="design_process_sec section_conatiner">
        <is_v_imgs>
            <img src="../../assets/art_pages/letsgo/grids.png" alt="">
        </is_v_imgs>
    </div>

    <div class="design_process_sec section_conatiner">
        <h1>DESIGN PROCESS</h1>
        <h3>Whenever I start a new project. I always start with discovery research. I will interview target audience and review articles to deepen my understanding of the current situation of the whole industry or a particular kind of app to help me better identify the parts of the industry or apps that need to be improved. After identifying the problem, I start thinking about how my design can bring a better user experience to the users. Then I start designing and test my design with target users. This step will be  the longest in my entire design process. I will constantly revise my design based on user feedback until I get satisfactory results.</h3>
        <is_v_imgs>
        <img src="../../assets/art_pages/letsgo/process.jpg" alt="">
        </is_v_imgs>
    </div>

    <div class="discover_research_sec section_conatiner">
        <h1>DISCOVER RESEARCH</h1>
        <div class="section_inner_container">
            <h2>User Interview Key Feedbacks:</h2>
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/user1.jpg" alt="">
                <div class="interview_infor">
                    <h3>@Emma Wang (Graphic Design Student)</h3>
                    <h3 class = "style_italic">
                        “I like traveling, but the process of making travel plan always makes me feel very troublesome. I usually choose to search for travel plans shared by others on the social media. But you know, there are a lot of apps out there. I have to switch back and forth between different apps each time. “
                    </h3>
                </div>
            </div>
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/user2.jpg" alt="">
                <div class="interview_infor">
                    <h3>@Carro (Data Engineer) </h3>
                    <h3 class = "style_italic">
                        “I often start making my travel plans one or two months in advance. I think I am very good at making travel plans. But sometimes I forget to book the restaurant or the park that I want to go to, you know, some places have to be reserved a long time in advance.”
                    </h3>
                </div> 
            </div> 
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/user3.jpg" alt="">
                <div class="interview_infor">
                    <h3>@Daniel (Banker)</h3>
                    <h3 class = "style_italic">
                        “I plan to go to Florida with my friends at the end of the year. We are making our travel plan. But our progress is very slow, because everyone's time does not match, so we have little time to discuss the details of the plan together.”
                    </h3>
                </div> 
            </div>
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/user4.jpg" alt="">
                <div class="interview_infor">
                    <h3>@Sylvie (Supply Chain Analyst)</h3>
                    <h3 class = "style_italic">
                        “I like traveling with friends very much. But making plans for a group tour can be cumbersome. My friends and I downloaded a lot of apps to complete a trip, there is one used for calculate the cost, one used for to make plans, one for used to store coupons and so on.”
                    </h3>
                </div> 
            </div>
        </div>
        <div class="section_inner_container">
            <h2>User Interview Main Learnings:</h2>
            <h3>1_Users need to go to different websites or social media apps to search for the plan they want. </h3>
            <h3>2_Sometimes users forget to reserve tickets or restaurants before they start the trip.</h3>
            <h3>3_It is hard to make a group travel plan online since everyone has a different schedule. </h3>
            <h3>4_It is better to have one app that has all of the features they need for making a travel  plan or during the a trip.</h3>
        </div>
        <is_v_imgs>
            <img src="../../assets/art_pages/letsgo/research01.jpg" alt="">
        </is_v_imgs>

        <div class="video_frames_section_container">
            <div class="video_frames_container">
                <video_frams :frames_data="frames_01" @render_triger = "render_percen_1" />
            </div>
            <div class="text_conatiner"></div>
        </div>

        

        <div class="section_inner_container">
            <h2>Main learnings of background research - Who is traveling </h2>
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/re_1.svg" alt="">
                <div class="interview_infor">
                    <h3 class = "style_italic">
                        68% of households plan to take a vacation during the 2022 summer vacation. (CONDER)
                    </h3>
                </div>
            </div>
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/re_2.svg" alt="">
                <div class="interview_infor">
                    <h3 class = "style_italic">
                        60% of business trips end up being personal trips for a variety of reasons.(Regiondo)
                    </h3>
                </div> 
            </div> 
        </div>
        <div class="section_inner_container">
            <h2>Main learnings of background research - How people travel </h2>
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/re_11.svg" alt="">
                <div class="interview_infor">
                    <h3 class = "style_italic">
                        90% of travelers are willing to use apps while traveling. Technology has changed the way people travel, and app can make people get the information they need more quickly.( Travelport )
                    </h3>
                </div>
            </div>
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/re_12.svg" alt="">
                <div class="interview_infor">
                    <h3 class = "style_italic">
                        Between 66% and 74% of millennials will use their phones to book or plan a trip.(CONDER)
                    </h3>
                </div> 
            </div> 
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/re_13.svg" alt="">
                <div class="interview_infor">
                    <h3 class = "style_italic">
                        74% of households use search engines when researching travel options.(CONDER)
                    </h3>
                </div> 
            </div> 
            <div class="interview_feedbacks">
                <img src="../../assets/art_pages/letsgo/re_14.svg" alt="">
                <div class="interview_infor">
                    <h3 class = "style_italic">
                        97% of people share their travel experiences on social media, and two-thirds of them post once a day.(CONDER)
                    </h3>
                </div> 
            </div> 
        </div>
    </div>

    <is_v_imgs>
            <img src="../../assets/art_pages/letsgo/poster_1.jpg" alt="">
    </is_v_imgs>

    <div class="design_process_sec section_conatiner">
        <h1>DEFINE PROBLEMS </h1>
        <h3>Through research, I find that the difficulties people encounter in the process of creating travel plans mainly focus on two parts.  First, if people do not want to create a travel plan by themselves, they will need to go to different websites or social media apps to search for the plan they want, and there is no easy way for them to save the plans or events they like. Also, it is even harder for users to put together a new travel plan from different plans.  Secondly, it is really hard for a group of users to create a travel plan together online. They will need so many different tools to help them to create the plane. 
        </h3>
        <is_v_imgs>
            <img src="../../assets/art_pages/letsgo/problems.jpg" alt="">
        </is_v_imgs>
    </div>

    <div class="design_process_sec section_conatiner">
        <h1>IDEATE SOLUTIONS </h1>
        <h3>Through research, I find that the difficulties people encounter in the process of creating travel plans mainly focus on two parts.  First, if people do not want to create a travel plan by themselves, they will need to go to different websites or social media apps to search for the plan they want, and there is no easy way for them to save the plans or events they like. Also, it is even harder for users to put together a new travel plan from different plans.  Secondly, it is really hard for a group of users to create a travel plan together online. They will need so many different tools to help them to create the plane. 
            <br>On the other hand, it gives users a better experience in creating travel plans. I decided to put together a single page of features that users often use, including managing events, designing budgets, multi-person editing, team chat, and so on.</h3>
        <is_v_imgs>
            <img src="../../assets/art_pages/letsgo/idea.png" alt="">
        </is_v_imgs>
    </div>

    <div class="design_process_sec section_conatiner">
        <h1>SITEMAP</h1>
        <is_v_imgs>
            <img src="../../assets/art_pages/letsgo/sitemap.jpg" alt="">
        </is_v_imgs>
    </div>

    <is_v_imgs>
            <img src="../../assets/art_pages/letsgo/poster_2.jpg" alt="">
    </is_v_imgs>

    <div class="design_process_sec section_conatiner">

        <h1>PREMARY FEATURE 01
            <br> _TRAVEL COMMUNITY 
        </h1>

        <h3>
            The design goal of this primary feature is to create a place for users to share, find and store their travel plans. The home page will automatically recommend popular travel plans or destinations for users. The data will make recommendations based on the user's travel preferences. On the search results page. Users can swipe to view images included in the plan directly on the current page. On the plan Details page, users can see highlights of the plan summarized by the system at the top of the plan, which will help users know if the plan meets their needs in the first place.
        </h3>

        <prototype_links :prototype_links = 'prototype_1'/>

        <div class="video_conatiner_s">
            <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/804014351?h=7deef408cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Letsgo_p_01.mp4"></iframe></div>
        </div>

    </div>

    <div class="discover_research_sec section_conatiner">
        <h1>A/B TEST 
           <br> _Search Result Cards
        </h1>
        <div class="section_inner_container">
            <h2>Key feedback / Problems</h2>
            <h3>In the original design, the user could open a secondary menu by long-press on the card.
               <br> After the first round of usability test. Several users who participated in the test said they couldn’t find out that they can open the secondary menu by long-press on the cards.
               <br> After more interviews, some users said they do not like the long press interaction. Because it is hard to tell whether they need to press the screen for longer time for harder push.
            </h3>
            <is_v_imgs>
                <img ref="imgs"  src="../../assets/art_pages/letsgo/card_1.jpg" alt="">
            </is_v_imgs>
        </div>
        <div class="section_inner_container">
            <h2>Solutions & A/B Test Round 1</h2>
            <h3>To solve this problem. I tried four different solutions with two rounds of A/B testing. In the first round of the A/B test, I provided the user with SOLUTION 1 and SOLUTION 2. In SOLUTION 1, I delete the secondary menu and directly added the feature icons on the card. In SOLUTION 2, I added a three-dots icon to the card to indicate that the user can long-press the card to open the secondary menu.
               <br>Unfortunately, after the first round of A/B testing, I didn't get the results I wanted. Although SOLUTION 1 shows the function more intuitively, it makes the picture very crowded and blocks more picture content. The addition of a three-dots icon in SOLUTION 2 continued to confuse users, and the first reaction of test participants was to single-click rather than long-press.
            </h3>
            <is_v_imgs>
                <img ref="imgs" src="../../assets/art_pages/letsgo/card_2.jpg" alt="">
            </is_v_imgs>
        </div>
        <div class="section_inner_container">
            <h2>Solutions & A/B Test Round 2</h2>
            <h3>So, I created SOLUTION 3 and SOLUTION 4. Those two are very similar. The SOLUTION 3 adds all the feature icons to the bottom of the card. On the basis of SOLUTION 3, SOLUTION 4  use expand & collapse to hides feature icons with an arrow icon. Also on this stage I finally decided to cancel the long-press interactive and replace it by single-click instead. I've found that a long-press interactive can interrupt the flow of the user's action, even if it's only for a 1 - 2  seconds.
               <br>After the second round of A/B testing, I decided to use the SOLUTION 4 as the final solution. Since SOLUTION 4 has a cleaner visual design than SOLUTION 3, and these features are not commonly used by users, especially true when these features appear on a card before the user has read the article yet, so they don't need to be there forever.
            </h3>
            <is_v_imgs>
                    <img ref="imgs"  src="../../assets/art_pages/letsgo/card_3.jpg" alt="">
            </is_v_imgs>
        </div>
    </div>

    <div class="design_process_sec section_conatiner">
        <h1>DESIGN EXPLORATIONS 
           <br>_HOME PAGE</h1>
        <div class="section_inner_container">
            <h3>Version 1 is the original design. In version 2, I changed the way category tags are displayed ( in the “What’s popular” section). The category tags are displayed in two lines, and three-point icons were added to display more category tags. Also, in version 2, I used a larger font to make the content more readable. 
            In Version 3, I decided to keep the larger font but changed the way the category tags were displayed back to version 1. First of all, the what’s popular 'section doesn't need a lot of categories. Therefore the single-line display works fine. Secondly, but also more important, the home page, should use as much space as possible to show important content. The two lines display takes more space than the single-line display.</h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/letsgo/home.jpg" alt="">
            </is_v_imgs>
        </div>
    </div>

    <is_v_imgs>
            <img src="../../assets/art_pages/letsgo/poster_3.jpg" alt="">
    </is_v_imgs>

    <div class="design_process_sec section_conatiner">

        <h1>PREMARY FEATURE 02
            <br> _TRAVEL PLAN EDITER
        </h1>

        <h3>
            Travel plan editer is the second primary feature of LETS GO. It is a collection of all the functions that users can use to create travel plans. Users can create a brand new travel plan with their friends, while users can choose to use events saved from the online community to put together a travel plan they like. The travel plan editer includes four main sections. All the main information in the travel plan is shown in the overview section. Detail section shows all events, lodging and flight information for the travel plan. At the same time, users can set a budget and record the expenditure of the trip in the budget section, and the LETS GO will calculate the amount each tripmate needs to pay according to the setting. Finally, the chat section is where all tripmate communicate.
        </h3>

        <div class="prototype_links_container">

            <prototype_links :prototype_links = 'prototype_2'/>

            <prototype_links :prototype_links = 'prototype_3'/>

            <prototype_links :prototype_links = 'prototype_4'/>

        </div>

        <div class="video_conatiner_s">
            <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/804014509?h=31cb53a3cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Letsgo_p_02"></iframe></div>
        </div>

    </div>

    <div class="discover_research_sec section_conatiner">
        <h1>USEABILITY TEST  
           <br> _ADD NEW EVENTS
        </h1>
        <div class="section_inner_container">
            <h2>Key feedback / Problem</h2>
            <h3>In the first version of the design, there was a section called Explore. Explore section was the place for users to search for events and plans from the online community. 
                    The result of the useability test shows that the feature of ADDING NEW EVENT and EXPLORE SECTION are duplicated. Those pages complicate the flow of adding an event. Also, users were confused about where they should search the content from the online community since there are three places where they can do the same thing.
            </h3>
        </div>
        <div class="section_inner_container">
            <h2>Ideas of solutions / Design goals</h2>
            <h3>1. Delete the Explore section.
                <br>2. Redesign the page for user to add location to the events.
                <br>3. Adding the date option on this page for users to add the event to the date they want.
                <br>4. Clarify the different of two ways to add event in this app.
                <br>a)Adding from Saved events or plans.
                <br>b)Adding by create a new event. 
            </h3>
            <is_v_imgs>
                <img ref="imgs" src="../../assets/art_pages/letsgo/events_1.jpg" alt="">
            </is_v_imgs>
        </div>
        <div class="section_inner_container">
            <h2>User flow redesign</h2>
            <h3>To better solve the problem, I decided to start with the user flow instead of the version.
                <br>I rearranged the pages and deleted some unnecessary pages to help users better understand the whole flow and finish the flow with fewer steps.
            </h3>
            <is_v_imgs>
                    <img ref="imgs"  src="../../assets/art_pages/letsgo/events_2.jpg" alt="">
            </is_v_imgs>
        </div>
        <div class="section_inner_container">
            <h2>Improvement</h2>
            <h3>By removing unnecessary pages and rearranging the user flow. All of the three different ways users can innovate events require fewer steps. Now the flow is clearer and easier to understand.
            </h3>
            <is_v_imgs>
                    <img ref="imgs"  src="../../assets/art_pages/letsgo/events_3.jpg" alt="">
            </is_v_imgs>
        </div>
        <div class="section_inner_container">
            <h2>Visual design</h2>
            <h3>Now user can chose to add event form the saved list or create new one by their own on the first page. 
                Date option has been added to the page, users now can choose to add event to any scheduled day in this page. Also, with explore disabled, only content that has been saved by the user will be displayed on the search result list.
            </h3>
            <is_v_imgs>
                    <img ref="imgs"  src="../../assets/art_pages/letsgo/events_4.jpg" alt="">
            </is_v_imgs>
            <h3>The explore section was deleted. The only way users search for community content now is through online communities. This avoids confusion. Also, move the chat icon from the upper right corner of the screen to the original explore section's position.
            </h3>
            <is_v_imgs>
                    <img ref="imgs"  src="../../assets/art_pages/letsgo/events_5.jpg" alt="">
            </is_v_imgs>
            <h3>To avoid users needing too many steps to save events from the community. Users can now choose to save their favorite events from the community to their profile or an existing plan.
            </h3>
            <is_v_imgs>
                    <img ref="imgs"  src="../../assets/art_pages/letsgo/events_6.jpg" alt="">
            </is_v_imgs>
        </div>
    </div>

    <div class="discover_research_sec section_conatiner">
        <h1>USEABILITY TEST
           <br> _EVENT CARDS
        </h1>
        <div class="section_inner_container">
            <h2>Key feedback / Problem</h2>
            <h3>1. The top part is the same as the collapse version. If the name of the event has a lot of words, the name will still be incomplete in the expanded version.
                <br> 2. It is better to see the bigger image of the event as the expanded version of the card.
                <br>3. The top part is the same as the collapse version. If the name of the event has a lot of words, the name will still be incomplete in the expanded version.
                <br>4. It is better to see the bigger image of the event at an expanded version of the card.
            </h3>
        </div>
        <div class="section_inner_container">
            <h2>Solutions</h2>
            <h3>1. Delete the Explore section.
                <br>2. Redesigned the top part, give more space to the event name area to make sure can display the whole name of the events.
                <br>3. Move tags to the information area.
                <br>4. More space for the larger img of the event.
                <br>5. Change 'Move' to 'Date'
                <br>6. Adding rearrange icon to the list
                <br>7. Change 'add tickets and reservation' to 'attach' and also changed the icon to help users to understand the function
            </h3>
            <is_v_imgs>
                <img ref="imgs" src="../../assets/art_pages/letsgo/expand_1.jpg" alt="">
            </is_v_imgs>
        </div>
    </div>

    <div class="discover_research_sec section_conatiner">
        <h1>USEABILITY TEST
           <br> _ADD NEW COST
        </h1>
        <div class="section_inner_container">
            <h2>Key feedback / Problem</h2>
            <h3>1. What if users want to add title from the events in the  plan detail list ?
                <br> 2. It is so  annoying to tap on the check boxes of everyone in the list.
                <br>3. User have to count how many friends they are split with by themself.
            </h3>
        </div>
        <div class="section_inner_container">
            <h2>Solutions</h2>
            <h3>1. Add an list button for users to add the title by chose the event from the detail list.
                <br>2.Add 'ALL' button for users to select all the friends by one tap.
                <br>3. Add number count to show user how many friend they are split with.
            </h3>
            <is_v_imgs>
                <img ref="imgs" src="../../assets/art_pages/letsgo/cost_1.jpg" alt="">
            </is_v_imgs>
        </div>
    </div>

    <div class="discover_research_sec section_conatiner">
        <h1>DESIGN DETAIL
           <br> _INFORMATION CARDS
        </h1>
        <div class="section_inner_container">
            <h3>In the initial design, I used the similar visual design for the lodging and the event cards. This is a feasible solution, and it does not affect the user's use of the feature.
                <br>But I find that lodging and event are really two different kinds of information. The users have different events every day, but lodging doesn't necessarily change every day. That is, if lodging didn't change, there would be a large space at the top of the list to show the same things every day. As a result, I decided to tweak the design of lodging to display the information in as little space as possible. It's also color-coded so that you don't have to read it again to know that it's lodging information.
            </h3>
            <is_v_imgs>
                <img ref="imgs" src="../../assets/art_pages/letsgo/infor_1.jpg" alt="">
            </is_v_imgs>
        </div>
    </div>

    <div class="discover_research_sec section_conatiner">
        <h1>DEFAULT DESIGN
        </h1>
        <div class="section_inner_container">
            <h3>Data are missing when a user first log in to the app or creates a new travel plan. Therefore I designed a different version for the absence of data. For example the overview section and budget section. Before the user added any data to the plan, a description of the feature is displayed in a blank space, guiding the user to understand how to use the feature.
            </h3>
            <is_v_imgs>
                <img ref="imgs" src="../../assets/art_pages/letsgo/default_1.jpg" alt="">
            </is_v_imgs>
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
import prototype_links from'../comps/prototype_links.vue'
import is_v_imgs from'../comps/is_v_imgs.vue'
import the_footer from '../footer.vue'
import video_frams from '../comps/video_frams.vue'
//hook引入
import {animation_queue_route_in,animation_queue_route_out,animation_queue_before_route_in} from'../../hooks/use_art_page_functions'
//frames 批量引入
import frame_list from '../../assets/fram_animation_test/fames.js'
//依赖引入
import { computed,onMounted,onBeforeMount} from 'vue' 
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';


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

    //传入组件的图片序列
    let frames_01 = {
        frames:frame_list
    }
    //用于接收渲染进度
    let render_percen_1 = (val)=>{
       
    }



    //按钮依赖
    let prototype_1 = {
        color:'#8CDB4D',
        text:'USER FLOW TASK 1-1 : Search and save an trip plan from community.',
        v_link:'https://vimeo.com/804014351',
        f_link:'https://www.figma.com/proto/08kW2uqiWTZJbVe2J3MNG4/IXD700_Chak?node-id=736%3A62462&scaling=scale-down&page-id=736%3A28704&starting-point-node-id=736%3A62462',
    }
    let prototype_2 = {
        color:'#8CDB4D',
        text:'USER FLOW TASK 2-1 : Create a new travel plan and send invite to friends.',
        v_link:'https://vimeo.com/804014509',
        f_link:'https://www.figma.com/proto/08kW2uqiWTZJbVe2J3MNG4/IXD700_Chak?node-id=760%3A29241&scaling=scale-down&page-id=760%3A28956&starting-point-node-id=760%3A29241',
    }
    let prototype_3 = {
        color:'#8CDB4D',
        text:'USER FLOW TASK 2-2 : Add new event to the plan.',
        v_link:'https://vimeo.com/804014467',
        f_link:'https://www.figma.com/proto/08kW2uqiWTZJbVe2J3MNG4/IXD700_Chak?node-id=760%3A33036&scaling=scale-down&page-id=760%3A32574&starting-point-node-id=760%3A33036',
    }
    let prototype_4 = {
        color:'#8CDB4D',
        text:'USER FLOW TASK 2-3 : Then Add new cost to a event and share it to the group chat.',
        v_link:'https://vimeo.com/804014401',
        f_link:'https://www.figma.com/proto/08kW2uqiWTZJbVe2J3MNG4/IXD700_Chak?node-id=774%3A31505&scaling=scale-down&page-id=774%3A30724&starting-point-node-id=774%3A31505',
    }

    

</script>

<style scoped>

.main_container{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:180px;

    position:absolute;
    left:0;

    overflow: hidden;

    background: linear-gradient(90deg, #101013 0%, #1C2415 48.61%, #101013 100%);
    

    
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

.video_frames_section_container{
    width:100%;
    display: flex;
}
.video_frames_container{
    width:50%;
    height:100%;
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
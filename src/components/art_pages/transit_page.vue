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
    <div class="discover_research_sec section_conatiner">
        
        <h1>PERSONAS</h1>
        
        <img_slideshow :slideshow_arr = 'pc_arr_02'/> 
        
    </div>

    <is_v_imgs>
            <img src="../../assets/art_pages/transit/poster_2.jpg" alt="">
    </is_v_imgs>

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

    <!-- PROOF OF CONCEPT_ROUT NAVIGATION -->
    <div class="section_conatiner">
        <h1>PROOF OF CONCEPT_ROUT NAVIGATION</h1>
        <img_slideshow :slideshow_arr = 'pc_arr_01'/> 
    </div>

    <!-- TEST RESULT _HOME PAGE -->
    <div class="discover_research_sec section_conatiner">
        
        <h1>TEST RESULT _HOME PAGE</h1>
        <div class="section_inner_container">
            <h2>Two rounds of A/B Test</h2>
            <h3>This test aims to determine the layout of the app's home page. Two rounds of testing were conducted.
                In the first round of testing, I presented two options: Option A used a hidden menu bar that required users to click on a hamburger icon to open, while option B used a traditional bottom navigation bar. Option A saved display space to a certain extent, allowing the home page to have more space to display other content. However, according to the results of the test, almost all users preferred the thick bottom navigation bar used in option B. This was because option B was more intuitive and in line with user’s habits. Most importantly, in option B, users could switch pages with just one step of operation, while in option A, the foldable navigation bar required users to take at least two steps to switch pages.
                After determining the navigation bar, I conducted a second round of testing. In this test, I presented two display modes for the navigation bar: one at the top and one at the bottom. Although the top navigation bar was more traditional and in line with user operating habits, the bottom navigation bar was more popular among users. This was because the bottom navigation bar allowed users to activate functions without having to move their hands to the top, making it easier and faster for them to use the search function.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/h_1.jpg" alt="">
            </is_v_imgs>
        </div>

        <div class="section_inner_container">
            <h2>Further improvement</h2>
            <h3>The first two rounds of testing determined the display of the menu bar and search bar. For a long time in subsequent designs, I did not make any changes to the design of the home page. This changed until I added a route saving function to the search page and tested its useability. According to user feedback, they liked this feature very much. And in most use cases, users will repeatedly use the saved route (such as fixed commuters and students for their daily commuting). So I thought, if I could move this saved route to the home page, it would further reduce the number of steps required for the user to start navigation.
                After determining the navigation bar, I conducted a second round of testing. In this test, I presented two display modes for the navigation bar: one at the top and one at the bottom. Although the top navigation bar was more traditional and in line with user operating habits, the bottom navigation bar was more popular among users. This was because the bottom navigation bar allowed users to activate functions without having to move their hands to the top, making it easier and faster for them to use the search function.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/h_2.jpg" alt="">
            </is_v_imgs>
            <h3>So the saved routes will be displayed in a more concise way on the home page for quick user operation, and more detailed information will also be displayed on the search page.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/h_3.jpg" alt="">
            </is_v_imgs>
        </div>

    </div>


    <!-- TEST RESULT - ROAD CARDS -->
    <div class="discover_research_sec section_conatiner">
        
        <h1>TEST RESULT_ROAD CARDS</h1>
        <div class="section_inner_container">
            <h2>Key feedbacks and improvement of result list</h2>
            <h3>In the initial design, I differentiated the expected arrival time by colors, with red being the fastest and green being the slowest. To display as many search results as possible on the screen, I used very small sized information cards and only displayed the most important information. However, user testing showed that users did not like this design. Firstly, the color differentiation for time caused confusion among users. On the other hand, users wanted to see more key information on the cards. So, I redesigned the search list again. After researching, I found that searches for public transportation routes wouldn't result in many search results. So, I didn't need to consider reducing the size of the information cards to display more results. Instead, to help users understand more key information faster, I should appropriately increase the size of the information cards. On the other hand, compared to differentiating by arrival time with color, differentiating by icon color can help users understand the types of transportation used in public transportation routes more quickly.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/c_1.jpg" alt="">
            </is_v_imgs>
        </div>

        <div class="section_inner_container">
            <h2>Key feedbacks and improvement of road detail page</h2>
            <h3> In the initial design, I designed the route detail page as a card expansion mode. After the user clicks on the information card of the search result, the card will expand the detailed information of the route. The advantage of this is that the user can see the detailed information without having to jump to a new page. However, test results show that users prefer to see maps on the detail page. Compared to text content, users can more intuitively understand the route from the map. So I redesigned the detail page.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/c_2.jpg" alt="">
            </is_v_imgs>
            <h3>The new detail page is a standalone page where the user can adjust the size of the map display by dragging the bottom information bar.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/c_3.jpg" alt="">
            </is_v_imgs>
            <h3>In public transportation route information, excessive stop names will be hidden to save space. The collapsed stop names will be displayed in a special form, and users can expand the collapsed stop names by clicking on the three dots icon.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/c_4.jpg" alt="">
            </is_v_imgs>
        </div>

    </div>

       <!-- TEST RESULT - NAVIGATION -->
    <div class="discover_research_sec section_conatiner">
        
        <h1>TEST RESULT - NAVIGATION</h1>
        <div class="section_inner_container">
            <h2>Key feedbacks and improvement</h2>
            <h3>After testing, the navigation page has been redesigned. In the first design, I placed all the functions at the bottom of the screen. However, after testing, it was found that although the bottom of the screen did not show much content, it made users feel cluttered. The reason was that I used a similar design for all the content, and users could not distinguish between them at first glance. Therefore, in the new design, I reclassified all the content and used different display methods.
                On the other hand, in the first design, if users wanted to use other functions such as "payment" and "sharing" in the navigation, they needed to return to the main page. This operation was too cumbersome, so I added side buttons in the new version to allow users to quickly open the function they need in the navigation.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/n_1.jpg" alt="">
            </is_v_imgs>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/n_2.jpg" alt="">
            </is_v_imgs>
        </div>


    </div>
    
    <is_v_imgs>
            <img src="../../assets/art_pages/transit/poster_3.jpg" alt="">
    </is_v_imgs>

    <!-- NEWLY ADDED FEATURE 01 _PAYMENT -->
    <div class="design_process_sec section_conatiner">

        <h1>NEWLY ADDED FEATURE 01 _PAYMENT
        </h1>

        <h3>
            Adding a payment feature in Transit allows users to skip the unnecessary action of searching for their wallet or card when the vehicle arrives. Using a phone for payment is also more in line with the trend of future payment methods. Most importantly, electronic cards can effectively avoid the trouble of reapplying for a lost card.
        </h3>

        <prototype_links :prototype_links = 'prototype_2'/>

        <div class="video_conatiner_s">
            <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/804028251?h=948b149314&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="transit_p_02"></iframe></div>
        </div>

    </div>

     <!-- PROOF OF CONCEPT _PAYMENT -->
     <div class="section_conatiner">
        <h1>PROOF OF CONCEPT _PAYMENT</h1>
        <img_slideshow :slideshow_arr = 'pc_arr_03'/> 
    </div>

    <!-- TEST RESULT _PAYMENT -->
    <div class="discover_research_sec section_conatiner">
        
        <h1>TEST RESULT _PAYMENT</h1>
        <div class="section_inner_container">
            <h2>Key feedbacks and improvement</h2>
            <h3>In the process of designing the payment system, I tried many different design solutions, including stacked cards, lists, and horizontal scrolling. After multiple tests and considerations of actual usage scenarios, I decided to use the horizontal scrolling card as the final solution. First, it combines the advantages of options 1 and 2, which is having a sufficiently large size to accommodate the QR code while also allowing users to quickly find the card they need. Of course, when there is a lot of content to look for, vertical scrolling seems to always be the best solution in terms of speed. However, the fact is that users will not store too many cards in a public transportation app. Moreover, most users only use 1 to 2 cards repeatedly every day. Therefore, using horizontal scrolling here will not reduce the speed of finding the card. On the other hand, using horizontal scrolling allows me to have enough space to add scan buttons, QR codes, and Tap prompts for payment functions. This design is to enable the app to support as many different payment methods in different cities and regions as possible.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/p_1.jpg" alt="">
            </is_v_imgs>
        </div>

        <div class="section_inner_container">
            <h2>Visual improvement</h2>
            <h3>In the process of designing the card window, I made several attempts that did not affect the function. These changes were more focused on bringing a better visual experience to the user. In the final design, I added a semi-transparent black background to the location of the card number to ensure the readability of the card information. At the same time, I separated the scan button from the card so that it would not move with the card switch.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/p_2.jpg" alt="">
            </is_v_imgs>
        </div>

    </div>

    <is_v_imgs>
            <img src="../../assets/art_pages/transit/poster_4.jpg" alt="">
    </is_v_imgs>

    <!-- NEWLY ADDED FEATURE 02 _REAL-TIME LOCATION SHARE -->
    <div class="design_process_sec section_conatiner">

        <h1>NEWLY ADDED FEATURE 02 _REAL-TIME LOCATION SHARE
        </h1>

        <h3>
            The original intention of the design of the sharing function is to enhance the safety of users when using public transportation. This function allows users to share their real-time location with others through a unique URL. This means that the recipient does not need to download the Tranit app to view the location information of the sharer through any browser. I hope to deter criminals and increase the cost of crime through this function, thus protecting the safety of users to some extent.
        </h3>

        <prototype_links :prototype_links = 'prototype_3'/>

        <div class="video_conatiner_s">
            <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/804035918?h=19626a6584&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="tansit_p_3.mp4"></iframe></div>
        </div>

    </div>

    <!-- PROOF OF CONCEPT_ROUT NAVIGATION -->
    <div class="section_conatiner">
        <h1>PROOF OF CONCEPT _REAL-TIME LOCATION SHARE</h1>
        <img_slideshow :slideshow_arr = 'pc_arr_04'/> 
    </div>

    <!-- DESIGN DETAIL _REAL-TIME LOCATION SHARE -->
    <div class="discover_research_sec section_conatiner">
        
        <h1>DESIGN DETAIL _REAL-TIME LOCATION SHARE</h1>
        <div class="section_inner_container">
            <h3> The purpose of adding the sharing function is to protect the user's safety. However, as this function will allow others to view the user's real-time location information, I was very careful in its design. First, there is a confirmation page. The user's final step before enabling the sharing function is to view the confirmation page, which displays the name and phone number of the authorized contacts, and I use a countdown button to prevent users from acting too quickly and ignoring important information.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/s_1.jpg" alt="">
            </is_v_imgs>
            <h3> At the same time, after the user turns on the sharing function, the share button will become a very prominent red color. This will always remind the user that they are sharing their location.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/s_2.jpg" alt="">
            </is_v_imgs>
            <h3> To ensure the safety of users, the feature will not be automatically turned off once it is turned on, even if the user has arrived at their destination. However, Tranit will constantly ask the user through pop-up windows if they want to stop sharing their location information.
            </h3>
            <is_v_imgs>
                <img src="../../assets/art_pages/transit/s_3.jpg" alt="">
            </is_v_imgs>
        </div>

    </div>


    <the_footer :index = "store.index_array.findIndex((item)=> item.name == 'ABS_INTERNSHIP' )">
        <abs/>
    </the_footer>

    




    <p>==end==</p>

</div>

    
</template>

<script setup>
//组件引入
import transit from'../main_pages/works_thum_cards/transit.vue'
import abs from'../main_pages/works_thum_cards/abs.vue'
import prototype_links from'../comps/prototype_links.vue'
import is_v_imgs from'../comps/is_v_imgs.vue'
import img_slideshow from '../comps/img_slideshow.vue'
import the_footer from '../footer.vue'
//引入图片
import persona_1 from '../../assets/art_pages/transit/slideshow/persona_1.jpg'
import persona_2 from '../../assets/art_pages/transit/slideshow/persona_2.jpg'
import poc_4 from '../../assets/art_pages/transit/slideshow/poc_04.jpg'
import poc_5 from '../../assets/art_pages/transit/slideshow/poc_05.jpg'
import poc_6 from '../../assets/art_pages/transit/slideshow/poc_06.jpg'
import poc_7 from '../../assets/art_pages/transit/slideshow/poc_07.jpg'
import poc_8 from '../../assets/art_pages/transit/slideshow/poc_08.jpg'
import poc_9 from '../../assets/art_pages/transit/slideshow/poc_09.jpg'
import poc_13 from '../../assets/art_pages/transit/slideshow/poc_13.jpg'
import poc_14 from '../../assets/art_pages/transit/slideshow/poc_14.jpg'
import poc_15 from '../../assets/art_pages/transit/slideshow/poc_15.jpg'
import poc_16 from '../../assets/art_pages/transit/slideshow/poc_16.jpg'
import poc_17 from '../../assets/art_pages/transit/slideshow/poc_17.jpg'
import poc_18 from '../../assets/art_pages/transit/slideshow/poc_18.jpg'
import poc_20 from '../../assets/art_pages/transit/slideshow/poc_20.jpg'
import poc_21 from '../../assets/art_pages/transit/slideshow/poc_21.jpg'
import poc_22 from '../../assets/art_pages/transit/slideshow/poc_22.jpg'
import poc_23 from '../../assets/art_pages/transit/slideshow/poc_23.jpg'
import poc_24 from '../../assets/art_pages/transit/slideshow/poc_24.jpg'
import poc_25 from '../../assets/art_pages/transit/slideshow/poc_25.jpg'

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
    let pc_arr_01 = {
        color:'#00FFE0',
        pics:[poc_4,poc_5,poc_6,poc_7,poc_8,poc_9]
    }

    let pc_arr_02 = {//personas
        color:'#00FFE0',
        pics:[persona_1,persona_2]
    }

    let pc_arr_03 = {//功能2
        color:'#00FFE0',
        pics:[poc_13,poc_14,poc_15,poc_16,poc_17,poc_18]
    }

    let pc_arr_04 = {//功能3
        color:'#00FFE0',
        pics:[poc_20,poc_21,poc_22,poc_23,poc_24,poc_25]
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

    background: linear-gradient(90deg, #000000 0%, #1C2024 53.82%, #000000 100%);
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

    color: #00FFE0;;

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
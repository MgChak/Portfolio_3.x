<template>

<div class="main_container">
    <letsgo/> 

<div ref='ani_el' class="routin_ani_conatiner">
    <div class = "ov_section_container bc_s">
        <div class="ov_content_container">
            <h6>LET'S GO</h6>
            <div class="breakline bc_w1"></div>
            <overview_info :ov_data="ov_data" />            
        </div>
    </div>  

    <div class = "main_section_container">
        <div class="sub_section_container">
            <div class="flex_column gap_16" style="width:100%">
                <v-lazy-image :src="images['o1.png']" :src-placeholder="images['o1@s.png']"/>
                <div class="flex gap_16" style="width:100%">
                    <div class="logo_box">
                        <div>
                            <img class="no_radius" :src="images['logo.svg']"/>
                        </div>
                    </div>
                    <div>
                        <v-lazy-image :src="images['o2.png']" :src-placeholder="images['o2@s.png']"/>
                    </div>
                </div>
                <v-lazy-image :src="images['o3.png']" :src-placeholder="images['o3@s.png']"/>
            </div>
        </div>
    </div> 



    <div class = "main_section_container">
        <div class="section_title_container">
            <h1>The Problem</h1>
        </div>
        <div class="sub_section_container">
            <div class="body_block">
                <h3>This problem comes from a real experience I had one summer while planning a group trip with friends. At first, everyone was excited during our conversations about the trip. But when we started making actual preparations, our mood significantly dropped. During this stage, we felt stress, frustration, and other negative emotions. The diagram below shows the changes in our mood.</h3>
            </div>
            <v-lazy-image :src="images['p1.png']" :src-placeholder="images['p1@s.png']"/>
            <div class="body_block">
                <h3>I think this is a strange phenomenon. If we could avoid these negative emotions during the preparation stage, the overall experience of the trip would have been closer to perfect. So I started to think...</h3>
            </div>
            <div class="body_block_highlight">
                <h3>How to Design an App to Prevent Stress During Travel Preparation?</h3>
            </div>
            <div class="body_block">
                <h3>So, I started working on the design of this project. Next, I'll show you my design process from start to finish.</h3>
            </div>
        </div>
    </div> 

    <div class = "main_section_container">
        <div class="section_title_container">
            <h1>Feature Design Previews</h1>
        </div>
        <div class="sub_section_container">
            <div class="flex_container">
                <div class="gap_40_container">
                    <div class="sub_title_block">
                        <h4>AI Generator <br>
                            Based on Conversation</h4>
                    </div>
                    <link_button :prototype_links = 'case_study_button'/>
                </div>
                <vimeo_container class="iframe_block_flex_row" :vimeolink="{radio:4,link:'https://player.vimeo.com/video/988628489?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
            </div>
        </div>
        <div class="breakline center"></div>
        <div class="sub_section_container">
            <div class="flex_container_reverse">
                <div class="gap_40_container">
                    <div class="sub_title_block">
                        <h4>AI Packing<br>
                          Recommendation</h4>
                    </div>
                    <link_button :prototype_links = 'case_study_button'/>
                </div>
                <vimeo_container class="iframe_block_flex_row" :vimeolink="{radio:4,link:'https://player.vimeo.com/video/988636983?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
            </div>
        </div>
             <div class="breakline center"></div>
        <div class="sub_section_container">
            <div class="flex_container">
                <div class="gap_40_container">
                    <div class="sub_title_block">
                        <h4>AI Packing Scanner</h4>
                    </div>
                    <link_button :prototype_links = 'case_study_button'/>
                </div>
                <vimeo_container class="iframe_block_flex_row" :vimeolink="{radio:4,link:'https://player.vimeo.com/video/989225504?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
            </div>
        </div>              
    </div> 

    <div class = "main_section_container">
        <div class="section_title_container">
            <h1>Research</h1>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Learning Goals of Research</h2>
            </div>
            <div class="body_block">
                <h3>Before I start designing, I always do thorough research because it’s essential for creating better products. I set clear goals before I dive into this research, which include understanding the challenges users face, getting a good grasp of the current state of the travel industry, and analyzing how other travel apps perform.</h3>
            </div>
            <v-lazy-image :src="images['r1.png']" :src-placeholder="images['r1@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Competitive Analysis</h2>
            </div>
            <div class="body_block">
                <h3>I started by analyzing three popular travel planning apps. Each offers a lot of features and works well. However, I noticed a common problem when using them: the interfaces are too complex. Although they are packed with features, the overload of information on the pages makes them difficult to learn. Therefore, I want the products I design to be... </h3>
            </div>
            <div class="body_block_highlight">
                <h3>Both powerful and easy for users to pick up, ensuring a low learning curve. </h3>
            </div>
            <div class="body_block">
                <h3>To achieve this, I need to ensure the design has a simple and intuitive interface to reduce the difficulty of understanding and interaction for users.</h3>
            </div>
            <v-lazy-image :src="images['r2.png']" :src-placeholder="images['r2@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Interviews and Main Learnings</h2>
            </div>
            <div class="body_block">
                <h3>I conducted four interviews with participants aged between 20 and 40, who come from various professions and reside in different cities. All share a strong passion for travel and were either planning or had recently completed a trip. 
                    <br>From these interviews, I identified four key learnings:</h3>
            </div>
            <div class="gap_16_container">
                <div class="cards_container">
                    <div class="card_01" style="background-color: #44484D;">
                        <img :src="images['in1.svg']" alt="">
                        <h3>Users often browse various websites and social media apps for their travel plans.</h3>
                    </div>
                    <div class="card_01" style="background-color: #44484D;">
                        <img :src="images['in2.svg']" alt="">
                        <h3>An all-in-one app with essential trip planning and management features would be beneficial.</h3>
                    </div>
                </div>
                <div class="cards_container">
                    <div class="card_01" style="background-color: #44484D;">
                        <img :src="images['in3.svg']" alt="">
                        <h3>Users sometimes forget essential items and worry about missing something important.</h3>
                    </div>
                    <div class="card_01" style="background-color: #44484D;">
                        <img :src="images['in4.svg']" alt="">
                        <h3>It is challenging to create a group travel plan online due to individual preferences.</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Survey and Results</h2>
            </div>
            <div class="body_block">
                <h3>In addition to user interviews, I also conducted a survey on travel themes to further validate and deepen the main learnings that I got from the interviews. The advantage of using a survey is that it can reach a wider and more diverse audience, allowing for more comprehensive and accurate data analysis. This method enhances the breadth and depth of the research, improving the universality and applicability of the results. The four charts shown below are key findings extracted from the survey results.</h3>
            </div>
            <div class="gap_16_container">
                <div class="cards_container">
                    <div style="width:100%;">
                        <v-lazy-image :src="images['s1.svg']" :src-placeholder="images['s1@s.svg']"/>
                    </div>
                    <div style="width:100%;">
                        <v-lazy-image :src="images['s2.svg']" :src-placeholder="images['s2@s.svg']"/>
                    </div>
                </div>
                <div class="cards_container">
                    <div style="width:100%;">
                        <v-lazy-image :src="images['s3.svg']" :src-placeholder="images['s3@s.svg']"/>
                    </div>
                    <div style="width:100%;">
                        <v-lazy-image :src="images['s4.svg']" :src-placeholder="images['s4@s.svg']"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Pain Points</h2>
            </div>
            <div class="body_block">
                <h3>After analyzing user interviews and survey data, I identified two main pain points. These were frequently mentioned in interviews and reported by about 90% of survey respondents, far more than other issues. This underscores their importance, making them the primary focus of this project.</h3>
            </div>
            <div class="cards_container">
                <div class="card_02" style="background-color: #96FFD9;">
                    <img :src="images['pain1.svg']" alt="">
                    <h3 style="color: var(--background-color);">The process of making group travel plans is overly complicated.</h3>
                </div>
                <div class="card_02" style="background-color: #FFF388;">
                    <img :src="images['pain2.svg']" alt="">
                    <h3 style="color: var(--background-color);">The tediousness of preparing a packing list and the resulting anxiety.</h3>
                </div>
            </div>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Personas</h2>
            </div>
            <div class="body_block">
                <h3>After identifying two key pain points, I developed two personas based on earlier research. These personas help me better understand our target users and design solutions that effectively address their needs, improving the product's user experience.</h3>
            </div>
            <img_slideshow :slideshow_arr = 'personas'/> 
        </div>  
    </div> 

    <div class = "main_section_container">
        <div class="section_title_container">
            <h1>Design</h1>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Site Map</h2>
            </div>
            <div class="body_block">
                <h3>After identifying key user pain points and creating personas, I started with designing the sitemap to plan the app's main features. This step established clear navigation between the main pages and laid the foundation for a smooth user experience. </h3>
            </div>
            <v-lazy-image :src="images['sit1.png']" :src-placeholder="images['sit1@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Design System</h2>
            </div>
            <div class="body_block">
                <h3>I developed a design system for the project, using green as the primary color and implementing dark mode to highlight the travel theme and appeal to young people's modern aesthetics. This system ensures consistency in visual style across the app, enhancing user experience and development efficiency.</h3>
            </div>
            <img_slideshow :slideshow_arr = 'design_system'/> 
            <v-lazy-image :src="images['style3.png']" :src-placeholder="images['style3@s.png']"/>
        </div>
    </div> 

    <div class = "main_section_container">
        <div class="section_title_container">
            <h1>Feature Design Process
                <br>_Ai Generator</h1>
        </div>
        <div class="sub_section_container">
            <v-lazy-image :src="images['ai1.png']" :src-placeholder="images['ai1@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Idea vs Plan</h2>
            </div>
            <div class="body_block">
                <h3>The first user pain point is the frustration often associated with making travel plans. Research shows that users usually have a basic idea of their itinerary after deciding to travel. While discussing these ideas with friends is enjoyable, turning them into a detailed plan can be tedious. This has led me to wonder: </h3>
            </div>
            <div class="body_block_highlight">
                <h3>Why is sharing travel ideas enjoyable, but creating a detailed travel plan often leads to a decline in users' moods?</h3>
            </div>
            <div class="body_block">
                <h3>Sharing travel ideas is fun because it lets users dream about their adventures. But, making a detailed travel plan can be a mood killer because it involves boring, time-consuming tasks like looking up logistics, aligning schedules, and booking things. Moving from dreaming to doing often brings stress and frustration.</h3>
            </div>
            <div class="cards_container">
                <div style="width:100%;">
                    <v-lazy-image :src="images['mo1.png']" :src-placeholder="images['mo1@s.png']"/>
                </div>
                <div style="width:100%;">
                    <v-lazy-image :src="images['mo2.png']" :src-placeholder="images['mo2@s.png']"/>
                </div>
             </div>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Solution Ideation</h2>
            </div>
            <div class="body_block">
                <h3>If we could effectively utilize AI to allow users to simply share their initial travel ideas, and then have the AI handle all related tasks such as researching routes, coordinating schedules, and making bookings, it would significantly ease their burden. This approach would not only prevent mood declines caused by planning stress but also greatly enhance the overall experience of planning trips.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/988653076?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Concept Animation</h2>
            </div>
            <div class="body_block">
                <h3>I added a team chat feature to "Let's Go" allowing users to easily share ideas with their travel companions. The AI will review the group chat to automatically create and update events in the travel plan based on the discussion. Check out the animation below to see how it works.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/988653061?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />

        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Idea Improvement</h2>
            </div>
            <div class="body_block">
                <h3>During the interviews, I noticed that users still have concerns about AI, especially when it creates complete travel plans without their knowledge. This can unsettle users and reduce their engagement in the planning process. To address this issue, I designed a solution that ensures users can monitor AI's actions on their travel plans in real time. As shown in the illustration below, before AI starts planning based on user discussions, it notifies the user, ensuring transparency and control. This design not only builds trust but also significantly improves the overall user experience.</h3>
            </div>
            <v-lazy-image :src="images['improve.png']" :src-placeholder="images['improve@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Sketch & Wireframe</h2>
            </div>
            <div class="body_block">
                <h3>After identifying the solution, I created initial sketches to explore UI layouts, interactions and animations. I then created wireframes from these sketches, crucial for Hi-Fi prototyping. These wireframes clarify the structure of each page, ensuring the design meets both functional and aesthetic expectations.</h3>
            </div>
            <v-lazy-image :src="images['sketch1.png']" :src-placeholder="images['sketch1@s.png']"/>
            <v-lazy-image :src="images['wire1.png']" :src-placeholder="images['wire1@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Final Design : Hi-Fi Prototype</h2>
            </div>
            <div class="body_block">
                <h3>In the high-fidelity prototype demonstration, when users mention wanting to visit Disneyland during a chat, the AI immediately recognizes this and automatically adds an event to the travel plan. A button on the bottom right of the screen uses animation and text to alert users that a new event has been added. </h3>
            </div>
            <vimeo_container  :vimeolink="{radio:4,link:'https://player.vimeo.com/video/988628469?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Final Design : Frames</h2>
            </div>
            <img_slideshow :slideshow_arr = 'frames1'/> 
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Micro Interaction</h2>
            </div>
            <div class="body_block">
                <h3>By using micro-animations, users can more intuitively understand the actions AI takes on their travel plans. I have designed different micro-animations for each scenario.</h3>
            </div>
            <div class="cards_container">
                <div class="flex center_center">
                    <div class="microani_container">
                        <DotLottieVue autoplay loop ref="playerRef" useFrameInterpolation="true" src="/add.lottie" class="web_logo_ani"/>
                        <h3>Add</h3>
                    </div>
                    <div class="microani_container">
                        <DotLottieVue autoplay loop useFrameInterpolation="true" src="/edit.lottie" class="web_logo_ani"/>
                        <h3>Delete</h3>
                    </div>
                </div>
                <div class="flex center_center">
                    <div class="microani_container">
                        <DotLottieVue autoplay loop useFrameInterpolation="true" src="/delete.lottie" class="web_logo_ani"/>
                        <h3>Edit</h3>
                    </div>
                    <div class="microani_container">
                        <DotLottieVue autoplay loop useFrameInterpolation="true" src="/switch.lottie" class="web_logo_ani"/>
                        <h3>Switch</h3>
                    </div>
                </div>
             </div>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Testing Result & Iteration</h2>
            </div>
            <div class="body_block">
                <div class="list01">
                    <h3>Testing Feedback:</h3>
                    <ul>
                        <li>It's hard for users to notice the animations in the button.</li>
                        <li>Users have to open the history page to find out what events have been added, which can be cumbersome.</li>
                    </ul>
                    <h3>Feedback Analysis:</h3>
                    <ul>
                        <li>I need to make the notifications more noticeable to users.</li>
                        <li>I also need to introduce new notification methods to convey additional information beyond just the type of action, making it easier for users to recognize AI's behavior.</li>
                    </ul>
                    <h3>Improvement:</h3>
                    <ul>
                        <li>Since users focus on the middle or lower part of the screen while chatting, I moved the button there for easier visibility.</li>
                        <li>Beside micro-animation play,  key information about the AI actions is also briefly displayed.</li>
                        <li>I added a number on the button to display the count of unread action histories.</li>
                    </ul>
                </div>
            </div>
            <v-lazy-image :src="images['test1.png']" :src-placeholder="images['test1@s.png']"/>
        </div>
    </div> 

    <div class = "main_section_container">
        <div class="section_title_container">
            <h1>Feature Design Process
                <br>_Packing</h1>
        </div>
        <div class="sub_section_container">
            <v-lazy-image :src="images['pack1.png']" :src-placeholder="images['pack1@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Packing</h2>
            </div>
            <div class="body_block">
                <h3>During the research phase, I noticed that users often forget to pack important items, which decreases their travel experience. To prevent this, users spend a lot of time researching and thinking about what essentials to take. This increases their anxiety when making packing lists and packing. Therefore, I started to think:</h3>
            </div>
            <div class="body_block_highlight">
                <h3>How to ensure users don't overlook any important items while creating their packing list and packing their bags.</h3>
            </div>
            <div class="body_block">
                <h3> If achieved, "Let's Go" could significantly enhance users' sense of security and reduce stress during travel preparations. This not only prevents negative emotional impacts but also improves the overall travel experience.</h3>
            </div>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Solution Ideation</h2>
            </div>
            <div class="body_block">
                <h3>Therefore, I hope that "Let's Go" not only offers a basic packing list feature but also includes two additional AI-driven functions. These functions will help users determine what items to bring and assist them with a final check of their luggage, ensuring they are well-prepared and enhancing their travel experience.</h3>
            </div>
            <div class="cards_container">
                <div class="card_03" style="background-color: #ACF0A6;">
                    <img :src="images['pack2.svg']" alt="">
                    <div>
                        <h2 style="color: var(--background-color);" >Item Rec-List</h2>
                        <h3 style="color: var(--background-color);">A item recommendation list generated by AI.</h3>
                    </div>
                </div>
                <div class="card_03" style="background-color: #D9A9FF;">
                    <img :src="images['pack3.svg']" alt="">
                    <div>
                        <h2 style="color: var(--background-color);" >Packing Scanner</h2>
                        <h3 style="color: var(--background-color);">Assist users with a final check of their packed items.</h3>
                    </div>
                </div>
             </div>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Sketch & Wireframe</h2>
            </div>
            <div class="body_block">
                <h3>Here are the sketches and wireframes for the item recommendation feature. I carefully considered the user experience before finalizing the interaction patterns and UI design, aiming to create a simple yet engaging interaction.</h3>
            </div>
            <v-lazy-image :src="images['sketch2.png']" :src-placeholder="images['sketch2@s.png']"/>
            <v-lazy-image :src="images['wire2.png']" :src-placeholder="images['wire2@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Final Design : Hi-Fi Prototype</h2>
            </div>
            <div class="body_block">
                <h3>In the high-fidelity prototype demonstration, when users mention wanting to visit Disneyland during a chat, the AI immediately recognizes this and automatically adds an event to the travel plan. A button on the bottom right of the screen uses animation and text to alert users that a new event has been added. </h3>
            </div>
            <vimeo_container  :vimeolink="{radio:4,link:'https://player.vimeo.com/video/988636968?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Final Design : Frames</h2>
            </div>
            <img_slideshow :slideshow_arr = 'frames2'/> 
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Testing Result & Iteration</h2>
            </div>
            <div class="body_block">
                <div class="list01">
                    <h3>Testing Feedback:</h3>
                    <ul>
                        <li>Many users don't know how to interact with this feature.</li>
                        <li>Users want to be able to close recommendation list.</li>
                        <li>The page looks cluttered.</li>
                        <li>Users may still find it difficult to decide whether they need a particular item.</li>
                    </ul>
                    <h3>Feedback Analysis:</h3>
                    <ul>
                        <li>The feature page displays too much information.</li>
                        <li>Lacks necessary interaction guidance.</li>
                        <li>Lack of reference information to help users understand the necessity of each item and make decisions.</li>
                    </ul>
                    <h3>Improvement:</h3>
                    <ul>
                        <li>Separate the recommendation feature to allow users to turn it on and off.</li>
                        <li>When the feature is enabled, hide unrelated information to keep the page clean and organized.</li>
                        <li>Add arrow icons to help users understand the interaction.</li>
                        <li>Display ratings for each item from other users to help users make decisions.</li>
                    </ul>
                </div>
            </div>
            <v-lazy-image :src="images['impeove2.png']" :src-placeholder="images['impeove2@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Storyboard</h2>
            </div>
            <div class="body_block">
                <h3>I created a storyboard for the second feature of the packing list. This storyboard shows the user experience I want to deliver in real life. I hope this feature can help users quickly check their luggage.</h3>
            </div>
            <v-lazy-image :src="images['story.png']" :src-placeholder="images['story@s.png']"/>
        </div>
        <div class="sub_section_container">
            <div class="sub_title_block">
                <h2>Final Design : Life Demo</h2>
            </div>
            <div class="body_block">
                <h3>In the high-fidelity prototype demonstration, when users mention wanting to visit Disneyland during a chat, the AI immediately recognizes this and automatically adds an event to the travel plan. A button on the bottom right of the screen uses animation and text to alert users that a new event has been added. </h3>
            </div>
            <vimeo_container  :vimeolink="{radio:4,link:'https://player.vimeo.com/video/988653082?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>
    </div> 

    <div class = "main_section_container">
        <div class="section_title_container">
            <h1>Next...</h1>
        </div>
        <div class="sub_section_container">
            <div class="body_block">
                <h3>The reason behind my decision to design this travel app, 'Let's Go', arose during the winter of 2022 when I planned a trip with friends and we struggled to create a travel plan. Despite numerous attempts, we couldn't find an appropriate tool. 'Let's Go' was designed with the intent to make the process of planning trips more enjoyable and relaxed. With the progression of AI technology, I aim to continuously add more interesting features to 'Let's Go', and I look forward to the day when it becomes a real app.</h3>
            </div>
            <v-lazy-image :src="images['p1.png']" :src-placeholder="images['p1@s.png']"/>
            
        </div>
    </div> 

</div>



    <the_footer :use_data="{
        index: store.index_array.findIndex((item)=> item.name == 'NEBU'),
        b_color:'--p-color-main',
        f_color:'#000000',
        t_color:'#ffffff'
    }">
        <nebu/>
    </the_footer>


</div>

    
</template>

<script setup>
//依赖引入
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router'
import {onMounted,onBeforeMount,ref} from 'vue' 
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

//hook引入
import {animation_queue_route_in,animation_queue_route_out,animation_queue_before_route_in} from'../../hooks/use_art_page_functions.js'

//组件引入
import letsgo from'../main_pages/works_thum_cards/letsgo.vue'
import nebu from'../main_pages/works_thum_cards/nebu.vue'
import the_footer from '../footer.vue'
import overview_info from '../comps/overview_info.vue'
import link_button from '../comps/link_button.vue'
import img_slideshow from '../comps/img_slideshow.vue'
import VLazyImage from "v-lazy-image"
import vimeo_container from "../comps/vimeo_container.vue"
import bubble_animation from '../comps/bubble_animation.vue'








const store = useStore()

    const ani_el = ref(null)

    let page_id = store.index_array.findIndex((item)=> item.name == 'LETS_GO' )

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
    const imageModules = import.meta.globEager('../../assets/art_pages/letsgo/*');
    // 直接使用普通对象存储导入的图片路径
    const images = Object.entries(imageModules).reduce((acc, [path, module]) => {
        const imageName = path.split('/').pop();
        acc[imageName] = module.default;
        return acc;
    }, {});


    //overview_data数列
    let ov_data = {
        type:"App Concept / Product Design",
        roll:"Solo designer",
        time:"2022 - 2023",
        apps:"Figma, After Effects, Photoshop, Illustrator"
    }

    //按钮数据
    let case_study_button = {
        main_color:'var(--background-color)',
        action:'scroll',
        sub_color:'var(--p-color-font-white-100)',
        width:220,
        text:'See More Details',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=14-5230&t=QQI6hKGLwnpZBfID-1&scaling=min-zoom&page-id=14%3A3693&mode=design',
    }

    //Slideshow
    let personas = { 
        color:'var(--p-color-font-white-60)',
        type:'img',
        resize:false,
        contents:[
            [[images['per1.png'],images['per1@s.png']],""],
            [[images['per2.png'],images['per2@s.png']],""],
        ]
    }  
    let design_system = { 
        color:'var(--p-color-font-white-60)',
        type:'img',
        resize:false,
        contents:[
            [[images['style1.png'],images['style1@s.png']],""],
            [[images['style2.png'],images['style2@s.png']],""],
        ]
    }  

    let frames1 = { 
        color:'var(--p-color-font-white-60)',
        type:'img',
        resize:false,
        radio:4,
        contents:[
            [[images['frame1.png'],images['frame1@s.png']],""],
            [[images['frame2.png'],images['frame2@s.png']],""],
            [[images['frame3.png'],images['frame3@s.png']],""],
            [[images['frame4.png'],images['frame4@s.png']],""]
        ]
    }  
    let frames2 = { 
        color:'var(--p-color-font-white-60)',
        type:'img',
        resize:false,
        radio:4,
        contents:[
            [[images['frame5.png'],images['frame5@s.png']],""],
            [[images['frame6.png'],images['frame6@s.png']],""],
            [[images['frame7.png'],images['frame7@s.png']],""],
            [[images['frame8.png'],images['frame8@s.png']],""]
        ]
    }  


    let atag_link = "https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=2-10876&t=kefJsVXSXZ3rlsUC-1&scaling=contain&page-id=2%3A6138&mode=design"

    

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
    font-weight: 400;
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
    flex-direction: column;
    gap:40px
}
.gap_16_container{
    display: flex;
    flex-direction: column;
    gap:16px
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
    flex:1;
}
@media (max-width: 1000px){


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

.content_block_row_flex-reverse{
    flex-direction: column;
}
.content_block_row_defult{
    flex-direction: column;
}
.flex_half_size_img{
    width:100%;
    flex:none;
}

}
@media (max-width: 800px){

.content_block_multi_grid{
    flex-direction: column;
}


}

</style>
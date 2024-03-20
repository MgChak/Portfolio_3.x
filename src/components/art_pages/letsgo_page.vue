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
                <h1>Overview</h1>
                <link_button :prototype_links = 'case_study_button'/>
            </div>
            <h3>Let's Go is a travel planning application designed to assist users in creating, searching, and sharing multi-person travel plans. Utilizing the latest AI technology, the app becomes smarter, aiding users in creating travel plans during chats with their travel companions and offering packing suggestions based on their itineraries. Additionally, users can share their travel plans with other travelers in the online community for inspiration and advice. Let's Go makes for your ultimate travel companion for your next journey.</h3>
            <v-lazy-image :src="images['o_1.png']" :src-placeholder="images['o_1@s.png']"/>
        </div>
    </div> 



    <div class = "section_container bc_s">
        <div class="content_container" style="gap:80px">
            <div class="content_block_texts_24">
                <div class="content_block_flex">
                    <h1><span class="AI">AI</span> Powered<br>Feature Highlights</h1>
                    <link_button :prototype_links = 'case_study_button_dark'/>
                </div>
                <h3>Let's Go leverages its integrated AI and vast database to simplify travel preparations for users. It aims to make journey planning more efficient and less stressful.</h3>
            </div>
            <div class="breakline bc_w6 center"></div>
            <div class="content_block_row_defult content_block_row_flex-reverse">
                <div class="content_block_texts">
                    <h2>AI Generator <br>
                        Based on Conversation</h2>
                    <h3>Let's Go will automatically scan and analyze the chat content within groups, and based on the results, it will complete and generate corresponding events.</h3>
                </div>
                <vimeo_container class="content_block_row_iframe" :vimeolink="{radio:4,link:'https://player.vimeo.com/video/920279092?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
            </div>
            <div class="breakline bc_w6 center"></div>
            <div class="content_block_row_defult">
                <div class="content_block_texts">
                    <h2>Group Voting</h2>
                    <h3>The AI initiates a vote on event suggestions to match group preferences. Events confirmed by over half the members are added to the plan.</h3>
                </div>
                <vimeo_container class="content_block_row_iframe" :vimeolink="{radio:4,link:'https://player.vimeo.com/video/920279110?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
            </div>
            <div class="breakline bc_w6 center"></div>
            <div class="content_block_row_defult content_block_row_flex-reverse">
                <div class="content_block_texts">
                    <h2>AI Packing <br>
                    Recommendation</h2>
                    <h3>The AI recommends items to carry based on the travel destination, showing how many travelers have taken these items there before, for user reference.</h3>
                </div>
                <vimeo_container class="content_block_row_iframe" :vimeolink="{radio:4,link:'https://player.vimeo.com/video/920618338?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
            </div>
            <div class="breakline bc_w6 center"></div>
            <div class="content_block_row_defult ">
                <div class="content_block_texts">
                    <h2>AI Packing Scanner</h2>
                    <h3>The AI recommends items to carry based on the travel destination, showing how many travelers have taken these items there before, for user reference.</h3>
                </div>
                <vimeo_container class="content_block_row_iframe" :vimeolink="{radio:4,link:'https://player.vimeo.com/video/920749676?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
            </div>
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <v-lazy-image :src="images['p1.png']" :src-placeholder="images['p1@s.png']"/>
            <div class="content_block_texts_24">
                <h1 class="fc_s">Define Problems</h1>
                <h3 class="fc_s">Organizing group travel can be a daunting task for users, owing to the scarcity of appropriate tools and resources. Consequently, this often leads to a subpar experience when attempting to coordinate trips collaboratively.</h3>
            </div>
        </div>
        <div class="breakline bc_s center"></div>
        <div class="content_container">
            <v-lazy-image :src="images['p2.png']" :src-placeholder="images['p2@s.png']"/>
            <div class="content_block_texts_24">
                <h1 class="fc_s">How Might We ...</h1>
                <h3 class="fc_s">How might we help young adults with expendable income for travel, use mobile technology to be well prepared for a group trip? </h3>
            </div>
        </div>
    </div> 


    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_flex">
                <h1>Background Research</h1>
                <link_button :prototype_links = 'research_button'/>
            </div>
        </div>

        <div class="breakline_fullwidth bc_w1"></div>

        <div class="content_container">
            <h2>Learning Goals</h2>
        </div>

        <div class="content_container gap_set_80">
            <div class="content_block_texts_24">
                <h3 class="fc_w1">Going into the project, I had a few assumptions I wanted to validate...</h3>
                <div class="content_block_list">
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>The travel industry are still growing.</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>Users would like an app that can help them to create a group travel plan and prepare for the trip.</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>AI generator features can really help users.</h3>
                    </div>
                </div>
            </div>
            <div class="breakline_dots"></div>
            <div class="content_block_texts_24">
                <h3 class="fc_w1">As well as a few things I wanted to learn more about ...</h3>
                <div class="content_block_list">
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>Do users make a travel plan and how they create it this days?</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>Do people prefer to travel in a group or alone?</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>What kind of problems users are facing when they creating a group travel plan and preparing for a trip?</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>How AI can help users in preparing for a travel?</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="breakline_fullwidth bc_w1"></div>

        <div class="content_container">
            <h2>Research Methodology and Main Learnings</h2>
        </div>

        <div class="content_container gap_set_80">
            <div class="content_block_texts_40">
                <div class="content_block_texts">
                    <h3 class="fc_w1">1. User Interviews Implementation</h3>
                    <div class="content_block_list">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Conducted in-depth interviews with 4 diverse participants from varied fields to ensure a comprehensive understanding of user experiences and perspectives. <a :href="atag_link" target="_blank">( Click to view the full research document. )</a> </h3>
                        </div>
                    </div>
                </div>
                
                <v-lazy-image :src="images['re1.png']" :src-placeholder="images['re1@s.png']"/>
            </div>

            <div class="breakline_dots"></div>
            
            <div class="content_block_texts_40 gap_set_80">
                <div class="content_block_texts"> 
                    <h3 class="fc_w1">2. Utilizing Online Survey Tools</h3>
                    <div class="content_block_list">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Conducted surveys using Google Forms to efficiently gather and analyze participant responses. <a :href="atag_link" target="_blank">( Click to view the full research document. )</a> </h3>
                        </div>
                    </div>
                </div>
               
                <div class="content_block_row_defult content_block_row_flex-reverse">
                    <div class="content_block_texts">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>More people prefer group travel<br> rather than travel alone.</h3>
                        </div>
                    </div>
                    <div class="flex_half_size_img">
                        <v-lazy-image :src="images['re2.png']" :src-placeholder="images['re2@s.png']"/>
                    </div>
                </div>

                <div class="content_block_row_defult">
                    <div class="content_block_texts">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Most users have experienced forgetting to bring a piece of luggage to their travel destination, with over half of them having a negative experience as a result.</h3>
                        </div>
                    </div>
                    <div class="flex_half_size_img">
                        <v-lazy-image :src="images['re3.png']" :src-placeholder="images['re3@s.png']"/>
                    </div>
            
                </div>

                <div class="content_block_row_defult content_block_row_flex-reverse">
                    <div class="content_block_texts">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>One of the main issues faced by users with diverse preferences when creating a group travel plan.</h3>
                        </div>
                    </div>
                    <div class="flex_half_size_img">
                        <v-lazy-image :src="images['re4.png']" :src-placeholder="images['re4@s.png']"/>
                    </div>
                </div>
            </div>

            <div class="breakline_dots"></div>

            <div class="content_block_texts_40 gap_set_80">
                <div class="content_block_texts"> 
                    <h3 class="fc_w1">3. Literature Review of Related Travel Articles and Reports</h3>
                    <div class="content_block_list">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>Obtain the needed information by reading articles and industry reports.. <a :href="atag_link" target="_blank">( Click to view the full research document. )</a> </h3>
                        </div>
                    </div>
                </div>

                <div class="content_block_texts_24">
                    <div class="content_block_list">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>The travel industry are still growing. Latest UNWTO data shows a <span class="hilight_infor_s">38%</span>  increase in international tourists to 975 million in the first three quarters of 2023, with a <span class="hilight_infor_s">22% rise</span> in the third quarter, indicating strong summer demand in the Northern Hemisphere.</h3>
                        </div>
                    </div>
                    <v-lazy-image :src="images['re5.png']" :src-placeholder="images['re5@s.png']"/>
                </div>

                <div class="content_block_texts_24">
                    <div class="content_block_list">
                        <div class="list_i">
                            <div class="dot"></div>
                            <h3>More users like to make plans by referring to their travel itineraries or travel videos on social media.</h3>
                        </div>     
                    </div>
                    <v-lazy-image :src="images['re6.png']" :src-placeholder="images['re6@s.png']"/>
                </div>
            </div>
        </div>

        <div class="breakline_fullwidth bc_w1"></div>

        <div class="content_container">
            <h2>Further Thinking and Conception of Features</h2>
        </div>

        <div class="content_container gap_set_80">
            <div class="content_block_texts_24">
                <h3 class="fc_w1">Ai Generator Based on Conversation </h3>
                <div class="content_block_list">
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>By scanning the chat content of users within a group, AI helps users quickly generate activities and add them to the travel plan. </h3>
                    </div>
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>A voting feature allowing users to vote on the content generated by AI, taking into account the feelings of every team member as much as possible.</h3>
                    </div>
                </div>
            </div>
            <div class="breakline_dots"></div>
            <div class="content_block_texts_24">
                <h3 class="fc_w1">AI Packing Assistant</h3>
                <div class="content_block_list">
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>AI recommends items for users to carry based on the destination of the trip. The recommendations are derived from the analysis of a large amount of data, and each item is marked with the number of travelers who have taken the item to the destination, for users to reference. </h3>
                    </div>
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>AI recognizes and scans users' luggage through the camera, automatically checks off items that are already prepared in the packing list, and sorts them automatically.</h3>
                    </div>
                </div>
            </div>
            <div class="breakline_dots"></div>
            <div class="content_block_texts_24">
                <h3 class="fc_w1">Online Community</h3>
                <div class="content_block_list">
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>Provide an online travel community that offers all users a place to gain travel inspiration. Users can view others' travel plans or share their own in the community.</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot"></div>
                        <h3>Users can directly add events they like from others' shared plans to their own plans.</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="breakline_fullwidth bc_w1"></div>

        <div class="content_container">
            <div class="content_block_flex">
                <h2>More Research</h2>
                <link_button :prototype_links = 'research_button'/>
            </div>

            <img_slideshow :slideshow_arr = 'research_arry'/> 
        </div>
    </div> 

    <div class = "section_container bc_m">
        <div class="content_container">
            <v-lazy-image :src="images['ta.png']" :src-placeholder="images['ta@s.png']"/>
            <div class="content_block_texts_24">
                <h1 class="fc_s">Target Audience</h1>
                <div class="content_block_list">
                    <div class="list_i">
                        <div class="dot dot_dark"></div>
                        <h3 class="fc_s">Between the ages of 18 and 50.</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot dot_dark"></div>
                        <h3 class="fc_s">Millennial and Gen Z generations.</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot dot_dark"></div>
                        <h3 class="fc_s">Willing to share the process of traveling online through text or photos.</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot dot_dark"></div>
                        <h3 class="fc_s">Using their smart phones during their travels.</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot dot_dark"></div>
                        <h3 class="fc_s">Planning a group trip.</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="breakline bc_s center"></div>
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">Personas</h1>
                <div class="content_block_row_defult content_block_row_flex-reverse">
                    <div class="flex_half_size_img_100">
                        <v-lazy-image :src="images['persona2.png']" :src-placeholder="images['persona2@s.png']"/>
                    </div>
                    <div class="flex_half_size_img_100">
                        <v-lazy-image :src="images['persona1.png']" :src-placeholder="images['persona1@s.png']"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="breakline bc_s center"></div>
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">Task Flows</h1>
                <img_slideshow :slideshow_arr = 'task_arry'/> 
            </div>
        </div>

        <div class="breakline bc_s center"></div>
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s"> Wireframes</h1>
                <v-lazy-image :src="images['w.png']" :src-placeholder="images['w@s.png']"/>
            </div>
        </div>
    </div> 


    <div class = "section_container bc_s">

        <div class="content_container">
            <div class="content_block_flex">
                <h1>Usability Testing <br>_AI Generator Pop Up</h1>
                <link_button :prototype_links = 'testing_button'/>
            </div>
            
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Feature Introduction</h2>
                <h3>During the chat, the AI automatically detects the content of the users' conversations. When users express a desire to do something during their trip, such as visiting a specific restaurant or traveling to a certain attraction, the AI will pop up a window asking if the user wants to add this activity to their plan.</h3>
            </div>
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Goal</h2>
                <h3>Without forcibly interrupting the users' chat process, reminds the users to make a choice.</h3>
            </div>
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Usability Test Round 1</h2>
                <h3>In the first round of testing, most of the testers were more inclined towards option A because it did not interrupt the user's operation. Option B, on the other hand, completely disrupted the user's workflow and forced them to make a decision right away. This high level of intrusiveness made users resistant to this feature, especially since the window was triggered without any input from the user, and they had no advance warning that the window would appear.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924794040?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Usability Test Round 2</h2>
                <h3>After determining that users preferred a design with lower intrusiveness, I kept and modified option A, and designed a new option B with lower intrusiveness. Both options do not interrupt the user's current operation. I conducted new tests with these two options. However, the results did not provide a clear answer because the two options had different functionalities. Option B had some additional functions, which gave it a natural advantage, and this should not have been the case in this test.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924794056?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="content_container">
            <div class="content_block_texts">
                <h2>Usanility Test Round 3</h2>
                <h3>In order to ensure the accuracy of the test results, I made further modifications to options A and B, and conducted a third round of testing. This time, both options had exactly the same functionality, with the only difference being in their display. Option A emerged as the winner in this test, so I ultimately decided to use option A as the final design.</h3>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/924794062?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="content_container">
            <div class="content_block_flex">
                <h2>More Testing</h2>
                <link_button :prototype_links = 'testing_button'/>
            </div>

            <img_slideshow :slideshow_arr = 'testing_arry'/> 
        </div>

    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">Primary Feature 01<br>_Create a New Trip Plan</h1>
                <h3 class="fc_s">
Users can easily create a travel plan in Let's Go and start adding their favorite events. Throughout the creation process, they can also invite friends who will be traveling with them to participate in crafting a unique and collaborative travel itinerary.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_1'/>
                <link_button :prototype_links = 'fp_button_1'/>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/901210479?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="breakline_fullwidth bc_b"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">Primary Feature 02<br>_AI Chat Assistant</h1>
                <h3 class="fc_s">The AI chat assistant will automatically generates or adjusts travel plans based on users' chat content in Let's Go. As users discuss their travel ideas using the group chat feature, an AI assistant continuously scans the conversation, creating viable travel plans based on the group conversation. Users can then vote to decide whether to include the AI-generated content in their travel itinerary.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_2'/>
                <link_button :prototype_links = 'fp_button_2'/>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/901210458?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        
        </div>

        <div class="breakline_fullwidth bc_b"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">Primary Feature 03<br>_Packing Assistant</h1>
                <h3 class="fc_s">The packing assistant feature provides users with a recommended packing list based on the weather forecast of their travel destination. For instance, in cold regions, Let's Go suggests bringing warm clothing. Additionally, users can utilize the luggage scanning function, where Let's Go identifies items in the camera view and automatically checks them off the list, aiding in efficient travel preparation.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_3'/>
                <link_button :prototype_links = 'fp_button_3'/>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/901210506?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>

        <div class="breakline_fullwidth bc_b"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">Primary Feature 04<br>_Travel Community</h1>
                <h3 class="fc_s">The primary goal of this feature is to provide users with a platform to share, find, and store their travel plans. The homepage automatically recommends popular travel plans or destinations tailored to the user's travel preferences. On the search results page, users can conveniently swipe through images included in the plans. Furthermore, the Plan Details page features a system-generated summary of the plan's highlights at the top, enabling users to quickly ascertain whether the plan aligns with their needs.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_4'/>
                <link_button :prototype_links = 'fp_button_4'/>
            </div>
            <vimeo_container  :vimeolink="{radio:16,link:'https://player.vimeo.com/video/901210543?muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'}" />
        </div>
    </div> 



    <div class = "section_container bc_s">
        <div class="content_container">
            <h1 class="fc_m">Style Guide</h1>
            <img_slideshow :slideshow_arr = 'style_arry'/> 
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">Next...</h1>
                <h3 class="fc_s">The reason behind my decision to design this travel app, 'Let's Go', arose during the winter of 2022 when I planned a trip with friends and we struggled to create a travel plan. Despite numerous attempts, we couldn't find an appropriate tool. 'Let's Go' was designed with the intent to make the process of planning trips more enjoyable and relaxed. With the progression of AI technology, I aim to continuously add more interesting features to 'Let's Go', and I look forward to the day when it becomes a real app.</h3>
            </div>
            <link_button :prototype_links = 'next_button'/>
            <v-lazy-image :src="images['next.png']" :src-placeholder="images['next@s.png']"/>
        </div>
    </div>  



    <the_footer :index = "store.index_array.findIndex((item)=> item.name == 'NEBU' )">
        <nebu/>
    </the_footer>


</div>

    
</template>

<script setup>
//依赖引入
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router'
import {onMounted,onBeforeMount} from 'vue' 

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



    //高光功能

    let highlight_arry_1={
        radio:4,link:'https://player.vimeo.com/video/920279092?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    } 

        //style guid
    let style_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [[images['l1.png'],images['l1@s.png']],""],
            [[images['l2.png'],images['l2@s.png']],""],
            [[images['l3.png'],images['l3@s.png']],""],
            [[images['l4.png'],images['l4@s.png']],""],
            [[images['l5.png'],images['l5@s.png']],""],
            [[images['l6.png'],images['l6@s.png']],""]
        ]
    }  

    //研究总结
    let research_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [[images['r1.png'],images['r1@s.png']],"Background Research Summary"],
            [[images['r2.png'],images['r2@s.png']],"Background Research Summary"],
            [[images['r3.png'],images['r3@s.png']],"Background Research Summary"],
            [[images['r4.png'],images['r4@s.png']],"Background Research Summary"],
            [[images['r5.png'],images['r5@s.png']],"Background Research Summary"],
            [[images['r6.png'],images['r6@s.png']],"Interview Results Summary"],
            [[images['r7.png'],images['r7@s.png']],"Competitive Analysis Overview"]
        ]
    }  

      //测试总结
      let testing_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [[images['t1.png'],images['t1@s.png']]],
            [[images['t2.png'],images['t2@s.png']]],
            [[images['t3.png'],images['t3@s.png']]],
            [[images['t4.png'],images['t4@s.png']]],
            [[images['t5.png'],images['t5@s.png']]]
        ]
    }  

    
      //taskflows
      let task_arry = {
        color:'var(--p-color-sub)',
        type:'img',
        resize:false,
        contents:[
            [[images['f1.png'],images['f1@s.png']]],
            [[images['f2.png'],images['f2@s.png']]],
            [[images['f3.png'],images['f3@s.png']]],
            [[images['f4.png'],images['f4@s.png']]]
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

    let research_button = {
        main_color:'#000000',
        sub_color:'var(--p-color-main)',
        width:225,
        text:'FULL RESEARCH DOC',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=2-10876&t=kefJsVXSXZ3rlsUC-1&scaling=contain&page-id=2%3A6138&mode=design',
    }

    let testing_button = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:210,
        text:'FULL TESTING DOC',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=1-9076&t=McW1tpJ5YyYDo6kp-1&scaling=contain&page-id=1%3A3&mode=design',
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

    let atag_link = "https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=2-10876&t=kefJsVXSXZ3rlsUC-1&scaling=contain&page-id=2%3A6138&mode=design"

    

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
    --p-color-sub-2:#171717;
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
    h3.fc_s{
        font-weight: 600;
        opacity: 0.9;
    }
    h2.fc_s{
        font-weight: 700;
    }
    h1.fc_s{
        font-weight: 900;
    }

h4{
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
    gap:8px;
}
.content_block_texts_24{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:24px;
}
.content_block_texts_40{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:40px;
}
.content_block_row_defult{
    width:100%;
    display: flex;
    gap:24px;
    align-items: center;
}
.content_block_row_iframe {
    width:100%;
    max-width: 550px;
    flex:none;
    display: flex;
    flex-direction: column;
}


.content_block_buttons{
    width:100%;
    display: flex;

    gap:24px
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
.breakline_fullwidth{
    width: 100%;
    max-width: 1000px;
    height:0.5px;
    opacity: 0.5;
}
.breakline_dots{
    width: 40%;
    height:0.5px;
    border-bottom: dashed 0.3px rgb(255, 255, 255);
    opacity: 0.2;
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
    color:var(--p-color-sub);
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
.bc_s{
    background:var(--p-color-sub-2)
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

.AI{
    font-size: 80px;
    font-weight: 900;
    line-height: 80px;
    background: linear-gradient(53deg, #81FF13 -0.36%, #12FAFA 42.8%, #F798FF 83.44%);
    background-size: 100% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    /* animation: gradient-animation 1s linear infinite; */
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
.dot_dark::after{
    background-color: var(--p-color-sub-2);
}
.hilight_infor_s{
    color:var(--p-color-main)
}
.gap_set_80{
    gap:80px;
}
.gap_set_40{
    gap:40px;
}
.flex_half_size_img{
    width:550px;
    flex:none;
}
.flex_half_size_img_100{
    width:100%;
}
@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.content_block_row_flex-reverse{
    flex-direction: row-reverse;
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

</style>
<template>

<div class="main_container">
    <cat/> 

    <div class = "ov_section_container bc_s">
        <div class="ov_content_container">
            <h4>MEOW MIND</h4>
            <div class="breakline bc_w1"></div>
            <overview_info :ov_data="ov_data" />
            <div class="breakline bc_w1"></div>
            <h3>MEOW MIND leverages advanced artificial intelligence to interpret cat’s actions and moods, offering insights and advice for nurturing a deeper, more harmonious relationship between cats and their human companions.</h3>
        </div>
    </div>  

    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_flex">
                <h1>OVERVIEW</h1>
                <link_button :prototype_links = 'case_study_button'/>
            </div>
            <h3>MEOW MIND is an AI-powered app designed to enhance interactions with cats by understanding the meanings behind their behaviors. The app analyzes cat’s body language through the camera, displaying the cat's current mood above its head with emojis for easy emotional reading by the user. Additionally, MEOW MIND offers features such as health monitoring and real-time guidance for engaging with cats based on their movements, further assisting in the care and understanding of these pets.</h3>
            <img class="no_raius" src="../../assets/art_pages/cat/o_1.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>MOBILE & VR MODE</h1>
                <h3>To cater to a wider audience and ensure easy access without the need for VR headsets, MEOW MIND also offers a mobile app version. Both the VR and mobile versions feature identical functionalities, allowing users to choose based on their specific needs.</h3>
            </div>
            <img class="no_raius" src="../../assets/art_pages/cat/o_2.png" alt="">
        </div>
    </div> 

    <div class = "section_container bc_m">
        <div class="content_container">
            <h1 class="fc_s">LOGO & COLORS</h1>
            <img class="cardshadow" src="../../assets/art_pages/cat/logo.png" alt="">
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
            <img src="../../assets/art_pages/cat/p_1.png" alt="">
            <div class="content_block_texts_24">
                <h1 class="fc_s">DEFINE PROBLEMS</h1>
                <h3 class="fc_s">Cats use their behavior to convey their feelings and emotions. However, without professional knowledge or expertise, it can be difficult for humans to understand what a cat is trying to communicate. This can potentially lead to harm on both sides during human-cat interactions. For example, certain unintentional provocative behaviors by humans can trigger sudden attacks by cats. Alternatively, cats may misunderstand human behavior and attempt to interact at inappropriate times. On the other hand, if humans cannot correctly understand a cat's signals of pain or discomfort, it can result in delayed treatment for the cat's illness.</h3>
            </div>
        </div>

        <div class="breakline bc_s center"></div>

        <div class="content_container">
            <img src="../../assets/art_pages/cat/p_2.png" alt="">
            <div class="content_block_texts_24">
                <h1 class="fc_s">How can we assist users in improving their lives with cats?</h1>
                <div class="content_block_list">
                    <div class="list_i">
                        <div class="dot c_s"></div>
                        <h3 class="fc_s">How might we  make it easy for users to have a  professional guidance during human-cat interaction.</h3>
                    </div>
                    <div class="list_i">
                        <div class="dot c_s"></div>
                        <h3 class="fc_s">How might we help users to learn about professional knowledge on taking care of cats with the lowest possible learning cost.</h3>
                    </div>
                    <div class="list_i">
                        <div  class="dot c_s"></div>
                        <h3 class="fc_s">How might we  help users to understand the meaning of cat behavior and the cat's emotions correctly.</h3>
                    </div>
                </div>
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
                <h1 class="fc_s">INTERACTION GUIDE<br>_VR MODE</h1>
                <h3 class="fc_s">In the VR version of the app, users can summon the control panel with gestures. The app tracks eye movements to control cursor movement, while hand motions enable actions like clicking and dragging.</h3>
            </div>
            <link_button :prototype_links = 'vp_button_1'/>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/902080626?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="c_p_vr"></iframe></div>
        </div>

        <div class="breakline bc_s center"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">INTERACTION GUIDE<br>_MOBILE MODE</h1>
                <h3 class="fc_s">The mobile version of the app retains all the features identical to the VR version. Users can view their cat's emotions through the phone's camera.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_2'/>
                <link_button :prototype_links = 'fp_button_2'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901208617?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="c_p_scan"></iframe></div>
        </div>

        <div class="breakline bc_s center"></div>

        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">MEOW CHAT<br>_MOBILE MODE</h1>
                <h3 class="fc_s">To assist users in better caring for their cats, MEOW MIND offers an AI assistant named MEOW CHAT on the mobile platform. Users can ask MEOW CHAT questions to gain professional knowledge about cat care.</h3>
            </div>
            <div class="content_block_buttons">
                <link_button :prototype_links = 'vp_button_3'/>
                <link_button :prototype_links = 'fp_button_3'/>
            </div>
            <div class="pp_container" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/901208583?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="c_p_ai"></iframe></div>
        </div>
    </div> 

    <div class = "section_container bc_b">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1>Usability Test Result</h1>
                <h3>In addition to adding prompts, we have also relocated the options from above the input box to below the question, to improve user experience. This will make it easier for users to identify and select the appropriate option in response to the AI's question.</h3>
            </div>
            <img src="../../assets/art_pages/cat/s1_1.png" alt="">
        </div>

        <div class="content_container">
            <h3>I have enhanced the chat interface by adding a header, which aims to improve user comprehension. The 'category' selection box has been redesigned for greater prominence, and we have incorporated prompts to facilitate a deeper understanding of its use. Additionally, the input box has been upgraded to enable users to send both audio and image content to the AI.</h3>
            <img src="../../assets/art_pages/cat/s1_2.png" alt="">
        </div>

        <div class="breakline bc_w1"></div>

        <div class="content_container">
            <h3>After testing, it was found that all subpages can be navigated back to the main page via the "back" icon. This renders the home icon in the bottom navigation bar redundant. To optimize space utilization, I have removed the home icon and relocated the AI-chat's input box to the bottom navigation bar. This modification not only frees up more space on the homepage for displaying additional content but also maintains seamless navigation across all pages.</h3> 
            <img src="../../assets/art_pages/cat/s1_3.png" alt="">
        </div>
    </div> 


    <div class = "section_container bc_m">
        <div class="content_container">
            <div class="content_block_texts_24">
                <h1 class="fc_s">NEXT...</h1>
                <h3 class="fc_s">My initial inspiration for designing MEOW MIND was to capitalize on the vast advancements in AI and VR technologies. My goal was to use this technology to strengthen the bond between humans and cats, enabling people to gain a deeper understanding of their feline companions - what they think and what they need. I hope that with the continuous evolution of technology, this concept will one day become a reality.</h3>
            </div>
            <link_button :prototype_links = 'next_button'/>
            <img src="../../assets/art_pages/cat/next.png" alt="">
        </div>
    </div>  


    <the_footer :index = "store.index_array.findIndex((item)=> item.name == 'LETS_GO' )">
        <letsgo/>
    </the_footer>


</div>

    
</template>

<script setup>
//组件引入
import cat from'../main_pages/works_thum_cards/cat.vue'
import letsgo from'../main_pages/works_thum_cards/letsgo.vue'
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
import r1 from "../../assets/art_pages/cat/r_1.png"
import r2 from "../../assets/art_pages/cat/r_2.png"
import r3 from "../../assets/art_pages/cat/r_3.png"
import r4 from "../../assets/art_pages/cat/r_4.png"



const store = useStore()

    let page_id = store.index_array.findIndex((item)=> item.name == 'MEOW_MIND' )

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

    let v_1 = "https://player.vimeo.com/video/901210261?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_2 = "https://player.vimeo.com/video/901210198?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_3 = "https://player.vimeo.com/video/901210235?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_4 = "https://player.vimeo.com/video/901210216?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    let v_5 = "https://player.vimeo.com/video/901210249?background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

    let highlight_arry = {
        color:'var(--p-color-main)',
        type:'vimeo',
        resize:true,
        contents:[
            [v_1,"VR Mode"],
            [v_2,"Home Page"],
            [v_3,"Cat Emotion Scanner_Customization"],
            [v_4,"Interaction Guide"],
            [v_5,"Ai Chating"]
        ]
    }    


    //研究总结
    let research_arry = {
        color:'var(--p-color-main)',
        type:'img',
        resize:false,
        contents:[
            [r1,"Background Research"],
            [r2,"Background Research & Survey Feedback"],
            [r3,"Survey Feedback"],
            [r4,"Survey Feedback"],
        ]
    }  


    //按钮依赖
    let case_study_button = {
        main_color:'#000000',
        sub_color:'var(--p-color-main)',
        width:165,
        text:'CASE STUDY',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-46685&t=YIt6F0pheIRRFmXT-1&scaling=min-zoom&page-id=13%3A45022&mode=design',
    }
    let case_study_button_dark = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:165,
        text:'CASE STUDY',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-46685&t=YIt6F0pheIRRFmXT-1&scaling=min-zoom&page-id=13%3A45022&mode=design',
    }

    let vp_button_1 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/902080626?share=copy',
    }


    let vp_button_2 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901208617?share=copy',
    }

    let fp_button_2 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=14-2051&t=W0tJ1wGtCG2OSKxB-1&scaling=scale-down&page-id=14%3A999&starting-point-node-id=14%3A2051&show-proto-sidebar=1&mode=design',
    }

    let vp_button_3 = {
        main_color:'var(--p-color-sub)',
        sub_color:'var(--p-color-main)',
        width:185,
        text:'Video Prototype',
        link:'https://vimeo.com/901208583?share=copy',
    }

    let fp_button_3 = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:185,
        text:'Figma Prototype',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-30097&t=65Qp4icfxrfJLnfI-1&scaling=scale-down&page-id=13%3A21900&starting-point-node-id=13%3A30097&mode=design',
    }

    let next_button = {
        main_color:'var(--p-color-main)',
        sub_color:'var(--p-color-sub)',
        width:165,
        text:'CASE STUDY',
        link:'https://www.figma.com/proto/Q2E9KzAWQUHdTwmmM6G0qH/MyWeb_Assets?type=design&node-id=13-46685&t=YIt6F0pheIRRFmXT-1&scaling=min-zoom&page-id=13%3A45022&mode=design',
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

    --p-color-main:#F7D157;
    --p-color-sub:#2D2C27;
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
    background-color: var(--p-color-sub);
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
<template>

<div class="main_container" id="article_container_for_scroll">
    <abs/> 

    <div class = "overview_sec">
        <div style="{width:200px}">
            <img class="logo" src="../../assets/art_pages/abs/logo.png" alt="">
        </div>
        <div class="overview_container">
            <div class="overview_cum1">
                <h2>SUMMER INTERNSHIP 2022</h2>
            </div>
        </div>
    </div>  

    <div class="design_process_sec section_conatiner">
        <h1>OVERVIEW & MY ROLL</h1>
        <h3>In the summer of 2022, I was fortunate enough to have a UX/UI design internship at ABOVE & BEYOND STUDIO. Above & Beyond Studios is a startup company to inspire communities to shop small and help local businesses succeed  digitally.
            <br>In this internship, I learned how to collaborate with a team and how to allocate tasks. To ensure visual consistency among the components designed by each designer when combined, the UX team needs to have frequent meetings to identify and update the design language and design system we use. Additionally, in order to ensure a smooth product development process, I need to communicate frequently with the development team, answer engineers' questions regarding the design drawings, and make additions or modifications to the design based on the actual development situation.
            <br>During the internship, I did:
            <br>_Redesigned the entire B2B responsive website.
            <br>_Redesigned the existing B2C responsive website (online shop) components. 
            <br>_Optimized and simplified the online payment process.
            <br>_Actively cooperated within the team and coordinated with engineering team to ensure a high efficiency for projects.
        </h3>
        <is_v_imgs>
            <img src="../../assets/art_pages/abs/o.png" alt="">
        </is_v_imgs>
    </div>

    <div class="design_process_sec section_conatiner">
        <h1>PROJECT 01 _ FreedomRain Online Shop</h1>
        <h2>FreedomRain is an online shop focused on local products, black owners, and coupons.</h2>
        <h3>FreedomRain was the first project I worked on during my internship, which was an online shopping mall. I worked with other excellent designers in the UX team to design this project. Specifically, I was responsible for the UX/UI design of the header, footer, search system, shopping cart system, and checkout system.
            <br>In order to improve the efficiency of development, I try to use the same components in the mobile version and the desktop version when designing. Following this principle, I first designed the mobile version. Because “In 2022, mobile phones generate 60.66% of website traffic, while Desktops and Tablets are Responsible for 39.34%.
                55% of page views in 2021 came from mobile phones. “A better mobile experience will drive more traffic to the company.
        </h3>
        <is_v_imgs>
            <img src="../../assets/art_pages/abs/p_1.png" alt="">
        </is_v_imgs>
    </div>

    <div class="design_process_sec section_conatiner">
        <h1>TEMPLATE DESIGN</h1>
        <h3>During the design process, many pages had undecided text content, such as the articles in the customer support section. Additionally, these pages require constant modification and updates over time. Therefore, template design was a good choice. I designed many components based on various scenarios and demonstrated how these components could be used on the page. When adjustments to the page content were necessary, only the text content needed to be modified.
                55% of page views in 2021 came from mobile phones. “A better mobile experience will drive more traffic to the company.
        </h3>
        <is_v_imgs>
            <img src="../../assets/art_pages/abs/t.png" alt="">
        </is_v_imgs>
    </div>

    <is_v_imgs>
        <img src="../../assets/art_pages/abs/poster_1.png" alt="">
    </is_v_imgs>

    <div class="design_process_sec section_conatiner">
        <h1>PROJECT 02 _ ABS for Business Site</h1>
        <h3>This is a website for business owners, the main purpose of which is to showcase the various services offered by ABOVE & BEYOND STUDIO. At the same time, the website contains the process of enterprise account registration and purchase of services.
            The official website design for ABS was my second project. Unlike FreedomRain, I was solely responsible for the design of this project. In addition to showcasing the company's various services and features based on the requirements, I also needed to design a complete checkout system for this project.
        </h3>
        <is_v_imgs>
            <img src="../../assets/art_pages/abs/p_2.png" alt="">
        </is_v_imgs>
    </div>



    <the_footer :index = "store.index_array.findIndex((item)=> item.name == 'LETS_GO' )">
        <letsgo/>
    </the_footer>


</div>

    
</template>

<script setup>
//组件引入
import abs from'../main_pages/works_thum_cards/abs.vue'
import letsgo from'../main_pages/works_thum_cards/letsgo.vue'
import prototype_links from'../comps/prototype_links.vue'
import is_v_imgs from'../comps/is_v_imgs.vue'
import the_footer from '../footer.vue'
//引入hooks
import {animation_queue_route_in,animation_queue_route_out,animation_queue_before_route_in} from'../../hooks/use_art_page_functions'
//依赖引入
import { computed,onMounted,onBeforeMount} from 'vue' 
import useStore from '../../store/index'
import { onBeforeRouteLeave } from 'vue-router';


const store = useStore()

    let page_id = store.index_array.findIndex((item)=> item.name == 'ABS_INTERNSHIP' )

    onBeforeMount(()=>{
        animation_queue_before_route_in(page_id)
    })
    
    onMounted(()=>{
        animation_queue_route_in(page_id)
    })

    onBeforeRouteLeave((to,from,next)=>{
        animation_queue_route_out(page_id,to,next)
    })


    //按钮依赖
    let prototype_1 = {
        color:'#F44361',
        text:'USER FLOW TASK 1-1 : Search and save an trip plan from community.',
        v_link:'',
        f_link:'',
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

    background: linear-gradient(90deg, #000000 0%, #241C20 53.82%, #000000 100%);;
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

    color: #F44361;

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
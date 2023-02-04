<template>

        <div class="container_thum_1 background" :class="card_z_index">
            
                <img src="../../../assets/thum_cards/letsgo_large_p.png" class="largephone" alt="">
                <img src="../../../assets/thum_cards/letsgo_small_p.png" class="smallphone" alt="">

        </div>

    
</template>

<script setup>
//hooks引入
import{handle_style_change,handle_class_change,handle_z_index_change,handle_card_position_change,handle_img_position_change} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,watchPostEffect} from 'vue'
import useStore from '../../../store/index.js'
import { gsap } from "gsap"
const store = useStore()

    let card_id = 1

    let card_z_index = computed(()=>handle_z_index_change(card_id))

    //处理卡片的三种尺寸变形
    watchPostEffect(()=>{
        if (card_id == store.expand_page_number && card_id != store.router_on_page_number){
        //全屏状态
            gsap.to('.container_thum_1',{
                width:'100vw',
                height:'100vh',
                duration:0.6,
                ease:"power4.out",
            })
            gsap.to('.largephone',{
                    bottom:'0',
                    left:'-14%',
                    width:'110%',
                    duration:0.6,
                    ease:"power4.out",
            })
            gsap.to('.smallphone',{
                    bottom:'0',
                    left:'30%',
                    width:'65%',
                    duration:0.6,
                    ease:"power4.out",
            })            
        }else if (card_id == store.router_on_page_number){
        //路由展开状态/文章内状态
            gsap.to('.container_thum_1',{
                width:'100%',
                height:'85vh',
                duration:0.6,
                ease:"power4.out",
            })
            gsap.to('.largephone',{
                bottom: '0',
                left: '-2%',
                width: '90%',
                duration:0.6,
                ease:"power4.out",
            })
            gsap.to('.smallphone',{
                bottom: '-2%',
                left: '35%',
                width: '53%',
                duration:0.6,
                ease:"power4.out",
            })
        }else{
        //小卡片状态
            gsap.to('.container_thum_1',{
                width:store.get_thumcard_width,
                height:store.get_thumcard_height,
                filter:' drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))',
                duration:0.3,
                ease:"none",
            })
            gsap.to('.largephone',{
                bottom:'0',
                left:'5%',
                width:'85%',
                duration:0.3,
                ease:"none",
            })
            gsap.to('.smallphone',{
                bottom:'10%',
                left:'30%',
                width:'50%',
                duration:0.3,
                ease:"none",
            })
        }  
    })

    //处理卡片的偏移
    watchPostEffect(()=>{
        //处在中心的右边
        if (card_id == store.card_positon_move + 1){
            //hover
            if(['next','projects'].includes(store.tracker_status)){
                gsap.to('.container_thum_1',{
                    xPercent:-40,
                    duration:0.6,
                    ease:"power4.out",
                })
            //正常状态
            }else{
                gsap.to('.container_thum_1',{
                    xPercent:-28,
                    duration:0.3,
                    ease:"power4.out",
                })
            }
        //处在中心的左边    
        }else if (card_id == store.card_positon_move - 1){
            //hover
            if(['pre','cover'].includes(store.tracker_status)){
                gsap.to('.container_thum_1',{
                    xPercent:40,
                    duration:0.6,
                    ease:"power4.out",
                })
            //正常状态
            }else{
                gsap.to('.container_thum_1',{
                    xPercent:28,
                    duration:0.6,
                    ease:"power4.out",
                })
            }
            
        }else{
            gsap.to('.container_thum_1',{
                xPercent:0,
                duration:0.3,
                ease:"none",
            })
        }
    })
    

</script> 

<style scoped>

.container_z_index_back{
    z-index:0;
}
.container_z_index_front{
    z-index:1;
}
.background{
    width:100vw;
    height:100vh;
    background: linear-gradient(90deg, #2D3527 0%, #3F4F33 49.65%, #2D3527 100%);
}
.largephone {
    position: absolute;
    z-index:1;
}
.smallphone {

    position: absolute;
    z-index:1;
}



</style>
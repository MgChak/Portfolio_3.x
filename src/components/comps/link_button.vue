<template>
    
        <div ref="button" class="button"
            @click="handle_click()"
            @pointerover="handle_hover(1,$event)" 
            @pointerleave="handle_hover(0,$event)"
            :style="{background:prototype_links.main_color,'border-color':prototype_links.sub_color,width:prototype_links.width+'px'}"
        >
           <div class="contents">
                <h3 ref="h3" :style="{color:prototype_links.sub_color}">
                    {{prototype_links.text}}
                </h3>
                <div ref="dot" class="arrow_container" :style="{background:prototype_links.sub_color}">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9675 7.05293C12.2826 6.73785 12.2826 6.227 11.9675 5.91192L6.83296 0.777356C6.51788 0.462274 6.00703 0.462274 5.69195 0.777356C5.37687 1.09244 5.37687 1.60329 5.69195 1.91837L10.256 6.48242L5.69195 11.0465C5.37687 11.3616 5.37687 11.8724 5.69195 12.1875C6.00703 12.5026 6.51788 12.5026 6.83296 12.1875L11.9675 7.05293ZM0.101562 7.28924H11.397V5.6756H0.101562V7.28924Z" :fill="prototype_links.main_color"/>
                    </svg>
                </div>
            </div>
        </div>

</template>

<script setup>
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useIntersectionObserver} from '@vueuse/core'
import useStore from '../../store'
import {ref,watch} from "vue";
const store = useStore()

    gsap.registerPlugin(CustomEase);

    let props = defineProps(['prototype_links'])

    let handle_click = ()=>{
        window.open(props.prototype_links.link)
    }

    var button = ref(null)
    var h3 = ref(null)
    var dot =ref(null)



    //监听视频是否在窗口内
    const is_show = ref(false)
    const { stop } = useIntersectionObserver(
        button,
      ([{ isIntersecting }]) => {
        is_show.value = isIntersecting
      },{
        threshold:0
      }
    )

    let stop_watch=watch(is_show, (newVal,oldVal) => {
        if(newVal!=oldVal && newVal){
            stop()
            stop_watch()
            var tl = gsap.timeline() 
            tl.fromTo(button.value,{
                scaleX: 0,
                scaleY:0,
                width: '52.33px'
            },{
                scaleX: 1,
                scaleY:1,
                width: '52.33px',
                duration: 0.6,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            })

            tl.fromTo(dot.value,{
                scaleX: 0,
                scaleY:0,
                width: '35px',
            },{
                scaleX: 1,
                scaleY:1,
                width: "35px",
                duration: 0.6,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            },"<")

            tl.fromTo(button.value,{
                scaleX: 1,
                scaleY:1,
                width: '52.33px'
            },{
                scaleX: 1,
                scaleY:1,
                width: props.prototype_links.width+"px",
                duration: 0.3,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            },)

            tl.fromTo(dot.value,{
                scaleX: 1,
                scaleY:1,
                width: '35px'
            },{
                scaleX: 1,
                scaleY:1,
                width: props.prototype_links.width-16+"px",
                duration: 0.3,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            },"<")

            tl.fromTo(dot.value,{
                scaleX: 1,
                scaleY:1,
                width: props.prototype_links.width-16+"px"
            },{
                scaleX: 1,
                scaleY:1,
                width: "35px",
                duration: 0.6,
                ease: CustomEase.create("custom", store.animation_ease_c1),
            })
        }
    });


    let handle_hover = (val, e)=>{

        if(e.pointerType == 'mouse'){
            if(val == 1){
                gsap.to(button.value,{
                    scaleX: 1.1,
                    scaleY:1.1,
                    opacity:1,
                    duration: 0.3,
                    ease: CustomEase.create("custom", store.animation_ease_c1),
                })
            }else{
                gsap.to(button.value,{
                    scaleX: 1,
                    scaleY:1,
                    duration: 0.3,
                    ease: CustomEase.create("custom", store.animation_ease_c1),
                })
                
            }
            
        }
    }
    



</script>

<style scoped>
.button{
    display: flex;
    align-items: center;
    height:51;
    width:52.33px;
    gap:18px;
    padding:8px 0;
    border-radius: 50px;
    cursor: pointer;
    border: 1.5px solid;
    justify-content: flex-end;
    overflow: hidden;
    transform: scale(0);

}
h3{
    font-size:15px;
    font-weight: 600;
    white-space: nowrap;
    margin-right: 9px;
} 
h2{
    font-size:20px;
    font-weight: 400;
} 
.arrow_container{
    transform: scale(0);
    width:35px;
    height:35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:black;
    border-radius: 25px;
    
}
.contents{
    display: flex;
    margin-right:8px;
    align-items: center;
}
@media (max-width: 650px){
   .buttons_container{
    flex-direction: column;
   }
   .button{
    width:240px;
   }
}
</style>
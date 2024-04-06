<template>
    
    <div class="is_v"  :style = "main_back_color"></div>
    <com_footer ref="target" :style = "{opacity:footer_opacity,transition:'all 0.3'}"/>
    <Teleport to=".footer_conatiner_fixed">
        <div class="footer_main_conatiner" 
        :style = "[is_rout_out,the_animation,card_position]"
        @click = "handle_click"
        >
            <div class="h3_holder" 
                :style = "{backgroundColor:props.use_data.f_color}"
                v-if="!store.footer_is_rout_out"
            >
                <h3 :style = "{color:props.use_data.t_color}" > NEXT PROJECT</h3>
                <div class="svg_holder">
                    <svg width="100%" height="100%" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 20L0.674682 0.5L22.3253 0.500002L11.5 20Z" :fill="props.use_data.f_color"/>
                    </svg>
                </div>
            </div>
            <div class="card_conatiner" 
                @pointerover=" handle_card_hover(0,$event)"
                @pointerleave=" handle_card_hover(1,$event)"
                :class="{on_hover:is_hover&&!store.footer_is_rout_out}"
                :style = "[is_rout_out2,the_animation]">
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
//依赖引入
import useStore from '../store/index'
import {onMounted,defineProps,ref, computed, vShow} from 'vue' 
import router from '../router'
import { useIntersectionObserver,useElementSize } from '@vueuse/core'
import com_footer from './com_footer.vue'
//hooks引入
import {tracker_toggle} from '../hooks/use_mouse_tracker_toggle'
import {contents_cover} from '../hooks/use_full_sreen_cover'

const store = useStore()

        
    let props = defineProps(['use_data'])
    let index = props.use_data.index

    let footer_opacity = ref(1)

    //初始化：将组件全屏化
    store.index_array[index].class = 'container_footer_set'

    let is_hover = ref(false)

    let handle_card_hover = (id,e)=>{
        if(e.pointerType == 'mouse'){
            if(id == 0){
                tracker_toggle('view_project')
                is_hover.value = true
            }else{
                tracker_toggle('hidden')
                is_hover.value = false
            }
            
        }
    }

    let handle_click = ()=>{
        store.index_array[index].class = 'container_article'
        contents_cover(index)
        footer_opacity.value = 0
        router.push(store.index_array[index].navto)
    }


    const target = ref(null)
    const is_show = ref(false)

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        is_show.value = isIntersecting
      },{
        threshold:0.5
      }
    )

    let is_rout_out= computed(()=>{
        if(!store.footer_is_rout_out){
            return{
                height:'35vh',
            }
        }else{
            return{
                height:'100vh',
                bottom:0,
            }
        }
    })

    let is_rout_out2= computed(()=>{
        if(!store.footer_is_rout_out){
            return{
                top:'60px',
            }
        }else{
            return{
                top:'0px',
            }
        }
    })

    let the_animation = computed(()=>{
        return {transition:store.footer_animation}
    })

    const { height } = useElementSize(target)
    
    let card_position = computed(()=>{
        if (footer_opacity.value!=0){
            var p
            if(is_show.value){
                p = height.value +'px'
            }else{
                p='-35vh'
            }
            return {bottom:p}

        }
        
    })
    let main_back_color= computed(()=>{
        var c
        if (footer_opacity.value!=0){
           c ='var('+props.use_data.b_color+')'
        }else{
            c ='#000000'
        }
        return {background:c}
    })

</script>

<style scoped>
.is_v{
    width:100%;
    height:10vh;
    padding-top:15vh;
}
.footer_main_conatiner{
    width:100%;
    height:35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position:absolute;
    bottom:-35vh;
    z-index: 10;
    pointer-events: all;
    
}

.h3_holder{
   border-radius: 10px; 
   position:relative;
}
h3{
    color:white;
    font-size: 20px;
    font-weight: 300;
    padding:8px 24px;
    transition:var(--animation-slow);
    
}
.svg_holder{
    width:15px;
    height:15px;
    position: absolute;
    margin:0;
    left:50%;
    transform: translateX(-50%);
    bottom:-11px
 
}
.card_conatiner{

    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    
    position:absolute;
    transform:translateY(0);
    z-index: 10;

}
.on_hover{
    transform:translateY(-100px);
}
.position{
    position:absolute;
}
</style>
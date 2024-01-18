<template>
    <div class="is_v" ref="target"></div>
    <Teleport to=".footer_conatiner_fixed">
        <div class="footer_main_conatiner" 
        :class="{is_show:is_show}"
        :style = "[is_rout_out,the_animation]"
        @click = "handle_click"
        >
            <h3 v-if="!store.footer_is_rout_out"> NEXT PROJECT</h3>
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
import { useIntersectionObserver } from '@vueuse/core'
//hooks引入
import {tracker_toggle} from '../hooks/use_mouse_tracker_toggle'

const store = useStore()

        
     let {index} =  defineProps(['index'])

    //初始化：将组件全屏化
    store.index_array[index].class = 'container_fullscreen'

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
        router.push(store.index_array[index].navto)
    }


    const target = ref(null)
    const is_show = ref(false)

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        is_show.value = isIntersecting
      },{
        threshold:0.1
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

</script>

<style scoped>
.is_v{
    width:100%;
    height:20vh;
    margin-top:15vh;
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
.is_show{
    bottom:0;
}
h3{
    color:white;
    font-size: 30px;
    font-weight: 300;
    transition:var(--animation-slow)
}
.card_conatiner{
    width:100%;
    height:100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    position:absolute;
    transform:translateY(0);
}
.on_hover{
    transform:translateY(-100px);
}
.position{
    position:absolute;
}
</style>
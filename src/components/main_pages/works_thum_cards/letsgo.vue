<template>

    <div class="container background" ref="el" :style="z_index">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">

                <img ref="img1" src="../../../assets/thum_cards/let/L.png" class="largephone" alt="">
                <img ref="img2" src="../../../assets/thum_cards/let/S.png" class="smallphone" alt="">
            </div>
        
            
            
    </div>


</template>

<script setup>
//hooks引入
import{handle_el_container_size,thum_ani_render,handle_z_index,thum_height} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,ref,watchPostEffect} from 'vue'
import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()

    let name = 'LETS_GO'


    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    let z_index = computed(()=>handle_z_index(name))

    const img1 = ref(null)
    const img2 =ref(null)

    watchPostEffect(()=>{
        thum_ani_render(name,{
            footer:[
                {
                    el:el,
                    animations:{
                        height:thum_height(),
                        width:'80vw',
                        maxWidth:'800px',
                        borderRadius:'20px',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: 0,
                        yPercent: 31,
                        scale:0.35,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: -2,
                        yPercent: 19,
                        scale:0.3,
                    }
                }],
            article:[{
                    el:el,
                    animations:{
                        height:thum_height(),
                        width:'100vw',
                        maxWidth:'100vw',
                        borderRadius:'0px',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: -3,
                        yPercent: 41,
                        scale:0.65,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 10,
                        yPercent: 26,
                        scale:0.45,
                    }
                }],
            index:[{
                    el:el,
                    animations:{
                        height:thum_height(),
                        width:'80vw',
                        maxWidth:'1200px',
                        borderRadius:'20px',

                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: -4,
                        yPercent: 31,
                        scale:0.5,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 1,
                        yPercent: 24,
                        scale:0.45,
                    }
                }]
        })
    })

</script>

<style scoped>
.container{
    
    overflow: hidden;
    position:relative;
    width:100%;
}

.background{
background: radial-gradient(42.7% 61.19% at 50% 50%, #343D2D 0%, #1A1C18 100%);
display: flex;
justify-content: center;
align-items: center;
}

.el_conatiner{
    position:relative;
    /* background-color: green; */
}

.largephone {
    width: 132%;
    position: absolute;
    bottom: 0%;
    left: -29%;
    z-index: 3;
}
.smallphone {
    position: absolute;
    bottom: 0%;
    left: 24%;
    width: 90%;
    z-index: 3;
}

</style>
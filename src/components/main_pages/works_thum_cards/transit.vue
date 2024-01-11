<template>

<div class="container background" ref="el">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">
                <img ref="img" src="../../../assets/thum_cards/tran/transit_2.png" alt="">
            </div>
        </div>
</template>

<script setup>
//hooks引入
import{handle_img_position_change,handle_el_container_size,thum_ani_render} from '../../../hooks/use_works_slideshow_handle.js'
//依赖引入
import {computed,ref,watchPostEffect} from 'vue'
import useStore from '../../../store/index.js'
import { useElementSize } from '@vueuse/core'
const store = useStore()

    let name = 'TRANSIT'

    // //计算内容物偏移的位置
    // let img_position = computed(()=>handle_img_position_change(card_id))

    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    const img =ref(null)

    watchPostEffect(()=>{
        thum_ani_render(name,{
            full:[
                {
                    el:el,
                    animations:{
                        height:'100vh',
                    }
                },{
                    el:img,
                    animations:{
                        xPercent: 0,
                        yPercent: 0,
                        scale:0.8,
                    }
                }

            ],
            article:[{
                    el:el,
                    animations:{
                        height:'55vh',
                    }
                },{
                    el:img,
                    animations:{
                        xPercent: 0,
                        yPercent: 10,
                        scale:1.2,
                    }
                }],
            index:[{
                    el:el,
                    animations:{
                        height:'70vh',
                    }
                },{
                    el:img,
                    animations:{
                        xPercent: 0,
                        yPercent: 10,
                        scale:1.2,
                    }
                }]
        })
    })


</script>

<style scoped>
.container{
    
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width:100vw;

}


.el_conatiner{
    position:relative;
    /* background-color: green; */
}

.background{
    background-image: url('../../../assets/thum_cards//tran/transit_background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position:relative;
}


img {
    position: absolute;
    bottom: -15%;
    left: -42%;
    width: 179%;
    
}

</style>
<template>

<div class="container background" ref="el" :style="z_index">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}">
                <img ref="img" src="../../../assets/thum_cards/tran/transit_2.png" alt="">
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

    let name = 'TRANSIT'


    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))



    let z_index = computed(()=>handle_z_index(name))

    const img =ref(null)

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
                    el:img,
                    animations:{
                        xPercent: 0,
                        yPercent: 10,
                        scale:1.2,
                    }
                }

            ],
            article:[{
                    el:el,
                    animations:{
                        height:thum_height(),
                        width:'100vw',
                        maxWidth:'100vw',
                        borderRadius:'0px',
                    }
                },{
                    el:img,
                    animations:{
                        xPercent: 0,
                        yPercent: 10,
                        scale:1.3,
                    }
                }],
            index:[{
                    el:el,
                    animations:{
                        height:thum_height(),
                        width:'80vw',
                        maxWidth:'1000px',
                        borderRadius:'20px',

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
    width:100%;

}


.el_conatiner{
    position:relative;
    z-index: 1;
}

.background{
    background-image: url('../../../assets/thum_cards//tran/transit_background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


img {
    position: absolute;
    bottom: -15%;
    left: -42%;
    width: 179%;
    
}

</style>
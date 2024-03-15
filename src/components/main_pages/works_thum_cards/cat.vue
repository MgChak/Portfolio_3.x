<template>
        <div class="container background" ref="el" :style="z_index">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}"> 
                <img class="img1" ref="img1" src="../../../assets/thum_cards/cat/1.svg" alt="">
                <img class="img2" ref="img2" src="../../../assets/thum_cards/cat/2.png" alt="">
                <img class="img3" ref="img3" src="../../../assets/thum_cards/cat/3.png" alt="">
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

    let name = 'MEOW_MIND'

    // //计算内容物偏移的位置
    // let img_position = computed(()=>handle_img_position_change(card_id))

    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))


    let z_index = computed(()=>handle_z_index(name))


    //获取到所有需要操作的div
    const img1= ref(null)
    const img2= ref(null)
    const img3= ref(null)



    //监听+执行动画
    watchPostEffect(()=>{
        thum_ani_render(name,{
            full:[//全屏
                {
                    el:el,//动画对象
                    animations:{
                        height:'100vh',
                        width:'100%',
                        maxWidth:'100%',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: 50,
                        yPercent: 79,
                        scale:1.3,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 50,
                        yPercent: -16,
                        scale:0.3,
                    }
                },{
                    el:img3,
                    animations:{
                        xPercent: 54,
                        yPercent: 140,
                        scale:1.2,
                    }
                }],
            article:[{
                    el:el,
                    animations:{
                        height:thum_height(),
                        width:'100%',
                        maxWidth:'100%',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: 50,
                        yPercent: 116,
                        scale:1.3,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 50,
                        yPercent: 26,
                        scale:0.5,
                    }
                },{
                    el:img3,
                    animations:{
                        xPercent: 54,
                        yPercent: 257,
                        scale:1.2,
                    }
                }],
            index:[{
                    el:el,
                    animations:{
                        height:thum_height(),
                        width:'80%',
                        maxWidth:'1200px',
                        borderRadius:'20px',

                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: 50,
                        yPercent: 79,
                        scale:1.3,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 50,
                        yPercent: -16,
                        scale:0.3,
                    }
                },{
                    el:img3,
                    animations:{
                        xPercent: 54,
                        yPercent: 140,
                        scale:1.2,
                    }
                }]
        })
    })


</script>

<style scoped>
.container{
    background:radial-gradient(72.2% 184.52% at 50.85% 5.78%, #FFD747 0%, #151614 100%);
    width:100%;
    overflow: hidden;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el_conatiner{
    position:relative;
    /* background-color: green; */
}

img{
    position:absolute;
    right: 50%;
    bottom: 50%;
    width: 50%;
}


</style>
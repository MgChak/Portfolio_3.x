<template>
        <div class="container background" ref="el" :style="z_index">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}"> 
                <img class="img1" ref="img1" src="../../../assets/thum_cards/nebu/hand.png" alt="">
                <img class="img2" ref="img2" src="../../../assets/thum_cards/nebu/nebu.png" alt="">
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

    let name = 'NEBU'



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
            footer:[//全屏
                {
                    el:el,//动画对象
                    animations:{
                        height:thum_height(),
                        width:'80vw',
                        maxWidth:'800px',
                        borderRadius:'20px',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: 40,
                        yPercent: 15,
                        scale:1.8,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: -30,
                        yPercent: -20,
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
                        xPercent: 40,
                        yPercent: 15,
                        scale:1.8,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: -30,
                        yPercent: -20,
                        scale:0.3,
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
                    el:img1,
                    animations:{
                        xPercent: 40,
                        yPercent: 15,
                        scale:1.8,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: -30,
                        yPercent: -20,
                        scale:0.3,
                    }
                }]
        })
    })


</script>

<style scoped>
.container{
    width:100%;
    overflow: hidden;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../../assets/thum_cards/nebu/back.jpg");
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
}
.el_conatiner{
    position:relative;
    /* border: 1px rgba(255, 255, 255, 0.454) solid; */
    /* background-color: green; */
    z-index: 1;
}

img{
    width:100%;
    position:absolute;
    
}

.background_img{
    width: 100%;
    height:100%;
    position:absolute;
    z-index: 0;
    left:0;
    bottom: 0;
    background-color: black;
}
.img1{
    right:0;
    bottom:0;
}
.img2{
    left:0;
    top:0;
}



</style>
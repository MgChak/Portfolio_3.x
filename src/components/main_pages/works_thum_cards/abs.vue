<template>
        <div class="container background" ref="el">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}"> 
                <img ref="img1" src="../../../assets/thum_cards/abs_2.png" alt="">
                <img ref="img2" src="../../../assets/thum_cards/abs_1.png" alt="">
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

    let name = 'ABS_INTERNSHIP'

    // //计算内容物偏移的位置
    // let img_position = computed(()=>handle_img_position_change(card_id))

    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    //获取到所有需要操作的div
    const img1= ref(null)
    const img2= ref(null)

    //监听+执行动画
    watchPostEffect(()=>{
        thum_ani_render(name,{
            full:[//全屏
                {
                    el:el,//动画对象
                    animations:{//动画内容
                        height:'100vh',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: -10,
                        yPercent: 0,
                        scale:1.2,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 14,
                        yPercent: -4,
                        scale:1.2,
                    }
                },

            ],
            article:[{
                    el:el,
                    animations:{
                        height:'80vh',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: -4,
                        yPercent: 0,
                        scale:1.2,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 4,
                        yPercent: 10,
                        scale:1.4,
                    }
                },],
            index:[{
                    el:el,
                    animations:{
                        height:'70vh',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: -3,
                        yPercent: 0,
                        scale:1.2,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 4,
                        yPercent: 0,
                        scale:1.2,
                    }
                },]
        })
    })


</script>

<style scoped>
.container{
    background:linear-gradient(270.03deg, #F9193D 0.03%, #322632 35.03%, #1B2731 62.5%, #2F7DA1 99.97%);
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

img:first-child{
    position:absolute;
    right: 1%;
    bottom: 18%;
    width: 104%;
}
img:last-child{
    position:absolute;
    right: -1%;
    bottom: 13%;
    width: 40%;

}

</style>
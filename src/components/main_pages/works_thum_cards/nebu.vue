<template>
        <div class="container background" ref="el">
            <div class="el_conatiner" :style = "{width:el_container_size,height:el_container_size}"> 
                <img class="img1" ref="img1" src="../../../assets/thum_cards/nebu/01.png" alt="">
                <img class="img2" ref="img2" src="../../../assets/thum_cards/nebu/02.png" alt="">
                <img class="img3" ref="img3" src="../../../assets/thum_cards/nebu/03.png" alt="">
                <img class="img4" ref="img4" src="../../../assets/thum_cards/nebu/04.png" alt="">
                <img class="img5" ref="img5" src="../../../assets/thum_cards/nebu/05.png" alt="">
            </div>
            <img class="background_img" src="../../../assets/thum_cards/nebu/backgournd.jpg" alt="">
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

    let name = 'NEBU'

    // //计算内容物偏移的位置
    // let img_position = computed(()=>handle_img_position_change(card_id))

    //计算内容物固定框的尺寸
    const el = ref(null)
    const { width, height } = useElementSize(el)
    let el_container_size = computed(()=>handle_el_container_size(width, height))

    //获取到所有需要操作的div
    const img1= ref(null)
    const img2= ref(null)
    const img3= ref(null)
    const img4= ref(null)
    const img5= ref(null)

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
                        xPercent: -15,
                        yPercent: 3,
                        scale:0.5,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 27,
                        yPercent: -28,
                        scale:1.5,
                    }
                },{
                    el:img3,
                    animations:{
                        xPercent: -55,
                        yPercent: -46,
                        scale:0.2,
                    }
                },{
                    el:img4,
                    animations:{
                        xPercent: -28,
                        yPercent: 26,
                        scale:1,
                    }
                },{
                    el:img5,
                    animations:{
                        xPercent: -1,
                        yPercent: 9,
                        scale:0.7,
                    }
                }],
            article:[{
                    el:el,
                    animations:{
                        height:'55vh',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: -8,
                        yPercent: -1,
                        scale:0.5,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 13,
                        yPercent: -12,
                        scale:1.2,
                    }
                },{
                    el:img3,
                    animations:{
                        xPercent: -55,
                        yPercent: -46,
                        scale:0.3,
                    }
                },{
                    el:img4,
                    animations:{
                        xPercent: -19,
                        yPercent: 19,
                        scale:0.8,
                    }
                },{
                    el:img5,
                    animations:{
                        xPercent: 6,
                        yPercent: 8,
                        scale:0.7,
                    }
                }],
            index:[{
                    el:el,
                    animations:{
                        height:'70vh',
                    }
                },{
                    el:img1,
                    animations:{
                        xPercent: -8,
                        yPercent: -1,
                        scale:0.5,
                    }
                },{
                    el:img2,
                    animations:{
                        xPercent: 13,
                        yPercent: -12,
                        scale:1.2,
                    }
                },{
                    el:img3,
                    animations:{
                        xPercent: -55,
                        yPercent: -46,
                        scale:0.3,
                    }
                },{
                    el:img4,
                    animations:{
                        xPercent: -19,
                        yPercent: 19,
                        scale:0.8,
                    }
                },{
                    el:img5,
                    animations:{
                        xPercent: 6,
                        yPercent: 8,
                        scale:0.7,
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
}
.el_conatiner{
    position:relative;
    /* border: 1px rgba(255, 255, 255, 0.454) solid; */
    /* background-color: green; */
    z-index: 1;
}

img{
    width:50%;
    position:absolute;
    
}

.background_img{
    width: 100%;
    height:100%;
    position:absolute;
    z-index: 0;
    left:0;
    bottom: 0;
}
.img1{
    left:0;
    top:0;
}
.img2{
    right:0;
    top:0;
}
.img3{
    left:50%;
    top:50%;
}
.img4{
    left:0;
    bottom:0;
}
.img5{
    right:0;
    bottom:0;
}


</style>
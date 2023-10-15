<template>

    <div class="content_container" >
        <div class="view_window" ref="el_view_window">
            <canvas id="my_canvas" :width="width" :height="height"></canvas>
            <h1>{{ width }}</h1>
        </div>
    </div>

</template>
<script setup>
import { onMounted, watch } from 'vue';
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'
//图片阵列引入-放到页面中，将引入对象传入
import fram_list from '../../assets/fram_animation_test/fames.js'

    //获取父元素size
    const el_view_window = ref(null)
    let { width, height } = useElementSize(el_view_window)

onMounted(()=>{
    //创建canvas
    let canvas =document.getElementById("my_canvas")
    let ctx = canvas.getContext('2d')

    //转换canvas队列-》array
    const fram_arr = Object.values(fram_list);

    //绘制函数
    let  image_load_draw =(url)=>{
        //把照片装入img元素
        const img = new Image()
        img.src=url
        //照片加载结束后绘制-绘图引擎
        img.onload = function() {
        // 清空 Canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 绘制图片到 Canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }
    //返回当前渲染的图片地址
    let img_src_control = ()=>{
        return fram_arr[50].default
    }

    // 调用绘制
    image_load_draw(img_src_control())
    //视窗发生变化，重绘canvas
    watch(()=>width.value,()=>{
        image_load_draw(img_src_control())

    })

    
})


</script>
<style scoped>
.content_container{
    height:400vh;
    width:100%;
    background-color:rgb(141, 66, 66);
    overflow: visible;
}
.view_window{
    height:100vh;
    width:100%;
    background-color: aquamarine;
    position: sticky;
    top:0px;
    right:0px;
}

</style>
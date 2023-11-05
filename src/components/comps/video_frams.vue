<template>

    <div class="content_container" ref="el_container" >
        <div class="view_window" ref="el_view_window">
            <canvas id="my_canvas" :width="width" :height="width*0.5625"></canvas>
        </div>
    </div>
 
</template>
<script setup>
import { onMounted, watch } from 'vue';
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import useStore from '../../store/index'
//图片阵列引入-放到页面中，将引入对象传入
import fram_list from '../../assets/fram_animation_test/fames.js'


    const store = useStore()

    //数据接收//引入props
    //let fram_list = defineProps(['slideshow_arr'])


    //获取父元素size
    const el_view_window = ref(null)
    const el_container = ref(null)
    let c_height = useElementSize(el_container).height
    let { width, height } = useElementSize(el_view_window)
    

onMounted(()=>{
    //创建canvas
    let canvas =document.getElementById("my_canvas")
    let ctx = canvas.getContext('2d')

    //取出对象中所有的key名来统计对象数量
    const fram_arr = Object.keys(fram_list);

    //返回当前渲染的图片地址
    let img_src_control = ()=>{

        //滚动轨道距离页面顶部的距离
        var p_to_top = el_container.value.offsetTop

        //有效滚动位置/比例
        var scroll_persent = (store.scroll_position - p_to_top)/ (c_height.value - height.value)

        //计算index
        var index = Math.min(fram_arr.length-1,Math.ceil(scroll_persent*fram_arr.length))

        //判断是否刷新/判断帧动画是否处在视窗内部
        if (scroll_persent<=0){
            index = 1
        }else if (scroll_persent>=1){
            index = fram_arr.length-1
        }
        //返回对应的文件名+编号，用来渲染图片
        return fram_list['./DEMO'+index+'.jpg'].default
    }

    //绘制函数
    let  image_load_draw =()=>{
        //把照片装入img元素
        const img = new Image()
        img.src=img_src_control()
        //照片加载结束后绘制-绘图引擎
        img.onload = function() {
        // 清空 Canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 绘制图片到 Canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }
    

    // 调用绘制
    image_load_draw(img_src_control())
    //视窗发生变化，重绘canvas
    watch(()=>[width.value,store.scroll_position],()=>{
        requestAnimationFrame(image_load_draw) 

    })

    
})


</script>
<style scoped>
.content_container{
    height:400vh;
    width:100%;
    /* background-color:rgb(141, 66, 66); */
    overflow: visible;
}
.view_window{
    height:100vh;
    width:100%;
    /* background-color: aquamarine; */
    position: sticky;
    top:0px;
    right:0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
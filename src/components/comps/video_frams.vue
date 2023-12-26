<template>

    <div class="content_container" ref="el_container" >
        <div class="view_window" ref="el_view_window" :style="v_style" >
            <canvas id="my_canvas" :width="height/0.5625" :height="height"></canvas>
        </div>
    </div>
 
</template>
<script setup>
import { onMounted, watch, computed} from 'vue';
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import useStore from '../../store/index'



    const store = useStore()

    //数据接收//引入props
    let props = defineProps(['frames_data'])
    let fram_list = props.frames_data.frames
    //接收自定事件用于触发
    const emit = defineEmits(['render_triger'])
    
    //获取父元素size
    const el_view_window = ref(null)
    const el_container = ref(null)
    let c_height = useElementSize(el_container).height
    let c_width = useElementSize(el_container).width
    let { width, height } = useElementSize(el_view_window)


    //控制viewwindow的定位属性
    let position = ref("")

    let v_style = computed(()=>{
        if(position.value == "fixed"){
            var p = el_container.value.getBoundingClientRect()
            console.log(p.left+'px')
            return {
                position:'fixed',
                width:c_width.value+'px',
                left:p.left+'px',
                top:'50%',
                transform: 'translateY(-50%)',
            }
        }else if (position.value == "bottom"){
            return {
                width:c_width.value+'px',
                position:'absolute',
                left: 0,
                bottom:0,
            }
        }else{
            return {
                width:c_width.value+'px',
                position:'absolute',
                left: 0,
                top:0,
            }
        }
    })

    

onMounted(()=>{
    //创建canvas
    let canvas =document.getElementById("my_canvas")
    let ctx = canvas.getContext('2d')

    //取出对象中所有的key名来统计对象数量
    const fram_arr = Object.keys(fram_list);

    //返回当前渲染的图片地址
    let img_src_control = ()=>{

        var render_percen

        //滚动轨道距离页面顶部的距离
        var p_to_top = el_container.value.offsetTop

        //居中修正参数
        var center_fix = (store.page_height - height.value)/2


        //有效滚动位置/比例
        var scroll_persent = (store.scroll_position - p_to_top+center_fix)/ (c_height.value - height.value)


        //计算index
        var index = Math.min(fram_arr.length-1,Math.ceil(scroll_persent*fram_arr.length))

        //判断是否刷新/判断帧动画是否处在视窗内部
        if (scroll_persent<=0){
            index = 1
            position.value=""
            render_percen = 0
        }else if (scroll_persent>=1){
            index = fram_arr.length-1
            position.value="bottom"
            render_percen = 1
        }else{
            position.value="fixed"
            render_percen = scroll_persent
        }

        //触发事件，回传渲染进度
        emit('render_triger',render_percen)

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
    top:0;
    /* background-color:rgb(141, 66, 66); */
    overflow: visible;
    position:relative;
}
.view_window{
    /* background-color: aquamarine; */
    height:85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: black;
    
}


</style>
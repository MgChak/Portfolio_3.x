<template>
    <div class="main_conatiner" ref="el">
        <iframe 
            ref="iframe_vimeo"
            :src="props.vimeolink.link" 
            :style="{height:height+'px'}"
            frameborder="0"  
            allow="autoplay; fullscreen; picture-in-picture" 
                        
        ></iframe>
    </div>
   
</template>

<script setup>
import Player from '@vimeo/player';
import { ref,computed,watch,onMounted} from 'vue'
import { useIntersectionObserver,useElementSize } from '@vueuse/core'
import useStore from '../../store/index'
const store = useStore()

    //引入props
    let props = defineProps(['vimeolink'])

    //获取view——window size， 给img用
    let el = ref()
    const { width } = useElementSize(el)
    let height = computed(()=>{
        var r_w
        if(props.vimeolink.radio == 4){//根据传入数据判断是否生效响应式
            r_w = width.value*3/4
        }else{
            r_w = width.value*9/16
        }
        return r_w
    }) 

    //获取所有的视频tag
    let iframe_vimeo = ref(null);
    let player

    // 初始化 Vimeo 播放器
    onMounted(() => {
        player = new Player(iframe_vimeo.value);
        video_control_stop()

    });

    //控制视频播放
    let video_control_play = ()=>{
        player.play()
    }
    let video_control_stop = ()=>{
        player.pause().then(() => {
            player.setCurrentTime(0);
        });
    }

    //监听视频是否在窗口内
    const is_show = ref(false)
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        is_show.value = isIntersecting
      },{
        threshold:0.95
      }
    )

    watch(is_show, (newVal) => {
      if (newVal) {
        // 当 is_show 变为真时执行的代码
        video_control_play();
        
      } else {
        // 当 is_show 变为假时执行的代码
        video_control_stop();
        
      }
    });



</script>

<style scoped>

.main_conatiner{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:24px;
    align-items: center;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background-color: black;

}

iframe{
    width:100%;
    height:100%;
    z-index: 2;
}


.main_conatiner::after{
    content:'Loading...';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color:var(--p-color-font-white-60);
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}




@media (max-width: 1000px){
h2{
    text-align: center;
    font-size: 18px;
    width:90%;
}
}

</style>
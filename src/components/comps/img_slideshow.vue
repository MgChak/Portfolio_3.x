<template>
    <div class="main_conatiner" ref="target">
        <div class = "view_window" ref='el' :style="{height:height+'px'}">
            <div class="pic_list" 
                :style="{width:list_width, transform:list_transform,transition:list_transition}" 
                @touchstart="use_handle_touch($event)"
                @touchmove="use_handle_touch($event)"
                @touchend="use_handle_touch($event)"
            >
                <div class="img_conatiner" v-for="c in contents" :key="c.id" 
                    :style="{width:width+'px'}"
                    :class = "{hide:c.id!=page_on}"
                    @click="handle_img_click(c.id)"
                    @pointerover=" handle_img_hover(0,c.id,$event)"
                    @pointerleave=" handle_img_hover(1,c.id,$event)"
                >
                    <img v-if="props.slideshow_arr.type =='img'" :src="c.contents[0]" alt="" >
                    <video v-if="props.slideshow_arr.type =='video'" muted playsinline loop :poster="c.contents[2]" ref="videoRefs">
                        <source :src="c.contents[0]" muted type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
        <div class="dots_conatiner">
            <div class="dots" v-for="c in contents" :key="c.id" 
                :style="{background:props.slideshow_arr.color}"
                :class = "{hide:c.id!=page_on}"
                @click="handle_dots_click(c.id)"
            ></div>
        </div>
    </div>
   
</template>

<script setup>
import { ref,computed,watch} from 'vue'
import { useIntersectionObserver,useElementSize } from '@vueuse/core'
import {tracker_toggle} from '../../hooks/use_mouse_tracker_toggle'
import useStore from '../../store/index'
const store = useStore()

    //引入props
    let props = defineProps(['slideshow_arr'])

    //创建图片数列,根据props写入数列和id
    let contents = computed(()=>{

        var b = []

        props.slideshow_arr.contents.forEach((item,index)=>{
            var a = {}
            a.contents = item
            a.id = index
            b.push(a)
        })

        return b
    })

    //获取view——window size， 给img用
    let el = ref()
    const { width } = useElementSize(el)
    let height = computed(()=>width.value*9/16) 

    //计算列表的总长度
    let list_width = computed(()=>width.value*props.slideshow_arr.contents.length + store.page_width*0.01*(props.slideshow_arr.contents.length-1) + 'px')

    //动画
    let list_transition = ref('var(--animation-slow)')


    
    //=======================================================================================
    //幻灯片逻辑==========================================================================
    //=======================================================================================
    //页面 
    let page_on = ref(0)

    //是否开启触摸跟随
    let is_touch =ref(false) 

    //保存列表当前的位置
    let list_position = ref(0)

    //计算列表的移动
    let list_transform = computed(()=>{
        if(!is_touch.value){

            var a = page_on.value*(width.value+store.page_width*0.01)

            return `translateX(-${a}px)`
            
        }else{
            return `translateX(-${list_position.value}px)`
        }
    })
    
   


    //处理点击
    let handle_img_click = (i)=>{
        
        if(i == page_on.value){
            return
        }else if(i > page_on.value){
            page_move('next')
        
        }else if (i < page_on.value){
            page_move('pre')
        }
    }

    let handle_dots_click = (i) =>{
        page_on.value = i
    }

    //处理hover事件
    let handle_img_hover = (val,id,e)=>{
        if(e.pointerType == 'mouse'){
            if(val == 0){
                if(id == page_on.value){
                    return
                }else if(id > page_on.value){
                    tracker_toggle('next')
                }else if (id < page_on.value){
                    tracker_toggle('pre')
                }
            }else{
                tracker_toggle('hidden')
            }
            
        }
    }

    //触摸_起始点
    let touch_moving_start  = 0
    //触摸——刷新
    let touch_moving = 0
    //起始点坐标
    let startX = 0;
    let startY = 0;

    //处理触摸
    let use_handle_touch = (e)=>{
        switch (e.type) {
            //默认文章阅读模式
            case "touchstart":
                touch_start(e)
            break;
            case "touchmove":
                touch_move(e)
            break;
            case "touchend":
                touch_end(e)
            break;
            default:
                
            break;
        }
    }

    var movedr = -1

    //处理触摸-开始
    let touch_start=(e)=>{
        //关闭动画
        list_transition.value = null
        //打开触摸跟随
        is_touch.value = true
        //保存列表的当前位置
        list_position.value = page_on.value*(width.value+store.page_width*0.01)
        //保存初始点位置
        touch_moving_start = e.touches[0].clientX
        touch_moving = e.touches[0].clientX
        //保存坐标
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }
    //处理计算移动方向
    let movedr_count = (e) =>{
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;

        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        // 计算手指移动的角度
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        // 根据角度确定手指移动的方向
        let direction;
        if (angle >= 45 && angle < 135 || angle >= -135 && angle < -45) {
        direction = 0;
        } else {
        direction = 1;
        }
        return direction

    }
    //处理触摸-移动
    let touch_move=(e)=>{
        //判断一次移动方向，并标记，当标记存在时不再重复判断
        if (movedr==-1){if(movedr_count(e)){
            movedr = 1  
        }else{
            movedr = 0
        }}

        if (movedr==1){
            //阻止默认事件
            e.preventDefault()
            //根据初始点位置和当前移动的位置计算出移动的距离，
            var a = touch_moving - e.touches[0].clientX
            //重新赋值start_point用于计算下一次移动
            touch_moving = e.touches[0].clientX
            //更新列表的位置坐标
            list_position.value = list_position.value+a
        }else if(movedr==0){

        }

    }
    //处理触摸-结束
    let touch_end=(e)=>{
        if(touch_moving_start > touch_moving){
            page_move('next')
        }else if(touch_moving_start < touch_moving){
            page_move('pre')
        }
        //打开动画
        list_transition.value = 'var(--animation-slow)'
        //关闭触摸跟随
        is_touch.value = false
        //解除移动方向的锁定
        movedr = -1
    }

    //获取所有的视频tag
    const videoRefs = ref([]);

    //控制视频播放
    let video_control_play = ()=>{
        videoRefs.value.forEach((v,i )=> {
            if(i == page_on.value){
                v.play()
                // console.log("bofang_",v)
            }else{
                v.currentTime = 0
                v.pause()
                // console.log("tingzhi_",v)
            }
        })
        
    }
    let video_control_all_stop = ()=>{
        videoRefs.value.forEach((v)=> {
                v.currentTime = 0
                v.pause()
                // console.log("tingzhi_",v)
        })
    }
    let video_control_all_pause = ()=>{
        videoRefs.value.forEach((v)=> {
                v.pause()
        })
        // console.log("zanting_")
    }


    //监听视频是否在窗口内
    const is_show = ref(false)
    const target = ref(null)
    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        is_show.value = isIntersecting
      },{
        threshold:0.4
      }
    )

    watch(is_show, (newVal) => {
      if (newVal) {
        // 当 is_show 变为真时执行的代码
        video_control_play();
        
      } else {
        // 当 is_show 变为假时执行的代码
        video_control_all_stop();
        
      }
    });

    //翻页
    let page_move = (val)=>{
        video_control_all_pause()
        if (val== 'next' && page_on.value + 1 < props.slideshow_arr.contents.length){
            page_on.value++
        }else if(val== 'pre' && page_on.value - 1 >= 0){
            page_on.value--
        }
        setTimeout(video_control_play,600)
        
        tracker_toggle('hidden')
    }

    


</script>

<style scoped>
.main_conatiner{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:16px;
    align-items: center;

}
.view_window{
    width:100%;
    display: flex;
    flex-direction: column;

    position:relative;
}
.pic_list{
    display: flex;
    gap:1vw;
    height:100%;
}
img{
    width:100%;
}
video{
    width:100%;
}
.img_conatiner{
    transition:all 0.6s;
    border-radius: 30px;
    overflow: hidden;
}
.hide{
    opacity: 0.3;
}

.dots_conatiner{
    display: flex;
    height:24px;
    gap:16px;
    width:100%;
    align-items: center;
}
.dots_conatiner:hover > .dots{
    height:24px;
    transition:all 0.3s;
}
.dots{
    flex:1;
    height:3px;
    cursor: pointer;
    border-radius: 3px;
    transition:all 0.3s;
}
</style>
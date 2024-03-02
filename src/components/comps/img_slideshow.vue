<template>
    <div class="main_conatiner" ref="target">
        <div  class="play_text_container" v-if="props.slideshow_arr.isPlaySection">
            <h3>{{ contents[page_on].contents[1] }}</h3>
            <h4>{{ contents[page_on].contents[2] }}</h4>
        </div>
        <div class = "view_window" ref='el' :style="{height:height+'px'}">
            <div class="pic_list" 
                :style="{width:list_width, transform:list_transform,transition:list_transition}" 
                @touchstart="use_handle_touch($event)"
                @touchmove="use_handle_touch($event)"
                @touchend="use_handle_touch($event)"
                @pointerdown="use_handle_drag($event)"
                @pointermove="use_handle_drag($event)"
                @pointerup="use_handle_drag($event)"
                @pointerleave="use_handle_drag($event)"
            >
                <div class="img_conatiner" v-for="c in contents" :key="c.id" 
                    :style="{width:width+'px'}"
                    :class = "{hide:c.id!=page_on}"
                    @click="handle_img_click(c.id)"
                    @pointerenter=" handle_img_hover(0,c.id,$event)"
                    @pointerleave=" handle_img_hover(1,c.id,$event)"
                >
                    <img v-if="props.slideshow_arr.type =='img'" :src="c.contents[0]" alt="" >
                    <video :style="{width:v_width+'px'}" v-if="props.slideshow_arr.type =='video'" muted playsinline loop :poster="c.contents[2]" ref="videoRefs">
                        <source :src="c.contents[0]" muted type="video/mp4"/>
                    </video>
                    <iframe v-if="props.slideshow_arr.type =='vimeo'"
                        :style="{width:v_width+'px'}"
                        :id="'vimeo-' + c.id"
                        :src="c.contents[0]" 
                        frameborder="0"  
                        allow="autoplay; fullscreen; picture-in-picture" 
                        
                    ></iframe>
                </div>
            </div>
        </div>
        <h2 v-if="!props.slideshow_arr.isPlaySection">{{ contents[page_on].contents[1] }}</h2>
        <div class="dots_conatiner">
            <div class="dots" v-for="c in contents" :key="c.id" 
                :style="{background:props.slideshow_arr.color}"
                :class = "{activeOne:c.id==page_on}"
                @click="handle_dots_click(c.id)"
            ></div>
        </div>
    </div>
   
</template>

<script setup>
import Player from '@vimeo/player';
import { ref,computed,watch,onMounted} from 'vue'
import { useIntersectionObserver,useElementSize } from '@vueuse/core'
import {tracker_toggle} from '../../hooks/use_mouse_tracker_toggle'
import useStore from '../../store/index'
const store = useStore()

    //引入props
    let props = defineProps(['slideshow_arr'])

    //确定轮播图种类
    let slideshow_type = props.slideshow_arr.type

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
    let height = computed(()=>{
        var r_w
        if(props.slideshow_arr.resize){//根据传入数据判断是否生效响应式
            if(width.value>=800){
                r_w = width.value*9/16
            }else {
                r_w = width.value
            }
        }else{
            r_w = width.value*9/16
        }
        return r_w
    }) 
    //视频响应式高度
    let v_width = computed(()=>{
        var r_h
        if(props.slideshow_arr.resize){//根据传入数据判断是否生效响应式
            if(width.value>=800){
                r_h = width.value
            }else {
                r_h = width.value*16/9
            }
        }else{
            r_h = width.value
        }
        return r_h
    })

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

        if(!isDrag){
            console.log("jujue")
            if(i == page_on.value){
                return
            }else if(i > page_on.value){
                page_move('next')
            
            }else if (i < page_on.value){
                page_move('pre')
            }
        }else{
            isDrag = false
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
    //防止click和drag冲突
    let isDrag = false

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
    let movedr_count_drag = (e) =>{
        const currentX = e.clientX;
        const currentY = e.clientY;

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
        //暂停视频
        video_control_all_pause()
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
    
    
    
    
    //处理拖拽
    let use_handle_drag = (e)=>{
        e.preventDefault()
        if(e.pointerType == 'mouse'){
            switch (e.type) {
            //默认文章阅读模式
            case "pointerdown":
                drag_start(e)
            break;
            case "pointermove":
                if(is_touch.value){ drag_move(e)}
            break;
            case "pointerup":
                if(is_touch.value){ drag_end(e)}
            break;
            case "pointerleave":
                if(is_touch.value){ drag_end(e)}
            break;
            default:
            break;
        }
        }
        
    }

    //开始拖拽
    let  drag_start =(e)=>{
        console.log(is_touch.value+'touch')
        //关闭动画
        list_transition.value = null
        //打开触摸跟随
        is_touch.value = true
        //保存列表的当前位置
        list_position.value = page_on.value*(width.value+store.page_width*0.01)
        //保存初始点位置
        touch_moving_start = e.clientX
        touch_moving = e.clientX
        //保存坐标
        startX = e.clientX;
        startY = e.clientY;

    }

    //拖拽移动
    let drag_move=(e)=>{
        //禁用点击事件
        isDrag = true
        console.log(isDrag)
        //开启特殊鼠标
        tracker_toggle('drag')
        //暂停视频
        video_control_all_pause()
        //判断一次移动方向，并标记，当标记存在时不再重复判断
        if (movedr==-1){if(movedr_count_drag(e)){
            movedr = 1  
        }else{
            movedr = 0
        }}

        if (movedr==1){
            //阻止默认事件
            e.preventDefault()
            //根据初始点位置和当前移动的位置计算出移动的距离，
            var a = touch_moving - e.clientX
            //重新赋值start_point用于计算下一次移动
            touch_moving = e.clientX
            //更新列表的位置坐标
            list_position.value = list_position.value+a
        }else if(movedr==0){

        }

    }
    //拖拽结束
    let drag_end=(e)=>{
        if(isDrag){
            console.log("拖动")
            if(touch_moving_start >= touch_moving){
                page_move('next')
                console.log('next')
            }else if(touch_moving_start < touch_moving){
                page_move('pre')
                console.log('pre')
            }
            //关闭特殊鼠标
            tracker_toggle('hidden')
          
        }
         //打开动画
         list_transition.value = 'var(--animation-slow)'
        //关闭触摸跟随
        is_touch.value = false
        //解除移动方向的锁定
        movedr = -1
        
    }




    //获取所有的视频tag
    let videoRefs = ref([]);
    let vimeoPlayers = [];

    // 初始化 Vimeo 播放器
    onMounted(() => {
        if (slideshow_type =='vimeo'){
            contents.value.forEach(content => {
                let iframe = document.getElementById(`vimeo-${content.id}`);
                let player = new Player(iframe);
                vimeoPlayers.push({ id: content.id, player: player });
            }); 
        } 
        
    });

    //控制视频播放
    let video_control_play = ()=>{
        if (slideshow_type == "video"){
            videoRefs.value.forEach((v,i)=> {
                if(i == page_on.value){
                    v.play()
                    // console.log("bofang_",v)
                }else{
                    v.currentTime = 0
                    v.pause()
                    // console.log("tingzhi_",v)
                }
            })
        }else if(slideshow_type == "vimeo"){
            vimeoPlayers.forEach(vimeoPlayer => {
                if (vimeoPlayer.id == page_on.value) {
                    vimeoPlayer.player.play();
                } else {
                    vimeoPlayer.player.pause().then(() => {
                        vimeoPlayer.player.setCurrentTime(0);
                    });
                }
            });
       
        }else {
          
        }  
    }
    let video_control_all_stop = ()=>{
        if (slideshow_type == "video"){
            videoRefs.value.forEach((v)=> {
                v.currentTime = 0
                v.pause()
                // console.log("tingzhi_",v)
        })
        }else if(slideshow_type == "vimeo"){
            vimeoPlayers.forEach(vimeoPlayer => {
                vimeoPlayer.player.pause().then(() => {
                    vimeoPlayer.player.setCurrentTime(0);
                });
            });
        } 
    }
    let video_control_all_pause = ()=>{
        if (slideshow_type == "video"){
            videoRefs.value.forEach((v)=> {
                v.pause()
        })
        }else if(slideshow_type == "vimeo"){
            vimeoPlayers.forEach(vimeoPlayer => {
                vimeoPlayer.player.pause()
            });
        } 
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
            console.log('cgebgfib')
            page_on.value++
        }else if(val== 'pre' && page_on.value - 1 >= 0){
            page_on.value--
        }

        setTimeout(video_control_play,600)
        
        tracker_toggle('hidden')
        

    }

    


</script>

<style scoped>
h2{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color:var(--p-color-font-white-60);
}
h3{
    color:white;
    font-size:24px;
    font-weight:200
}
h4{
    color:white;
    font-size: 18px;
    font-weight:200
}
.play_text_container{
    width:100%;
}
.main_conatiner{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:24px;
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
    height:100%;
}
iframe{
    height:100%;
    pointer-events: none;
}
.img_conatiner{
    transition:all 0.6s;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    position: relative;
    z-index:-2;
}

.img_conatiner::after{
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
    z-index: -1;
}


.dots_conatiner{
    display: flex;
    height:10px;
    gap: 16px;
    align-items: center;
}

.dots{
    height:10px;
    width:10px;
    cursor: pointer;
    border-radius: 15px;
    transition:all 0.3s;
    opacity: 0.3;
}
.activeOne{
    opacity: 1;
    width:40px;
}
.hide{
    opacity: 0.5;
}

@media (max-width: 1000px){
h2{
    text-align: center;
    font-size: 18px;
    width:90%;
}
}

</style>
//依赖引入
import useStore from '../store/index'

//总入口-分流（鼠标）
let use_handle_scroll = (e)=>{
    const store = useStore()
    switch (store.scroll_event_status) {
        //默认文章阅读模式
        case 0:
            scroll_mode_articel(e.deltaY)
        break;
        default:
            console.log("滚动行为锁定")
        break;
    }

}

//总入口-分流（触摸）
let use_handle_scroll_touch = (e)=>{
    const store = useStore()
    switch (store.scroll_event_status) {
        //默认文章阅读模式
        case 0:
            scroll_mode_articel_touch(e)
        break;
        //首页菜单阅读模式
        case 1:
            scroll_mode_index_touch(e)
        break;
        default:
            console.log("滚动行为锁定")
        break;
    }
}

//文章滚动模式-限位，由本函数处理滚动的限位
let scroll_mode_articel = (deltaY)=>{
    const store = useStore()
    //将文章的高度保存到库
    store.scroll_page_height = document.getElementById('article_container_for_scroll').clientHeight
    //单词滚动距离
    var scroll_distance = Math.abs(deltaY)
    //分析鼠标滚动方向，改变文章滚动方向。
    //滚动的位置 < 页面长度减去窗口的高度（极限滚动距离）且 滚动的位置 > 0
    if( store.scroll_position <= store.scroll_page_height-store.page_height && store.scroll_position >= 0){

        //如果滚动位置与窗口极限之间的距离小于scroll_distance
        if(store.scroll_page_height - store.page_height - store.scroll_position < scroll_distance && deltaY > 0){  

            //直接滚动到最低
            store.scroll_position = store.scroll_page_height - store.page_height

        //如果滚动位置与顶部之间的距离小于scroll_distance
        }else if(store.scroll_position < scroll_distance && deltaY < 0){
             //滚动 - 滚动位置直接归零
             store.scroll_position = 0
             
        }else{
            //滚动+默认距离
            store.scroll_position = store.scroll_position + deltaY
        }

    //滚动的位置 >= 页面长度减去窗口的高度则不滚动 且 且 滚动的位置 《= 0 则不滚动 
    }else if (store.scroll_position >= store.scroll_page_height - store.page_height|| store.scroll_position <= 0){
        console.log('锁定')
        return
    }
}

//文章滚动模式-触摸 - 分流器
let scroll_mode_articel_touch = (e)=>{
    switch (e.type) {
        //默认文章阅读模式
        case "touchstart":
            scroll_mode_articel_touch_start(e)
        break;
        case "touchmove":
            scroll_mode_articel_touch_move(e)
        break;
        case "touchend":
            scroll_mode_articel_touch_end(e)
        break;
        default:
            console.log("滚动行为锁定")
        break;
    }
}

//文章滚动模式-触摸 - 开始
let scroll_mode_articel_touch_start = (e)=>{
    const store = useStore()
    //关闭之前的未完成滚动
    cancelAnimationFrame(store.touch_move_timer)
    //关闭滚动动画
    store.scroll_animation='none'
    //保存初始点位置
    store.touch_start_point = e.touches[0].clientY
    //更新时间戳
    store.touch_move_time_now = e.timeStamp

}

//文章滚动模式-触摸 - 移动
let scroll_mode_articel_touch_move = (e)=>{
    const store = useStore()

    //阻止默认事件
    e.preventDefault();
    
    //根据初始点位置和当前移动的位置计算出移动的距离，
    var a = store.touch_start_point - e.touches[0].clientY

    //将距离发送给滚动函数
    store.touch_move_dr = a
    scroll_mode_articel(a)

    //重新赋值start_point用于计算下一次移动
    store.touch_start_point = e.touches[0].clientY

    //保存当前时间戳，并且不断刷新
    store.touch_move_time_pre = store.touch_move_time_now
    store.touch_move_time_now = e.timeStamp
    
}

//文章滚动模式-触摸 - 接触
let scroll_mode_articel_touch_end = (e)=>{
    const store = useStore()
 
    //获取最后一次时间戳。计算出惯性滑动的距离
    //计算时间
    let a = store.touch_move_time_now - store.touch_move_time_pre
    //计算速度
    let b = store.touch_move_dr/a

    //初始化惯性滚动距离
    let position_change = b.toFixed(1)*30

    
    //计算针动画，直到滚动距离小于1
    store.touch_move_timer = requestAnimationFrame(function animation_set(){
        console.log('动画')
        position_change = position_change *0.95
        scroll_mode_articel(position_change)
        if(Math.abs(position_change) >=1 ){
            store.touch_move_timer = requestAnimationFrame(animation_set)
        }else{
            cancelAnimationFrame(store.touch_move_timer)
        }
    })
    
}





//首页菜单滚动模式-触摸 - 分流器
let scroll_mode_index_touch = (e)=>{
    switch (e.type) {
        //默认文章阅读模式
        case "touchstart":
            scroll_mode_index_touch_start(e)
        break;
        case "touchmove":
            scroll_mode_index_touch_move(e)
        break;
        case "touchend":
            scroll_mode_index_touch_end(e)
        break;
        default:
            console.log("滚动行为锁定")
        break;
    }
}
//首页菜单滚动模式-触摸 - 开始
let scroll_mode_index_touch_start = (e)=>{
    const store = useStore()
    //保存初始点位置
    store.touch_start_point = e.touches[0].clientX
    store.touch_start_point_once = e.touches[0].clientX

    //保存列表当前的位置坐标
    store.slideshow_track_touch_position = store.get_slides_position

}

//首页菜单滚动模式-触摸 - 移动
let scroll_mode_index_touch_move = (e)=>{
    const store = useStore()

     //阻止默认事件
     e.preventDefault();
    
     //根据初始点位置和当前移动的位置计算出移动的距离，
     var a = store.touch_start_point - e.touches[0].clientX
 
    //  //将距离发送给滚动函数
    //  store.touch_move_dr = a
    //  scroll_mode_articel(a)
 
    //重新赋值start_point用于计算下一次移动
    store.touch_start_point = e.touches[0].clientX


    //关闭列表动画
    store.slide_show_transition = 'none'

    //关闭列表动画延迟时间
    store.slide_show_animation_delay = 0

    //开启列表追踪
    store.is_touch_slidshow = true
     //卡片缩小
    store.expand_page_number = undefined
    //卡片内内容缩小
    store.expand_page_class_number = undefined
    //视窗缩小
    store.view_window_status = 0
    //信息卡隐藏
    store.infor_bar_status = false
    //卡片偏移归位
    store.card_positon_move = undefined

    //更新列表的位置坐标
    store.slideshow_track_touch_position = store.slideshow_track_touch_position-a
 
    
}

//首页菜单滚动模式-触摸 - 结束
let scroll_mode_index_touch_end = (e)=>{
    const store = useStore()

    let touch_move_long = (store.touch_start_point_once-store.touch_start_point)/store.page_width

    if(store.touch_start_point_once<store.touch_start_point){
        if(Math.abs(touch_move_long) > 0.65){
            store.triger_slieshow_page_move=2
        }else if(Math.abs(touch_move_long) > 0.05){
            store.triger_slieshow_page_move=1
        }else{
            store.triger_slieshow_page_move=0
        }
        
    }else if(store.touch_start_point_once>store.touch_start_point){
        if(Math.abs(touch_move_long)> 0.65){
            store.triger_slieshow_page_move=-2
        }else if(Math.abs(touch_move_long) > 0.05){
            store.triger_slieshow_page_move=-1
        }else{
            store.triger_slieshow_page_move=0
        }
    }

    console.log(touch_move_long)

    //开启列表动画
    store.slide_show_transition = 'all 0.3s ease-out'
}

export {
    use_handle_scroll,
    use_handle_scroll_touch
}
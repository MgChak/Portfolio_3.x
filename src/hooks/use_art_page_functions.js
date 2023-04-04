import useStore from '../store/index'
import {tracker_toggle} from '../hooks/use_mouse_tracker_toggle'
import {scrollto} from '../hooks/use_scroll'


//进入前初始化
let animation_queue_before_route_in =(page_id)=>{
    const store = useStore()


    //将thum全屏化
    store.index_array[page_id].class = 'container_fullscreen'

    //关闭footer的路由动画
    store.footer_is_rout_out = false

    //关闭鼠标追踪器
    tracker_toggle('hidden')
    
    //初始化文章位置设置为0
    scrollto(0,'jump')
    //修改导航栏状态到文章内状态
    store.navbar_status = 1
    
}
 //进入时初始化与动画队列
 let animation_queue_route_in =(page_id)=>{
    const store = useStore()

    //页面图片加载统计
    // var imgCount = document.querySelectorAll('img').length
    // page_pre_loading(imgCount)



    //将thum调整为文章内状态
    store.index_array[page_id].class = 'container_article'
    // 赋值路由动画速度
    store.footer_animation = 'var(--animation-slow)'
    //打开导航栏
    store.is_navbar_open = true 
    //将文章的高度保存到库
    store.scroll_page_height = document.getElementById('article_container_for_scroll').clientHeight  

}


//离开时复位与动画队列
let animation_queue_route_out =(page_id,to,next)=>{
    const store = useStore()

    //去works页面
    store.is_route_to_work = true
    //标记开启路由的页面
    store.router_page = page_id
    if(to.name =='works'){
        scrollto(0,'smooth',
            ()=>{
                //将thum全屏化
                store.index_array[page_id].class = 'container_fullscreen'   
                setTimeout(()=>{
                    next()
                },600)} 
        )

    //去艺术页面-由点击footer触发
    }else if(store.index_array.findIndex((i)=>i.navto==to.name)>=0){
        //赋值路由动画速度
        store.footer_animation = 'var(--animation-slow)'
        //开启footer的路由动画
        store.footer_is_rout_out = true
        //关闭导航栏
        store.is_navbar_open = false
        //重置首页内容物大小-直接放大
        store.expand_page_number = store.page_on
        //关闭滚动动画
        store.scroll_animation='none',
        setTimeout(()=>{
            //初始化文章位置设置为0
            store.scroll_position = 0
        },600) 
        
        setTimeout(()=>{
            //清空路由动画速度
            store.footer_animation = 'null'
            next()
        },700)   
    }else{
        //关闭导航栏
        store.is_navbar_open = false
        //将滚动行为初始化为锁定状态
        store.scroll_event_status = undefined
        //重置首页内容物大小-直接放大
        store.expand_page_number = store.page_on
        setTimeout(()=>{
            next()
        },200)  

    }
    
}
       
// let page_pre_loading = (imgCount)=>{
   
//     const images = document.querySelectorAll('img')
//     let loadedCount = 0
//     for (let i = 0; i < images.length; i++) {
//         const img = new Image()
//         img.onload = () => {
//             loadedCount++
//             if (loadedCount === imgCount) {
               
//                 console.log('done')
//             }
//         }
//         img.src = images[i].src
//     }
 
    
//  }  

export {
    animation_queue_route_in,
    animation_queue_route_out,
    animation_queue_before_route_in

}
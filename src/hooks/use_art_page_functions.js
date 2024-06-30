import useStore from '../store/index'
import {tracker_toggle} from '../hooks/use_mouse_tracker_toggle'
import {scrollto} from '../hooks/use_scroll'
import { s_lock,s_unlock } from '../hooks/use_page_scroll_locker'
import {screen_cover,screen_open,contents_open, contents_cover} from '../hooks/use_full_sreen_cover'



//进入前初始化
let animation_queue_before_route_in =(page_id)=>{
    const store = useStore()

    //锁定滚动
    s_lock()

    //将thum全屏化_set
    store.index_array[page_id].class = 'container_index_set'

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

    //打开屏幕遮罩
    screen_open()

    //关闭路由后存在，否则删掉

        // //将thum全屏化_set
        // store.index_array[page_id].class = 'container_index_set'
    
        // //将thum调整为文章内状态
        store.index_array[page_id].class = 'container_article'
        console.log(store.index_array[page_id].class)
        // 赋值路由动画速度
        store.footer_animation = 'var(--animation-slow)'
        //打开导航栏
        store.is_navbar_open = true
        //打开文字内容
        contents_open()
        
        setTimeout(()=>{
            //解锁滚动
            s_unlock() 
        },350)
        
    
}


//离开时复位与动画队列
let animation_queue_route_out =(page_id,to,next)=>{
    const store = useStore()

    //锁定滚动
    s_lock()

    if(to.name =='works'){
        //关闭导航栏
        store.is_navbar_open = false
        //去works页面
        store.is_route_to_work = true
        //标记开启路由的页面
        store.router_page = page_id
        //将thum全屏化
        store.index_array[page_id].class = 'container_index'  
        //遮罩文字
        contents_cover(page_id)

        scrollto(0,'smooth',
            ()=>{
                next()}
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

        setTimeout(()=>{
            //清空路由动画速度
            store.footer_animation = 'null'
            next()
            //解锁滚动
            s_unlock() 
        },400)   
    }else{
         //遮挡屏幕
         screen_cover()
        //关闭导航栏
        store.is_navbar_open = false
        //重置首页内容物大小-直接放大
        store.expand_page_number = store.page_on
        setTimeout(()=>{
            next()
            //解锁滚动
            s_unlock() 
        },350)  

    }
    
}
        

export {
    animation_queue_route_in,
    animation_queue_route_out,
    animation_queue_before_route_in,

}
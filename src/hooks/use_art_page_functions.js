import useStore from '../store/index'


 
 //进入时初始化与动画队列
 let animation_queue_route_in =(page_id)=>{
    const store = useStore()
    //卡片放大
    store.expand_page_number = store.get_path_now_id
    //初始化列表位置，
    store.page_on = store.get_path_now_id
    //修改导航栏状态到文章内状态
    store.navbar_status = 1
    //将滚动行为设置成0=文章滚动
    store.scroll_event_status = 0
    setTimeout(()=>{
        //打开导航栏
        store.is_navbar_open = true
        //触发卡片内动画：进入文章内状态
        store.router_on_page_number = store.get_path_now_id
    },100)
}


//离开时复位与动画队列
let animation_queue_route_out =(page_id)=>{
    const store = useStore()
    //触发卡片内动画：恢复index状态
    store.router_on_page_number = undefined
    //将文章滚动回顶部
    store.scroll_position = 0
    //关闭导航栏
    store.is_navbar_open = false
    //将滚动行为初始化为锁定状态
    store.scroll_event_status = undefined
}


export {
    animation_queue_route_in,
    animation_queue_route_out

}
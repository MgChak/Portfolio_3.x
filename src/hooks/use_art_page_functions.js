import useStore from '../store/index'


 
 //进入时初始化与动画队列
 let animation_queue_route_in =(page_id)=>{
    const store = useStore()
    //卡片放大
    store.expand_page_number = store.get_path_now_id
    //初始化列表位置，
    store.page_on = store.get_path_now_id
    //打开导航栏
    store.is_navbar_open = true
    //修改卡牌组件状态
    store.is_navbar_open = true
    //改变卡片内容的状态
    setTimeout(()=>{
        //触发卡片内动画：进入文章内状态
        store.router_on_page_number = store.get_path_now_id
    },100)
}


//离开时复位与动画队列
let animation_queue_route_out =(page_id)=>{
    const store = useStore()
    //触发卡片内动画：恢复index状态
    store.router_on_page_number = undefined

    //关闭导航栏
    store.is_navbar_open = false
}


export {
    animation_queue_route_in,
    animation_queue_route_out

}
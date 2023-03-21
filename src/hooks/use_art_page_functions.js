import useStore from '../store/index'
import {tracker_toggle} from '../hooks/use_mouse_tracker_toggle'

 
 //进入时初始化与动画队列
 let animation_queue_route_in =(page_id)=>{
    const store = useStore()

    //调用页面加载函数
    // page_pre_loading()
  

    //关闭footer的路由动画
    store.footer_is_rout_out = false
    //恢复滚动动画
    store.scroll_animation='transition: transform 0.6s var(--animation-slow-cubic)',
    //关闭鼠标追踪器
    tracker_toggle('hidden')
    //初始化列表位置，
    store.page_on = store.get_path_now_id
    //初始化底部信息栏
    store.infor_show_witch = store.get_path_now_id
    //初始化文章位置设置为0
    store.scroll_position = 0
    //修改导航栏状态到文章内状态
    store.navbar_status = 1
    //将滚动行为设置成0=文章滚动
    store.scroll_event_status = 0
    //将文章的高度保存到库
    store.scroll_page_height = document.getElementById('article_container_for_scroll').clientHeight
    //初始化：将组件的对应状态保存到库
        //触发卡片内动画
        store.card_size_status[page_id].card_style = {
            width:'100vw',
            height:store.page_height+'px',
            margin:'0',
        }
        store.card_size_status[page_id].card_move.t_transition_backup= 'none'
        store.card_size_status[page_id].card_move.t_scale= 'scale(1,1)'
        store.card_size_status[page_id].card_class =  'container_expand'

        store.card_size_status[page_id].card_move.t_translate = ''
        store.card_size_status[page_id].card_move.t_transition =  store.card_size_status[page_id].card_move.t_transition_backup
    
    setTimeout(()=>{
        // 赋值路由动画速度
        store.footer_animation = 'var(--animation-slow)'
        //打开导航栏
        store.is_navbar_open = true

        //触发卡片内动画
        store.card_size_status[page_id].card_style = {
            width:'100vw',
            height:'80vh',
            margin:'0',
        }
        store.card_size_status[page_id].card_move.t_transition_backup= 'var(--animation-slow)'
        store.card_size_status[page_id].card_move.t_scale= ''
        store.card_size_status[page_id].card_class =  'container_router'

        store.card_size_status[page_id].card_move.t_translate = ''
        store.card_size_status[page_id].card_move.t_transition =  store.card_size_status[page_id].card_move.t_transition_backup
    
    },100)
}


//离开时复位与动画队列
let animation_queue_route_out =(page_id,to,next)=>{
    const store = useStore()
    //触发卡片内动画：恢复index状态
    //触发卡片内动画
    //去works页面
    if(to.name =='works'){
        var timer
        timer = requestAnimationFrame(function animation_set(){
            //关闭滚动动画
            store.scroll_animation='none'
            store.scroll_position = store.scroll_position *0.87
            if(Math.abs(store.scroll_position) >=10 ){
                timer = requestAnimationFrame(animation_set)
            }else{
                cancelAnimationFrame(timer)
                store.scroll_position = 0 
                
                store.card_size_status[page_id].card_style = {
                    width:'100vw',
                    height:store.page_height+'px',
                    margin:'0',
                }
                store.card_size_status[page_id].card_move.t_transition_backup= 'var(--animation-slow)'
                store.card_size_status[page_id].card_move.t_scale= 'scale(1,1)'
                store.card_size_status[page_id].card_class =  'container_expand'
            
                store.card_size_status[page_id].card_move.t_translate = ''
                store.card_size_status[page_id].card_move.t_transition =  store.card_size_status[page_id].card_move.t_transition_backup
                //关闭导航栏
                store.is_navbar_open = false
                //将滚动行为初始化为锁定状态
                store.scroll_event_status = undefined
                //重置首页内容物大小-直接放大
                store.expand_page_number = store.page_on
                setTimeout(()=>{
                    next()
                },600)  

            }          
        })
       
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

// let page_pre_loading = ()=>{
   
//     //创建数列
//     let imgs  = document.getElementsByTagName('img')
//     //加载成功的容器
//     let count = 0;
//     //循环确认是否
//     for(let i = 0; i < imgs.length;i++ ) {
//         if(imgs[i].onload) {
//             count++;
//             console.log('成功')
//         }else{
//             console.log('失败')
//         }

//     }

//     if(count == imgs.length) {
//         console.log('All images have been loaded');
//     }else{
//         console.log(count,imgs.length)
//     }
    
// }
       

export {
    animation_queue_route_in,
    animation_queue_route_out

}
import useStore from '../store/index'
import {watchEffect,ref,watch} from 'vue'
import {tracker_toggle} from '../hooks/use_mouse_tracker_toggle'
import {scrollto} from '../hooks/use_scroll'
import { s_lock,s_unlock } from '../hooks/use_page_scroll_locker'
import {screen_cover,contents_open, contents_cover} from '../hooks/use_full_sreen_cover'

//loarder的status
let loading = ref(0)
let num = 0

//loader function
let get_all_imgs=()=>{

    const store = useStore()
    
    //初始化！！
    loading.value = 0
    num = 0
    // console.log("基数"+loading.value+"基数2"+num)

    //获取所有的图片和视频
    let all_imgs_arr = document.getElementsByTagName("img")
    // let all_videos_arr = document.getElementsByTagName("video")
    // console.log(all_imgs_arr)
    
    //统计总数+ all_videos_arr.length
    num = all_imgs_arr.length 
    //循环监控图片加载进度
    for(let i=0;i<all_imgs_arr.length;i++){
        let imgs = new Image() //这是重点，必须new一张，如果直接用onload，在你还没执行到这段函数的时候，可能已经加载了一两个图片了，这时候就会出现加载不到100%！！！
        imgs.src=  all_imgs_arr[i].src
        imgs.onload =add//必须用匿名函数，否则加载的函数不是load函数
        imgs.onerror = add
    }	

    //循环监控视频加载进度
    // for (let i = 0; i < all_videos_arr.length; i++) {
    //     let video = all_videos_arr[i]
    //     video.onloadeddata = add
    //     video.onerror = add
    // }	
    
    //累加函数
    function add(){
        loading.value++
        store.loader_num = loading.value/num*100			
    }
}



//进入前初始化
let animation_queue_before_route_in =(page_id)=>{
    const store = useStore()

    //锁定滚动
    s_lock()


    //将thum全屏化_set
    store.index_array[page_id].class = 'container_article_set'

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



    // store.loader_status = true//开启loader

    // get_all_imgs()//统计图片



    // const stop =watch(()=>store.is_loader_animation_finished,()=>{
    //     if(store.is_loader_animation_finished){
    //             //停止监听
    //             stop()
    //             //复位动画状态
    //             store.is_loader_animation_finished = false
    //             //将thum调整为文章内状态
    //             store.index_array[page_id].class = 'container_article'
    //             // 赋值路由动画速度
    //             store.footer_animation = 'var(--animation-slow)'
    //             //打开导航栏
    //             store.is_navbar_open = true 
    //             //清空loading数据
    //             loading.value = 0 
    //             //解锁滚动
    //             s_unlock() 
    //     }
    // })

    //关闭路由后存在，否则删掉
    
         //将thum调整为文章内状态
        store.index_array[page_id].class = 'container_article'
        // 赋值路由动画速度
        store.footer_animation = 'var(--animation-slow)'
        //打开导航栏
        store.is_navbar_open = true
        //打开文字内容
        contents_open()
        //清空loading数据
        loading.value = 0 
        
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
        scrollto(0,'smooth',
            ()=>{
                //将thum全屏化
                store.index_array[page_id].class = 'container_index'  
                //遮罩文字
                contents_cover(page_id)
                //关闭导航栏
                store.is_navbar_open = false
                //去works页面
                store.is_route_to_work = true
                //标记开启路由的页面
                store.router_page = page_id
                setTimeout(()=>{
                    next()
                },350)} 
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
    get_all_imgs

}
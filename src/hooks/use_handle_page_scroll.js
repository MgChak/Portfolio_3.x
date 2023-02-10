//依赖引入
import useStore from '../store/index'

let use_handle_scroll = (e)=>{
    const store = useStore()
    switch (store.scroll_event_status) {
        //默认文章阅读模式
        case 0:
            scroll_mode_articel(e)
        break;
        default:
            console.log("滚动行为锁定")
        break;
    }

}

let scroll_mode_articel = (e)=>{
    const store = useStore()

    console.log('触发')
    //将文章的高度保存到库
    store.scroll_page_height = document.getElementById('article_container_for_scroll').clientHeight
    //单词滚动距离
    var scroll_distance = Math.abs(e.deltaY)
    //分析鼠标滚动方向，改变文章滚动方向。
    //滚动的位置 < 页面长度减去窗口的高度（极限滚动距离）且 滚动的位置 > 0
    if( store.scroll_position <= store.scroll_page_height-store.page_height && store.scroll_position >= 0){

        //如果滚动位置与窗口极限之间的距离小于scroll_distance
        if(store.scroll_page_height - store.page_height - store.scroll_position < scroll_distance && e.deltaY > 0){  

            //直接滚动到最低
            store.scroll_position = store.scroll_page_height - store.page_height

        //如果滚动位置与顶部之间的距离小于scroll_distance
        }else if(store.scroll_position < scroll_distance && e.deltaY < 0){
             //滚动 - 滚动位置直接归零
             store.scroll_position = 0
             
        }else{
            //滚动+默认距离
            store.scroll_position = store.scroll_position + e.deltaY
        }

    //滚动的位置 >= 页面长度减去窗口的高度则不滚动 且 且 滚动的位置 《= 0 则不滚动 
    }else if (store.scroll_position >= store.scroll_page_height - store.page_height|| store.scroll_position <= 0){
        console.log('锁定')
        return
    }
}


export {
    use_handle_scroll
}
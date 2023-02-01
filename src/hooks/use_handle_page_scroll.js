//依赖引入
import useStore from '../store/index'

let use_handle_scroll = (e)=>{
    const store = useStore()

    switch (store.scroll_event_status) {
        //默认文章阅读模式
        case 0:
            //将文章的高度保存到库
            store.scroll_page_height = document.getElementById('article_container_for_scroll').clientHeight
            //单词滚动距离
            var scroll_distance = 100
            //分析鼠标滚动方向，改变文章滚动方向。
            //如果滚动方向为正数 且 滚动的位置 < 页面长度减去窗口的高度（极限滚动距离）
            if(e.deltaY > 0 && store.scroll_position < store.scroll_page_height-store.page_height){

                //如果滚动位置与窗口极限之间的距离小于scroll_distance
                if(store.scroll_page_height - store.page_height - store.scroll_position < scroll_distance){
                    
                    //直接滚动到最低
                    store.scroll_position = store.scroll_page_height - store.page_height
                }else {
                   
                    //滚动+默认距离
                    store.scroll_position = store.scroll_position + scroll_distance
                }

            //如果滚动方向为正数 且 滚动的位置 >= 页面长度减去窗口的高度则不滚动
            }else if (e.deltaY > 0 && store.scroll_position >= store.scroll_page_height - store.page_height){
                return

            //如果滚动方向为负数 且 滚动的位置 > 0
            }else if (e.deltaY < 0 && store.scroll_position > 0){

                //如果滚动位置与顶部之间的距离小于scroll_distance
                if(store.scroll_position < scroll_distance){
                    
                    //滚动 - 滚动位置直接归零
                    store.scroll_position = 0
               
                }else {
                   
                    //滚动 - 默认距离
                    store.scroll_position = store.scroll_position - scroll_distance
                }
                
            //如果滚动方向为负数 且 滚动的位置 > 0 则不滚动
            }else if (e.deltaY < 0 && store.scroll_position <= 0){
                return
            }
        break;
        default:
            console.log("滚动行为锁定")
        break;
    }

}


export {
    use_handle_scroll
}
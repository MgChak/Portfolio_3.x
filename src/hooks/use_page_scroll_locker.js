import useStore from '../store/index'


let s_lock = ()=>{
    const store = useStore()
    if (!store.page_scroll_locker_status){
        store.page_scroll_locker_status = true
    }
}

let s_unlock = ()=>{
    const store = useStore()
    store.page_scroll_locker_status = false
}

let preventDefault = (e) => {
    e.preventDefault();
  }


let page_scroll_locker_main = (el)=>{
    const store = useStore()

    if (store.page_scroll_locker_status) {
        // 禁止页面滚动
        document.addEventListener('mousewheel', preventDefault, { passive: false });
        document.addEventListener('touchmove', preventDefault, { passive: false });
        document.addEventListener('wheel', preventDefault, { passive: false });
        document.addEventListener('DOMMouseScroll', preventDefault, { passive: false }); // Firefox
    
        // 防止触控板事件
        document.addEventListener('gesturestart', preventDefault, { passive: false });
        document.addEventListener('gesturechange', preventDefault, { passive: false });
        
        // console.log("锁定")
    } else {
        // 恢复页面滚动
        document.removeEventListener('mousewheel', preventDefault, { passive: false });
        document.removeEventListener('touchmove', preventDefault, { passive: false });
        document.removeEventListener('wheel', preventDefault, { passive: false });
        document.removeEventListener('DOMMouseScroll', preventDefault, { passive: false }); // Firefox
    
        // 恢复触控板事件
        document.removeEventListener('gesturestart', preventDefault, { passive: false });
        document.removeEventListener('gesturechange', preventDefault, { passive: false });
        
        // console.log("解锁")
    } 
      
}



export{
    s_lock,
    s_unlock,
    page_scroll_locker_main 
}

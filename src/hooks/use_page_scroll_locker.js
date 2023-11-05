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


let page_scroll_locker_main = ()=>{
    const store = useStore()
    if( store.page_scroll_locker_status){
        var scrollY = window.scrollY
        document.body.style.overflow = 'hidden';
         window.scrollTo(0,scrollY);
    }else{
        document.body.style.overflow = 'auto';
    }
}


export{
    s_lock,
    s_unlock,
    page_scroll_locker_main 
}

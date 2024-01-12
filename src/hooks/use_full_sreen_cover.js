import useStore from '../store/index'

let screen_cover = ()=>{
    const store = useStore()
    store.full_cover_class = 'bottom'
    setTimeout(() => {
        store.full_cover_class = 'center'
    }, 10);

}

let screen_open = ()=>{
    const store = useStore()
    if (store.full_cover_class == 'center'){
        store.full_cover_class = 'top'
    }

    setTimeout(() => {
        store.full_cover_class = 'bottom'
    }, 320);

}

export {
    screen_open,
    screen_cover
}
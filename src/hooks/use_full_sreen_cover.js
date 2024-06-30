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

let contents_cover = (index)=>{
    const store = useStore()
    z_index_class_change(index)
    store.full_cover_class_2 = 'cover'
}

let contents_open = ()=>{
    const store = useStore()
    setTimeout(()=>{store.full_cover_class_2 = 'show'},100)
    // rewrite_z_index_class()
}

//修改index_array中的class属性
let rewrite_z_index_class = ()=>{
    const store = useStore()
    store.index_array.forEach((i)=>{
        i.zindex = 1
    })
}

let z_index_class_change = (index)=>{
    const store = useStore()
    store.index_array.forEach((e,i)=>{
        if(i == index){
            e.zindex = 8
        }else{
            e.zindex = 1
        }
    })
}

export {
    screen_open,
    screen_cover,
    contents_cover,
    contents_open
}
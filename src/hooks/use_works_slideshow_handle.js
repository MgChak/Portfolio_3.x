
import useStore from '../store'

let handle_img_position_change = (card_id)=>{

    const store = useStore()
    //全屏状态
    if (card_id == store.expand_page_number && card_id != store.get_path_now_id){
        
        //运算x轴移动
        if(store.mouse_position.x ==0 || !store.is_slide_img_moving){
            return {
                transform:`translate(${0}, ${0})`,
                transition:'var(--animation-slow)'
            } 
        }else{
            var a = (store.get_scrren_center_x - store.mouse_position.x)/store.get_scrren_center_x
            var x_move = a.toFixed(2) + '%'

            var c = store.get_scrren_center_y - store.mouse_position.y
            var d = c/store.get_scrren_center_y
            var y_move = d.toFixed(2) + '%'

            return {
                transform:`translate(${x_move}, ${y_move})`,
                transition:'var(--animation-slow)'
            } 
        }
        

    }

}
let handle_el_container_size = (width, height)=>{
    const store = useStore()
    // if(card_id == store.get_path_now_id){
    //     if (store.page_height <= store.page_width){
    //         return '100vh'
    //     }else{
    //         return '100vw'
    //     }
    // }else if (store.page_height <= store.page_width){

    //     return '40vh'
    // }else{
    //     return '40vw'
    // }

    if (width.value <= height.value){
         
        return width.value + "px"
    }else{
        return height.value + "px"
    }
}

let handle_card_class_height_change = (name)=>{
    const store = useStore()
    //用name找到数列中对应的索引值
    var index = store.index_array.findIndex((i)=>i.name == name)

    var a = store.index_array[index].class
    var b

    if (a =='container_fullscreen'){
            b = store.page_height+'px '
    }else if(a =='container_article'){
            b = store.page_height *0.8+'px '
    }else if(a =='container_index'){
            b = store.page_height *0.7+'px '

    }
    
    //用索引值返回对应class
    return {class_name:a,height:b}
}



export {
    handle_img_position_change,
    handle_el_container_size,
    handle_card_class_height_change,
}
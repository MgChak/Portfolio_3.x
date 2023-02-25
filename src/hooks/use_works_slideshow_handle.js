
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

            console.log(x_move)
            return {
                transform:`translate(${x_move}, ${y_move})`,
                transition:'var(--animation-slow)'
            } 
        }
        

    }

}
let handle_el_container_size = (card_id,width, height)=>{
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

export {
    handle_img_position_change,
    handle_el_container_size
}
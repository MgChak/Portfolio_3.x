
import useStore from '../store'

let handle_img_position_change = (card_id)=>{

    const store = useStore()
    //全屏状态
    if (card_id == store.expand_page_number && card_id != store.get_path_now_id){
        
        //运算x轴移动

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

export {
    handle_img_position_change
}
import {computed} from 'vue'
import useStore from '../store'

let handle_style_change = (card_id)=>{
    const store = useStore()

    if (card_id == store.expand_page_number){
        return {
            width:'100vw',
            height:'100vh',
            transition:'var(--animation-slow)'
            
        }   
    }else{
        return {
            width:store.get_thumcard_width,
            height:store.get_thumcard_height,
            transition:'all 0.3s ease-in',
            borderRadius: '8px',
            overflow: 'hidden',
            filter:' drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))'
        }  
    }  
}

let handle_class_change = (card_id)=>{
    const store = useStore()

    if (card_id == store.expand_page_number){
        return 'container_expand'
    }else{
        return 'container_default'
    }
}

let handle_z_index_change = (card_id)=>{
    const store = useStore()
    if (card_id == store.z_index_page_number){
        return 'container_z_index_back'
    }else{
        return 'container_z_index_front'
    }
}

let handle_view_window_resize = (card_id)=>{
    const store = useStore()
    if (card_id == store.expand_page_number){
        return {
            width:store.get_thumcard_container_width_number*1.8+'px',
            height:store.get_thumcard_height,
            transition:'var(--animation-slow)'
        }   
    }else{
        return {
            width:store.get_thumcard_container_width,
            height:store.get_thumcard_height,
            transition:'all 0.3s ease-in'
        }  
    }  
}

export {
    handle_style_change,
    handle_class_change,
    handle_z_index_change,
    handle_view_window_resize
}
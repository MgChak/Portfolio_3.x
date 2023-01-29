import {computed} from 'vue'
import useStore from '../store'

let handle_style_change = (card_id)=>{
    const store = useStore()

    if (card_id == store.expand_page_number){
        return {
            width:'100vw',
            height:'100vh'
        }   
    }else{
        return {
            width:store.get_thumcard_width,
            height:store.get_thumcard_height,
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

export {
    handle_style_change,
    handle_class_change,
    handle_z_index_change
}
import {computed} from 'vue'
import useStore from '../store'

let handle_style_change = (card_id)=>{
    const store = useStore()

    if (card_id == store.expand_page_number && card_id != store.router_on_page_number){
        //全屏状态
        return {
            width:'100vw',
            height:'100vh',
            transition:'var(--animation-slow)',
            margin:'0',
            
        }   
    }else if (card_id == store.router_on_page_number){
        //路由展开状态
        return {
            width:'100%',
            height:'85vh',
            transition:'var(--animation-slow)'
        }   
    }else{
        //小卡片状态
        return {
            width:store.get_thumcard_width,
            height:store.get_thumcard_height,
            transition:'all 0.3s ease-in',
            borderRadius: '8px',
            overflow: 'hidden',
            filter:' drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))',

            position:'relative',
            margin:'0',
        }  
    }  
}

let handle_class_change = (card_id)=>{
    const store = useStore()

    if (card_id == store.expand_page_number && card_id != store.router_on_page_number){
        return 'container_expand'
    }else if (card_id == store.router_on_page_number){
        return 'container_router'
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

//控制卡片偏移
let handle_card_position_change =(card_id)=>{
    const store = useStore()
    if (card_id == store.card_positon_move + 1){
        return {
            transform:'translate(-28%, 0)',
            transition:'var(--animation-slow)'}
    }else if (card_id == store.card_positon_move - 1){
        return {
            transform:'translate(28%, 0)',
            transition:'var(--animation-slow)'}
    }else{
        return {
            transform:'translate(0, 0)',
        }
    }
}

export {
    handle_style_change,
    handle_class_change,
    handle_z_index_change,
    handle_card_position_change
}
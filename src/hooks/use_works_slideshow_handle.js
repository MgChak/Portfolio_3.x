
import useStore from '../store'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

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
            b = '100vh'
    }else if(a =='container_article'){
            b = '80vh'
    }else if(a =='container_index'){
            b = '70vh'

    }
    
    //用索引值返回对应class
    return {class_name:a,height:b}
}


let thum_ani_render = (name,data_obj)=>{

    gsap.registerPlugin(CustomEase);
    const store = useStore()
    //用name找到数列中对应的索引值
    var index = store.index_array.findIndex((i)=>i.name == name)
    // a = 当前状态
    var a = store.index_array[index].class

    var b //当前高度

    

    let animation_setting_normal = {//通用动画设置
        duration: 0.6,
        ease: CustomEase.create("custom", store.animation_ease_c1),
    }


    let animation_render_loop = (type, render_data)=>{//根据传入的数据量，生成灯亮的gasp动画
        if (type == "set"){

            render_data.forEach((item)=> {//循环渲染动画
                gsap.set(item.el.value,{
                    ...item.animations,
                    ...animation_setting_normal
                })
            });

        }else if (type = "ani"){

            render_data.forEach((item)=> {//循环设置状态/无动画
                gsap.to(item.el.value,{
                    ...item.animations,
                    ...animation_setting_normal
                })
            });

        }
    }

    //执行动画函数
    if (a =='container_fullscreen'){
        animation_render_loop('ani',data_obj.full)
    }else if(a =='container_article'){
        animation_render_loop('ani',data_obj.article)
    }else if(a =='container_index'){            
        animation_render_loop('ani',data_obj.index)
    }else if (a =='container_fullscreen_set'){
        animation_render_loop('set',data_obj.full)
    }else if(a =='container_article_set'){
        animation_render_loop('set',data_obj.article)
    }else if(a =='container_index_set'){            
        animation_render_loop('set',data_obj.index)
    }

    
}


export {
    handle_img_position_change,
    handle_el_container_size,
    handle_card_class_height_change,
    thum_ani_render
}
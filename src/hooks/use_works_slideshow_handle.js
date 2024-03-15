
import useStore from '../store'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";


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



let thum_ani_render = (name,data_obj)=>{

    gsap.registerPlugin(CustomEase);
    const store = useStore()
    //用name找到数列中对应的索引值
    var index = store.index_array.findIndex((i)=>i.name == name)
    // a = 当前状态
    var a = store.index_array[index].class

    var b //当前高度

    

    let animation_setting_normal = {//通用动画设置
        duration: 0.3,
        ease:"ease"
    }
// CustomEase.create("custom", store.animation_ease_c1)

    let animation_render_loop = (type, render_data)=>{//根据传入的数据量，生成等量的gasp动画
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

let handle_z_index = (name)=>{
    const store = useStore()
    //用name找到数列中对应的索引值
    var index = store.index_array.findIndex((i)=>i.name == name)

    return{'z-index':store.index_array[index].zindex} 
}


let thum_height = ()=>{
    const store = useStore()
    var max_w
    if (store.page_width >= 1280){
        max_w = 1280*7.5/16
    }else if (store.page_width <1280 && store.page_width >=900){
        max_w = store.page_width*0.8*7.5/16
    }else{
        max_w = store.page_width*0.8*3/4
    }
    return max_w + "px"
    
}
export {
    handle_el_container_size,
    thum_ani_render,
    handle_z_index,
    thum_height
}
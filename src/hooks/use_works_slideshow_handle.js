
import useStore from '../store'
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";


let handle_el_container_size = (width, height)=>{
    const store = useStore()

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

    CustomEase.create("custom", store.animation_ease_c1)


    let animation_setting_normal = {//通用动画设置
        duration: 0.3,
        ease:"ease"
    }

    let animation_setting_fast = {//通用动画设置
        duration: 0.3,
        ease:"ease-in"
    }
    

    let animation_render_loop = (type, render_data)=>{//根据传入的数据量，生成等量的gasp动画
        if (type == "set"){
            render_data.forEach((item)=> {//循环渲染动画
                gsap.set(item.el.value,{
                    ...item.animations,
                    ...animation_setting_normal
                })
            });

        }else if (type == "ani"){
            render_data.forEach((item)=> {//循环设置状态/无动画
                gsap.to(item.el.value,{
                    ...item.animations,
                    ...animation_setting_normal
                })
            });

        }else if (type == "ani_totop"){
            render_data[0].animations.y = store.index_array[index].to_top * -1
            render_data.forEach((item)=> {//循环设置状态/无动画
                gsap.to(item.el.value,{
                    ...item.animations,
                    ...animation_setting_fast,
                })
            });

        }else if (type == "ani_tocenter"){
            render_data[0].animations.y = store.page_height*store.center_coef
            render_data.forEach((item)=> {//循环设置状态/无动画
                gsap.to(item.el.value,{
                    ...item.animations,
                    ...animation_setting_fast,
                })
            });

        }else{
            console.log('type='+type)
        }
    }

    //执行动画函数
    if (a =='container_footer'){
        animation_render_loop('ani',data_obj.footer)
    }else if(a =='container_article'){
        animation_render_loop('ani',data_obj.article)
    }else if(a =='container_index'){            
        animation_render_loop('ani',data_obj.index)
    }else if(a =='container_article_totop'){            
        animation_render_loop('ani_totop',data_obj.index)
    }else if(a =='container_article_tocenter'){            
        animation_render_loop('ani_tocenter',data_obj.index)
    }else if (a =='container_footer_set'){
        animation_render_loop('set',data_obj.footer)
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
    var max_h
    if (store.page_width >= 1280){
        max_h = 1200*7.5/16
    }else if (store.page_width <1280 && store.page_width >=900){
        max_h = store.page_width*0.8*7.5/16
    }else{
        max_h = store.page_width*0.8*3/4
    }
    return max_h 
    
}

// let thum_width = ()=>{
//     const store = useStore()
//     var width

//     if (store.page_width >= 1280){
//         width = "1000px"
//     }else{
//         width = "100vw"
//     }
//     return width 
// }

// let thum_border=()=>{

//     const store = useStore()
//     var radius

//     if (store.page_width >= 1280){
//         radius = "20px"
//     }else{
//         radius = "0px"
//     }
//     return radius

// }


export {
    handle_el_container_size,
    thum_ani_render,
    handle_z_index,
    thum_height,
    // thum_width,
    // thum_border
}
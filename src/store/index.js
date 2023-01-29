import { defineStore } from 'pinia'

export default defineStore("Main",{
    actions:{
    },
    getters: {
        //处理鼠标坐标返回值。
        get_mouse_position_x: (state) => state.mouse_position.x +"px",
        get_mouse_position_y: (state) => state.mouse_position.y +"px",

        //处理首页卡片尺寸返回值。
        get_thumcard_width: (state) => state.page_width*0.4 +"px",
        get_thumcard_height: (state) => state.page_width*0.4*9/16 +"px",
        get_thumcard_container_width: (state) => state.page_width*0.4 + 48 +"px",
        get_thumcard_container_width_number: (state) => state.page_width*0.4 + 48,
    },
    state:()=>{
        return{
            //mouse_tracker的依赖状态
            mouse_position:{
                x:0,
                y:0
            },

            //当前打开的路径
            path_now:'',

            //当前窗口宽度
            page_width:0,

            //navbar依赖的状态
            is_navbar_open:true,

            //works page 的 slideshow 的以来数据
            slides_on: 0,

        }
    },
    
})
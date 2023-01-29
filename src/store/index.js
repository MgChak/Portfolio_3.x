import { defineStore } from 'pinia'

export default defineStore("Main",{
    actions:{
    },
    getters: {
        //处理鼠标坐标返回值。
        get_mouse_position_x: (state) => state.mouse_position.x +"px",
        get_mouse_position_y: (state) => state.mouse_position.y +"px",
    },
    state:()=>{
        return{
            //mouse_tracker的依赖状态
            mouse_position:{
                x:0,
                y:0
            },

            //当先打开的路径
            path_now:'',

        }
    },
    
})
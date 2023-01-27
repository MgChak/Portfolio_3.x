import { defineStore } from 'pinia'

export default defineStore("Main",{
    actions:{
    },
    getters: {
        get_mouse_position_x: (state) => state.mouse_position.x +"px",
        get_mouse_position_y: (state) => state.mouse_position.y +"px",
    },
    state:()=>{
        return{
            testDate:1,
            //mouse_tracker的依赖状态
            mouse_position:{
                x:0,
                y:0
            }
        }
    },
    
})
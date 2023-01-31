import { defineStore } from 'pinia'

export default defineStore("Main",{
    actions:{
    },
    getters: {
        //处理鼠标坐标返回值。
        get_mouse_position_x: (state) => state.mouse_position.x +"px",
        get_mouse_position_y: (state) => state.mouse_position.y +"px",

        //处理首页卡片尺寸返回值。：高度：16/9 计算备用：state.page_width*0.4*9/16 +"px",
        get_thumcard_width: (state) => state.page_width*0.4 +"px",
        get_thumcard_height: (state) => state.page_height*0.4+"px",
        //用来控制卡片盒子的状态
        get_path_now_id:(state)=>{
            var a 
            state.index_array.forEach((item)=>{
                if (item.navto == state.path_now){
                    a = item.id 
                }
            })
            return a
        }
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

            //当前窗口高度
            page_height:0,

            //navbar是否打开
            is_navbar_open:false,

            //navbar的状态 0=默认,1=文章内
            navbar_status:0,

            //slide cards css改变依赖的状态
            page_on:0,

            //控制卡片的状态,发生变化的时候，对应id的卡片放大
            expand_page_number:0,

            //控制卡片偏移，当与page_on相等时触发偏移，为undefined时，关闭偏移
            card_positon_move:undefined,

            //控制卡片内容的动画状态（路由进出文章），当与page_on/get_path_now_id相等时进入文章内状态，为undefined时，恢复
            router_on_page_number:undefined,

            //视窗的状态:1=全屏，0=缩小
            view_window_status:1,
            
            //控制z-index偏移，当与page_on相等时触发沉降到-3，为undefined时，卡片提升到默认层
            z_index_page_number:0,

            infor_bar_status:false,
            infor_show_witch:0,

            //目录导航数据
            index_array:[
                {   
                    id:0,
                    name:'COVER',
                    bio:'TRAVEL APP - UX/UI STUDY CASE - SOLO DESIGNER',
                    time:'2022 spring',
                    navto:'',
                    background_color:'black',
                },{ 
                    id:1,
                    name:'lets go',
                    bio:'TRAVEL APP - UX/UI STUDY CASE - SOLO DESIGNER',
                    time:'2022 spring',
                    navto:'letsgo',
                    background_color:' linear-gradient(360deg, #2B3825 -3.36%, #000000 49.04%)',
                },{ 
                    id:2,
                    name:'TRANSIT',
                    bio:'TRAVEL APP - UX/UI STUDY CASE - SOLO DESIGNER',
                    time:'2022 spring',
                    navto:'',
                    background_color:'linear-gradient(360deg, #25343D -3.36%, #000000 49.04%)',
                },{ 
                    id:3,
                    name:'POSITION',
                    bio:'TRAVEL APP - UX/UI STUDY CASE - SOLO DESIGNER',
                    time:'2022 spring',
                    navto:'',
                    background_color:'linear-gradient(360deg, #3D2539 -3.36%, #000000 49.04%)',
                }
            ]

        }
    },
    
})
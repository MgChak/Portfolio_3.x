import { defineStore } from 'pinia'

export default defineStore("Main",{
    actions:{
    },
    getters: {
        //屏幕中心点
        get_scrren_center_x:(state) => state.page_width/2,
        get_scrren_center_y:(state) => state.page_height/2,
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
        //=============================
        //mouse_tracker的依赖状态
        //=============================
            //鼠标坐标
            mouse_position:{
                x:0,
                y:0
            },

            //tracker的展示状态,该状态将作为class name直接赋予给tracker
            //这个数据同时被用来控制首页卡片的hover偏移，当值为‘pre’和‘next’时触发
            //同时用来控制默认鼠标的隐藏，只有为‘hidden’时才会显示默认的鼠标
            tracker_status: 'hidden',
            //用来避免元素叠加时，mousetracker的监听不起作用，基本上等于被hover的thumcard的id。
            hover_id:undefined,


        //=============================
        //路由追踪
        //=============================
            //当前打开的路径
            path_now:'',

        //=============================
        //窗口尺寸
        //=============================
            //当前窗口宽度
            page_width:0,

            //当前窗口高度
            page_height:0,

        //=============================
        //导航栏依赖
        //=============================
            //navbar是否打开
            is_navbar_open:false,

            //navbar的状态 0=默认,1=文章内
            navbar_status:0,

        //=============================
        //首页slideshow依赖 + thum card 依赖
        //=============================

            //slide cards 移动依赖的状态
            page_on:0,

            //控制卡片的状态,发生变化的时候，对应id的卡片放大
            expand_page_number:0,

            //控制卡片的状态,发生变化的时候，对应id的卡片被赋予expand class name 
            expand_page_class_number:undefined,

            //控制卡片偏移，当与page_on相等时触发偏移，为undefined时，关闭偏移
            card_positon_move:undefined,

            //控制卡片内容的动画状态（路由进出文章），当与page_on/get_path_now_id相等时进入文章内状态，为undefined时，恢复
            router_on_page_number:undefined,

            //视窗的状态:1=全屏，0=缩小
            view_window_status:1,
            
            //控制卡片z-index偏移，当与page_on相等时触发沉降到-3，为undefined时，卡片提升到默认层
            z_index_page_number:0,

            //记录是第一次打开还是从文章路由到work页面
            is_route_to_work:true,

        //=============================
        //首页底部信息栏依赖
        //=============================
            //底部信息栏的开启与关闭
            infor_bar_status:false,
            
            //底部信息栏显示内容
            infor_show_witch:0,

        //=============================
        //文章平滑滚动依赖
        //=============================
            //滚动状态： 0= 文章的滚动/开启滚动条
            scroll_event_status:undefined,

            //文章平滑滚动使用：由use_handle_scroll赋值。为0时文章处于顶部。
            scroll_position:0,

            //用于保存文章的高度
            scroll_page_height:0,

        //=============================
        //index render依赖
        //=============================

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
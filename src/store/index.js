import { defineStore } from 'pinia'
import abs from'../components/main_pages/works_thum_cards/abs.vue'
import letsgo from'../components/main_pages/works_thum_cards/letsgo.vue'
import transit from'../components/main_pages/works_thum_cards/transit.vue'

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
        get_thumcard_width: (state) => state.page_width/2.5 +"px",
        get_thumcard_height: (state) => state.page_height/2.5+"px",
        //用来控制卡片盒子的状态
        get_path_now_id:(state)=>{
            var a 
            state.index_array.forEach((item)=>{
                if (item.navto == state.path_now){
                    a = item.id 
                }
            })
            return a
        },
        //通过视窗宽度和当前所在页面，计算翻页移动距离
        get_slides_position:(state)=>{
            let a = state.page_width*0.4 + 16 
            return a*state.page_on*-1
        }
    },
    state:()=>{
        return{
        //=============================
        //页面滚动状态标记：由hook use_page_scroll_lock使用
        //=============================
        page_scroll_locker_status:false,
        //=============================
        //加载器状态更新
        //=============================
        loader_status:false,
        loader_num:0,
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
        //=============================
        //mouse_tracker的依赖状态
        //=============================

            //图片的偏移依赖
            is_slide_img_moving:true,

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

            //表示手机端二级菜单的开关
            is_mv_nav_open:false,

        //=============================
        //首页slideshow依赖 + thum card 依赖
        //=============================
            
            //开启路由动画的页面
            router_page:0,

            //记录是第一次打开还是从文章路由到work页面/用来初始化卡片内容
            is_route_to_work:false,


        //=============================
        //滚动依赖
        //=============================
            //滚动数据（距离和方向）

            scroll_page_height:0,

            scroll_position:0,
        

        //=============================
        //footer 状态依赖
        //=============================

            //是否开始router_out动画
            footer_is_rout_out:false,

            //footer 的动画
            footer_animation: 'var(--animation-slow)',

        //=============================
        //通用的动画参数
        //=============================
            
            //动画速度
            animation_speed: 0.8,

            //曲线
            animation_ease_c1:"M0,0 C0,0.396 0.217,0.648 0.347,0.773 0.626,1.04 0.858,1 1,1 ",

        //=============================
        //index render依赖
        //=============================


            //目录导航数据==数据中的id必须等于数据的index
                //name作为检索值，而text作为渲染内容，不要修改name                     
            index_array:[
                { 
                    id:1,
                    comp:'letsgo',
                    name:'LETS_GO',
                    text:'Lets Go',
                    bio:'TRAVEL APP - CASE STUDY - SOLO DESIGNER',
                    time:'2022 fall - LIVE',
                    sub_color:'#8CE547',
                    navto:'letsgo',
                    background_color:' linear-gradient(360deg, #2B3825 -3.36%, #000000 49.04%)',
                    class:'',
                },{ 
                    id:2,
                    comp:'transit',
                    name:'TRANSIT',
                    text:'Transit',
                    bio:'navigation APP - CASE STUDY - SOLO DESIGNER',
                    time:'2021 spring',
                    sub_color:'#11F4DB ',
                    navto:'transit',
                    background_color:'linear-gradient(360deg, #25343D -3.36%, #000000 49.04%)',
                    class:'',
                },{ 
                    id:3,
                    comp:'abs',
                    name:'ABS_INTERNSHIP',
                    text:'ABS Intern',
                    bio:'SUMMER INTERNSHIP CASE',
                    time:'2022 summer',
                    sub_color:'#B71D39',
                    navto:'abs',
                    background_color:'linear-gradient(360deg, #3D2539 -3.36%, #000000 49.04%)',
                    class:'',
                }
            ],

        }
    },
    
})
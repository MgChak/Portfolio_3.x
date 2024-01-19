<template>

<div class="main_container" ref="main_container">
    <div class="loader" :class = "store.loader_status ? 'loader_ani':''" >
        <h3>LOADING: {{ num }}%</h3>

        <div class="load_bar_container" ref="load_bar_container">
            <div class="load_bar" ref="load_bar"></div>
        </div>
    </div>
</div>

</template>

<script setup>
import useStore from '../../store/index.js'
import { onMounted, ref,watch } from 'vue';
import Background_Element from '../comps/background_elements.vue'
import { gsap } from 'gsap/gsap-core'
const store = useStore()

let num = ref(0)
let speed = ref(100)
let res = 1

let time_fun = ()=>{
    let timer11 = setTimeout(()=>{
    
    // num.value = num.value+res
    // if (num.value<=10){
    //     res = 10
    //     speed.value = 50
    //     time_fun()
    // }else if(num.value<=90){
    //     if(store.loader_num >= 70 &&store.loader_num < 100){
    //         res = 10
    //         speed.value = 30
    //         time_fun()
    //     }else if (store.loader_num >=100){
    //         num.value=100
    //         setTimeout(()=>{
    //             store.loader_status=false
    //             speed.value= 100
    //             setTimeout(()=>{
    //                 num.value = 0
    //             },300)
    //             store.loader_num = 0
    //         },300)
    //     }else if (store.loader_num<70){
    //         speed.value = 200
    //         res = 1
    //         time_fun()
    //     }else if (store.loader_num<40){
    //         speed.value = 600
    //         res = 1
    //         time_fun()
    //     }
    // }else if(num.value>90){
    //     if (store.loader_num >=100 || num.value>=100){
    //         num.value=100
    //         setTimeout(()=>{
    //             store.loader_status=false
    //             speed.value= 100
    //             setTimeout(()=>{
    //                 num.value = 0
    //             },300)
    //             store.loader_num = 0
    //         },300)
    //     }else if(store.loader_num <= 98 && num.value<=98){
    //         speed.value = 500
    //         res = 1
    //         time_fun()
    //     }else if (store.loader_num <= 99 || num.value<=99){
    //         speed.value =200
    //         res = 0
    //         time_fun()
    //     }
    // }

    if (store.loader_num >=100){
            num.value = Math.floor(store.loader_num)
            load_bar_anim()
            setTimeout(()=>{
                store.loader_status=false
                speed.value= 100
                setTimeout(()=>{
                    num.value = 0
                },300)
                store.loader_num = 0
            },300)   
    }else{
        num.value = Math.floor(store.loader_num)
        time_fun()
        load_bar_anim()
    }
    },speed.value)
}

watch(()=>store.loader_status,(newVal)=>{
    if (newVal){
        container_animation(true)
        time_fun()
    }else{
        container_animation(false)
    }
})



////动画控制

const load_bar = ref(null)
let load_bar_anim =()=>{ //进度动画
    gsap.to(load_bar.value,{
        scaleX: num.value/100,
        transformOrigin: "left",
    })
}

const load_bar_container = ref(null)
const main_container = ref(null)

let container_animation = (val)=>{//展开和关闭动画
    if(val){
        gsap.fromTo(main_container.value,{
            y:0
        },{
            y:100
        })

    }else{
        gsap.fromTo(main_container.value,{
            y:100
        },{
            y:0,
            onComplete:()=>{
                store.is_loader_animation_finished = true
                gsap.set(load_bar.value,{
                    scaleX: 0,
                    transformOrigin: "left",
                })    
            }
        })
        
    }
}

    


</script>

<style scoped>
.main_container{
    position:fixed;
    top:-60px;
   
    width:100%;
    z-index:10;
    display: flex;
    align-items: center;
    justify-content: center;

    pointer-events: none;
    /* overflow: hidden; */
}

.loader{
    background:var(--color-glass-dark);
    width:var(--content-width);
    max-width: 650px;
    height:50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(9.5px); 
        -webkit-backdrop-filter: blur(9.5px);
    border-radius: 50px;
    display:flex;
    gap:2%;
    align-items: center;
    justify-content: space-around;
    /* overflow: hidden; */
    position: relative;
    overflow: hidden;
}
.loader_ani::after{
    content: '';
    height:50px;
    width:100%;
    left:-100%;
    position: absolute;
    background-image:linear-gradient(90deg, #00000000 0%, rgba(148, 148, 148, 0.662) 50%, #00000000 100%);
    opacity: 0.5;
    /* background-color: white; */
    z-index: -4;
    animation: light 2s ease-in-out infinite;
    animation-delay: 2.5s;
}
@keyframes light {
    from{left:-100%}
    to{left:130%}
}
.background_holder{
    width:100%;
    height:100%;
    z-index: 0;
    position:absolute;
}

h1{
    font-size: 80px;
    font-weight: 800;
    line-height: 100px;
    color:rgb(45, 45, 45)
}
h3{
        color:var(--main-light-100);
        font-size:15px;
        font-weight: 500;
        line-height: 12px;
        transition:all 0.3s ease-out;
        margin-left:30px;
        flex:none;
    }
.load_bar_container{
    height: 4px;
    flex:1;
    margin-right: 30px;
    background-color: rgb(0, 0, 0);
    z-index: 2;
    max-width: 1000px;
    border-radius: 20px;
    position:relative;
    border:1px solid white;
    overflow: hidden;
    /* overflow: hidden; */
}

.load_bar{
    --color1:rgb(54, 54, 54);
    --color2:white;
    border-right: 1px white solid;
    height:4px;
    width:100%;
    background-color: rgb(255, 255, 255);
    z-index: 2;
    border-radius: 15px;
    position:relative;
    transform: scaleX(0);
    transform-origin: left;
}


</style>
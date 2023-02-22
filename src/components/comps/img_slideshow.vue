<template>
    <div class="main_conatiner">
        <div class = "view_window" ref='el'>
            <div class="pic_list" :style="{width:list_width, transform:list_transform}" >
                <div class="img_conatiner" v-for="p in pics" :key="p.id" 
                    :style="{width:width+'px'}"
                    :class = "{hide:p.id!=page_on}"
                    @click="handle_img_click(p.id)"
                >
                    <img :src="p.pic" alt="" >
                </div>
            </div>
        </div>
        <div class="dots_conatiner">
            <div class="dots" v-for="p in pics" :key="p.id" 
                :style="{background:props.slideshow_arr.color}"
                :class = "{hide:p.id!=page_on}"
                @click="handle_dots_click(p.id)"
            ></div>
        </div>
    </div>
   
</template>

<script setup>
import { ref,computed } from 'vue'
import { useElementSize } from '@vueuse/core'
import useStore from '../../store/index'
const store = useStore()

    //引入props
    let props = defineProps(['slideshow_arr'])

    //创建图片数列,根据props写入数列和id
    let pics = computed(()=>{

        var b = []

        props.slideshow_arr.pics.forEach((item,index)=>{
            var a = {}
            a.pic = item
            a.id = index
            b.push(a)
        })

        return b
    })

    //获取view——window size， 给img用
    let el = ref()
    const { width } = useElementSize(el)

    //计算列表的总长度
    let list_width = computed(()=>width.value*props.slideshow_arr.pics.length + store.page_width*0.01*(props.slideshow_arr.pics.length-1) + 'px')

    

    //幻灯片逻辑
    //页面 
    let page_on = ref(0)

    //是否开启触摸跟随
    let is_touch = false

    //计算列表的移动
    let list_transform = computed(()=>{
        if(!is_touch){

            console.log('fany')

            var a = page_on.value*(width.value+store.page_width*0.01)

            return `translateX(-${a}px)`
            
        }else{
            return
        }
    })


    //处理点击
    let handle_img_click = (i)=>{
        
        if(i == page_on.value){
            return
        }else if(i > page_on.value){
            page_move('next')
            console.log(i)
        }else if (i < page_on.value){
            page_move('pre')
        }
    }

    let handle_dots_click = (i) =>{
        page_on.value = i
    }

    //翻页
    let page_move = (val)=>{
        if (val== 'next'){
            page_on.value++
        }else if(val== 'pre'){
            page_on.value--
        }
    }



</script>

<style scoped>
.main_conatiner{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:16px;
    align-items: center;
}
.view_window{
    width:100%;
    display: flex;
    flex-direction: column;

    position:relative;
}
.pic_list{
    display: flex;
    gap:1vw;
    transition:var(--animation-slow);
}
img{
    width:100%;
}
.hide{
    opacity: 0.3;
}

.dots_conatiner{
    display: flex;
    height:24px;
    gap:16px;
    width:100%;
    align-items: center;
}
.dots_conatiner:hover > .dots{
    height:24px;
    transition:all 0.3s;
}
.dots{
    flex:1;
    height:3px;
    cursor: pointer;
    border-radius: 3px;
    transition:all 0.3s;
}
</style>
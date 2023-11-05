import useStore from '../store/index'

//头
let scrollto = (dr,val,fn)=>{
    switch (val) {
        case 'smooth':
            smooth_to(dr,fn)
        break;
        case 'jump':
            jump_to(dr)
        break;
    
        default:
            console.log("错误滚动行为")
        break;
    }
}


let smooth_to = (dr,fn) =>{
    const store = useStore()

    var updown = 0

    // 判断滚动方向
    var timer = requestAnimationFrame(function animation_set(){

        var a = store.scroll_position - dr

        window.scroll(0,store.scroll_position + a*-0.2)

        if(Math.abs(a) >=10 ){
            timer = requestAnimationFrame(animation_set)
        }else{
            cancelAnimationFrame(timer)
            if(fn){fn()}
        }          
    })
}

let jump_to = (dr)=>{
    window.scroll(0,dr)

    console.log("dr:",dr)
}

export{
    scrollto
}
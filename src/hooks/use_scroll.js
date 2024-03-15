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


let smooth_to = (dr, fn) => {
    const store = useStore();
    var animation_time = 300

    let timerCompleted = false; // 倒计时完成状态
    let animationCompleted = false; // 动画完成状态

    console.log("chaeck",timerCompleted , animationCompleted)

    // 检查并执行fn函数
    const checkAndExecuteFn = () => {
        if (timerCompleted && animationCompleted) {
            if (fn) fn();
        }else{
            console.log(timerCompleted , animationCompleted)
        }
    };

    // 设置一个300毫秒的倒计时
    setTimeout(() => {
        timerCompleted = true;
        checkAndExecuteFn(); // 检查是否都完成了，如果是，则执行fn
    }, animation_time);

    let requestAnimationFrameId = requestAnimationFrame(function animation_set() {
        var a = store.scroll_position - dr;
        window.scroll(0, store.scroll_position + a * -0.2);

        if (Math.abs(a) >= 10) {
            requestAnimationFrameId = requestAnimationFrame(animation_set);
        } else {
            window.scroll(0, dr);
            cancelAnimationFrame(requestAnimationFrameId);
            animationCompleted = true; // 标记动画完成
            checkAndExecuteFn(); // 再次检查是否都完成了，如果是，则执行fn
        }
    });
};

let jump_to = (dr)=>{

    window.scroll(0,dr)
}

export{
    scrollto
}
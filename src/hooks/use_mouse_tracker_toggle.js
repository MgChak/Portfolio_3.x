import useStore from '../store/index.js'


let tracker_toggle = (val)=>{
    const store = useStore()
    store.tracker_status = val
    
}


export {
    tracker_toggle,


}
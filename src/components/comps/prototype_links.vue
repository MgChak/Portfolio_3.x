<template>
    
        <div class="proto_link_container">
            <h2 :style="{color:prototype_links.color}">{{ prototype_links.text }}</h2>
            <div class="buttons_container">
                <div class="v_button button" @click="handle_click(1)" :style="{background:prototype_links.color,'border-color':prototype_links.color}">
                    <h3>Video Prototype</h3>
                    <div class="arrow_container">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9675 7.05293C12.2826 6.73785 12.2826 6.227 11.9675 5.91192L6.83296 0.777356C6.51788 0.462274 6.00703 0.462274 5.69195 0.777356C5.37687 1.09244 5.37687 1.60329 5.69195 1.91837L10.256 6.48242L5.69195 11.0465C5.37687 11.3616 5.37687 11.8724 5.69195 12.1875C6.00703 12.5026 6.51788 12.5026 6.83296 12.1875L11.9675 7.05293ZM0.101562 7.28924H11.397V5.6756H0.101562V7.28924Z" :fill="prototype_links.color"/>
                        </svg>
                    </div>
                </div>
                <div class="v_button button" @click="handle_click(2)" :style="{background:'black','border-color':prototype_links.color}">
                    <h3 :style="{color:prototype_links.color}">Figma Prototype</h3>
                    <div class="arrow_container" :style="{background:prototype_links.color}">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9675 7.05293C12.2826 6.73785 12.2826 6.227 11.9675 5.91192L6.83296 0.777356C6.51788 0.462274 6.00703 0.462274 5.69195 0.777356C5.37687 1.09244 5.37687 1.60329 5.69195 1.91837L10.256 6.48242L5.69195 11.0465C5.37687 11.3616 5.37687 11.8724 5.69195 12.1875C6.00703 12.5026 6.51788 12.5026 6.83296 12.1875L11.9675 7.05293ZM0.101562 7.28924H11.397V5.6756H0.101562V7.28924Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

</template>

<script setup>

    let props = defineProps(['prototype_links'])

    let handle_click = (id)=>{
        if(id == 1){
            window.open(props.prototype_links.v_link)
        }else if(id == 2){
            window.open(props.prototype_links.f_link)
        }
    }

</script>

<style scoped>
.proto_link_container{
    display:flex;
    flex-direction: column;
    gap:16px;
}
.buttons_container{
    display: flex;
    gap:24px;
   
}
.button{
    background:gray;
    display: flex;
    align-items: center;
    gap:16px;
    padding:8px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid;
}
h3{
   font-size:20px;
    margin-left:24px;
    font-weight: 400;
} 
h2{
    font-size:20px;
    font-weight: 400;
} 
.arrow_container{
    width:50px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:black;
    border-radius: 25px;
    
}

</style>
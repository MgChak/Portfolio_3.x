<template>
<div class="container">

    <div class="inner_container">

        <img src="../assets/logo/logo.svg" alt="" class="web_logo">

        <div class="nav_list_container">

            <div class="nav_container" v-for="n in nav_list" :key="n.id">

                <div class="dot_container"><div class="dot"></div></div>

                <h1 class="nav_text">{{n.text}}</h1>

            </div>   

        </div> 

    </div>   

</div>

   

</template>

<script setup>

    const nav_list = [
        {id:0,text:'Works',navto:'1'},
        {id:0,text:'Playground',navto:'1'},
        {id:0,text:'About',navto:'1'},
        {id:0,text:'Resume',navto:'1'},
    ]




</script>

<style scoped>
.container{
    background:rgb(87, 87, 87);
    width: 100%;
    height:64px;

    display:flex;
    justify-content: center;
    align-items: center;
    
}
.inner_container{
    width:var(--content-width);
    height:100%;

    display:flex;
    justify-content: space-between;
    align-items: center;
    
}
.nav_list_container{
    width:fit-content;
    height:fit-content;

    display:flex;
    justify-content: center;
    align-items: center;
    gap:24px;
}
.nav_container{
    width:fit-content;
    height:fit-content;

    display:flex;
    justify-content: center;
    align-items: center;
    gap:4px;
}

.dot_container{
    width:12px;
    height:12px;

    overflow:hidden;

    position:relative;
    left:0;
    top:0;
}

.dot{
    width:8px;
    height:8px;
    background: var(--main-light-100);
    border-radius: 8px;

    position:absolute;
    bottom:0;
    right:0;
    left:0;
    margin: 0 auto;
}

h1{
    color:var(--main-light-30);
    font-size:12px;
    font-weight: 400;
}

</style>
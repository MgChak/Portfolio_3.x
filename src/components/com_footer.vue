<template>

   <div class="com_footer_main_container">
        <div style="width:100%" class="breakline"></div>
        <div class="footer_content_container">
            <div class="contact_container">
                <h3 class="linkout" @click="handle_linkout(1)">LINKEDIN</h3>
                <h3 class="linkout" @click="handle_linkout(2)">INSTAGRAM</h3>
                <h3>562-832-5022</h3>
                <h3>chakshinglam@gmail.com</h3>
            </div>
            <div style="width:100%; opacity: 0.2; " class="breakline hideline"></div>
            <div class="logo_container">
                <img src="../assets/chak_name.svg" alt="">
                <h1>CHAKSHING LAM</h1>
                <h2>UX / UI & PRODUCT DESIGNER</h2>
            </div>
        </div>
        <div style="width:85%;max-width: 1000px; opacity: 0.2; " class="breakline"></div>
        <h3>&#169 2020-2024 Chakshing Lam.</h3>
   </div>
    
</template>

<script setup>
    let links = ["https://www.linkedin.com/in/chakshing-lam/","https://www.instagram.com/chakshinglam/"]
    let handle_linkout = (val)=>{
        var tar = ''
        if(val==1){
            tar = links[0]
        }else{
            tar = links[1]
        }
        window.open(tar)
    }

</script>

<style scoped>
.hideline{
        display: none;
    }
.com_footer_main_container{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    gap:40px;
    background-color: rgb(0, 0, 0);
    z-index: 15;
}
.breakline{
    height:1px;
    background-color: white;
    opacity: 0.5;
    flex:none;
}
.footer_content_container{
    width:85%;
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo_container{
    display: flex;
    flex-direction: column;
    gap:-10px;
    align-items:flex-end;
}
.contact_container{
    display: flex;
    flex-direction: column;
    gap:8px;
}
img{
    width: 150px;
}
.linkout{
    text-decoration: underline;
    cursor: pointer;
}
.linkout::after{
    content: ' ';
    display: inline-block;
    width:18px;
    height:18px;
    background-image: url('../assets/icons/arrow_circle_right_w.svg');
    background-size: cover;
    position: relative;
    left:4px;
    top:2px;
}
h1{
    margin-top: 20px;
    color:white;
    font-weight: 600;
    opacity: 0.6;
    font-size: 15px;
    line-height: 15px;
}
h2{
    color:white;
    font-weight: 400;
    font-size: 15px;
    opacity: 0.6;
    line-height: 15px;
   
}
h3{
    color:white;
    font-weight: 200;
}
@media (max-width: 750px) {
 
    .footer_content_container{
        flex-direction: column-reverse;
        gap:20px;
    }
    .logo_container{
        align-items: start;
        width: 100%;
    }
    .contact_container{
        width:100%;
    }
        

    
}

</style>
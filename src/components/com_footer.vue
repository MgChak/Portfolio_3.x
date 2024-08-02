<template>

   <div class="com_footer_main_container">
        <div style="width:100%" class="breakline2"></div>
        <div class="footer_content_container">
            <div class="contact_container">
                <div class="line_con icon1">
                    <h3 class="linkout icon" @click="handle_linkout(1)">LinkedIn</h3>
                    <h3 class="linkout icon" @click="handle_linkout(2)">Instagram</h3>
                </div>
                <div class="line_con icon2">
                    <h3 class=" icon">562-832-5022</h3>
                    <h3 class=" icon">chakshinglam@gmail.com</h3>
                </div>
            </div>
            <div style="width:100%; opacity: 0.2; " class="breakline hideline"></div>
            <div class="logo_container">
                <img src="../assets/chak_name.svg" alt="">
                <!-- <h1>CHAKSHING LAM</h1>
                <h2>UX / UI & PRODUCT DESIGNER</h2> -->
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
    background-color: rgb(18, 18, 19);
    z-index: 15;
}
.breakline2{
    height:1px;
    opacity: 0.5;
    flex:none;
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
    gap:24px;
}
img{
    width: 150px;
}
.linkout{
    text-decoration: none;
    cursor: pointer;
}

.line_con{
    display:flex;
    gap:24px;
}
.icon::before{
    content: ' ';
    display: inline-block;
    width:20px;
    height:20px;
    background-size: cover;
    position: relative;
    top:2px;
    margin-right: 16px;
}
    .icon1>.icon:nth-child(1)::before{
        background-image: url('../assets/logo/link.svg');
    }
    .icon1>.icon:nth-child(2)::before{
        background-image: url('../assets/logo/ins.svg');
    }
    .icon2>.icon:nth-child(1)::before{
        background-image: url('../assets/logo/call.svg');
    }
    .icon2>.icon:nth-child(2)::before{
        background-image: url('../assets/logo/mail.svg');
        width:18px;
        height:15px;
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
    color:rgba(255, 255, 255, 0.7);
    font-weight: 200;
    font-size: 17px;
    
}
.icon{
    width:180px;
}
.icon2>.icon:nth-child(2){
    width:250px;
}
@media (max-width: 750px) {
 
    .footer_content_container{
        flex-direction: column-reverse;
        gap:32px;
    }
    .logo_container{
        align-items: start;
        width: 100%;
    }
    .contact_container{
        width:100%;
    }
    .line_con{
        flex-direction: column;
    }
        

    
}

</style>
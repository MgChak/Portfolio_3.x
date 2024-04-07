<template>
                      
    <div class="code_container" >
    
        <div class="code_box">
            <h3> &lt;  Explore my website code on <a target="_blank" href="https://github.com/MgChak/Portfolio_3.x"> GitHub </a>. &gt; </h3>
        </div>

    </div>
    
</template>

<script setup>

</script>

<style scoped>

.code_container{    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:relative;
    width:100vw;

}
.code_box{
    width:var(--content-width);
    max-width:var(--max-content-width);
    margin:80px 0px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

}

h3{
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
    line-height: 30px;
    color:rgba(255, 255, 255, 0.466);
    text-align: center;
}
a{
    text-decoration: underline;
    cursor: pointer;
    color:inherit;
}
a:hover{
    color:#FFD600;
}

/* span{
    display: inline-block;
    width:30px;
    height:30px;
    background-size: 100%;
    background-image: url(../../../assets/thum_cards/computer.png);
} */

@media (max-width: 1300px){

    .code_box{

    margin:50px 0px;
}
}
@media (max-width: 800px){
    h3{
        font-size: 15px;
        font-weight: 300;
    }
    .code_box{
    margin:40px 0px;
}
}
</style>
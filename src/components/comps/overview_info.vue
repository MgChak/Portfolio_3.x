<template>

    <div class="blocks_container">
        <div class="block">
            <img src="../../assets/icons/design_services.svg" alt="">
            <h3>{{ ov_data.type }}</h3>
        </div>
        <div class="block">
            <img src="../../assets/icons/assignment_ind.svg" alt="">
            <h3>{{ ov_data.roll }}</h3>
        </div>
        <div class="block">
            <img src="../../assets/icons/tactic.svg" alt="">
            <h3>{{ ov_data.apps }}</h3>
        </div>
        <!-- <div class="block">
            <img src="../../assets/icons/tactic.svg" alt="">
            <h3>{{ ov_data.detail }}</h3>
        </div> -->
    </div>
 
</template>
<script setup>


    //数据接收//引入props
    let props = defineProps(['ov_data'])
    
    
</script>
<style scoped>
.blocks_container{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:24px;
    flex-wrap:wrap;
}
.block{
    display: flex;
    gap:8px;
    align-items: flex-start;
}
img{
    width:20px;
    opacity: 0.6;
    margin-top: 5px;
}
h3{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    color:var(--p-color-font-white-60);
}


</style>
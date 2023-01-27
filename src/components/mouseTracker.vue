<template>

<div class="mouse_tracker_container" :style="tracker_position">

</div>
    
</template>

<script setup>

    let tracker_position = {
        left:'250px',
        top:'250px'
    }

</script>

<style scoped>
.mouse_tracker_container{
    width:100px;
    height:100px;
    background:rgb(117, 133, 225);

    position:absolute;
}
</style>
    
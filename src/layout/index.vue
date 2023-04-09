<script setup lang="ts">
import { RouterView } from 'vue-router';
import navbox from "@/layout/components/header.vue"
import switchbg from "@/layout/components/changeBg.vue"

</script>
<template>
    <navbox class="top"></navbox>
    <switchbg class="switchbg"></switchbg>
    <div class="body">
        <RouterView />
    </div>
</template>
<style scoped>
.top {
    position: absolute;
    top: 10px;
    left: 4px;
}

.switchbg {
    position: absolute;
    top: 10px;
    right: 4px;
    z-index: 999;
}

.body {
    margin-top: 100px;
}
</style>
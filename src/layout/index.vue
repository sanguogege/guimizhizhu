<script setup lang="ts">
import { RouterView } from 'vue-router';
import nav from "@/layout/components/nav.vue"

</script>
<template>
    <div class="top">
        <nav></nav>
    </div>
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

.body {
    margin-top: 100px;
}
</style>
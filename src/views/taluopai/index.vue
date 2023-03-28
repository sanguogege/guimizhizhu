<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    const line = gsap.timeline();
    line.from(".card ", { duration: 3, ease: "power2", display: "block", y: -1700 })
    line.to(".card ", { duration: 3, ease: "power2", x: 300, y: 500 })
})
</script>
<template>
    <div class="card">
        这是一个卡片
    </div>
</template>
<style scoped>
.card {
    display: block;
    width: 100px;
    height: 200px;
    background-color: beige;
}
</style>
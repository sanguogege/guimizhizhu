<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import pai from "@/assets/data/taluopai"

const myRef = ref();

const RandomZf = () => {
    const random = Math.random();
    const XY = (random + 1) * 4000;
    return random > 0.5 ? XY : -XY;
}

const RandomDuration = () => {
    return (Math.random() + 1) * 2
}

onMounted(() => {

    const box = myRef.value;
    box.forEach((e: any) => {
        const line = gsap.timeline();
        line.from("." + e.classList[0] + "." + e.classList[1], { duration: RandomDuration(), ease: "power2", x: RandomZf(), y: RandomZf() })
    })
})
</script>
<template>
    <div class="taluopai">
        <div ref="myRef" :class="'pai pai' + index" v-for="(item, index) in pai.taluopai" :key="index">{{ item.name }}</div>
    </div>
</template>
<style scoped>
.taluopai {
    display: grid;
    grid-template-columns: 16% 16% 16% 16% 16% 16%;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    padding: 0 20px;
    margin: auto;
}

.taluopai .pai {
    display: block;
    text-align: center;
    line-height: 320px;
    background-color: aliceblue;
}
</style>
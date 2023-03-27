<script setup lang="ts">

import gsap from 'gsap';

import calendar from "yz-calendar";
import { onMounted, onUpdated } from "vue";
// console.log(calendar.solar2lunar(2021, 3, 21));

import { useRouter } from "vue-router";


import Table from "@/components/home/table";

const router = useRouter();



onMounted(() => {
    setTimeout(() => {
        const line = gsap.timeline();
        line.from(".thistable ", { duration: 2, opacity: 0, ease: "power2", display: "block", y: -1700 })
        line.to(".thistable ", { duration: 2, opacity: 1, display: "block", y: 0 })
    }, 300)
})

</script>

<template>
    <Table class="thistable"></Table>
</template>
<style scoped>
.thistable {
    display: none;
    transform: translateY(-1700);
}
</style>

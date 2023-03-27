<script setup lang="ts">

import gsap from 'gsap';

import calendar from "yz-calendar";
import { onMounted } from "vue";
// console.log(calendar.solar2lunar(2021, 3, 21));

import { useRouter } from "vue-router";


import Button from "@/components/home/table";

const router = useRouter();




// onMounted(() => {
//     const line = gsap.timeline();
//     line.from(".table ", { duration: 4, ease: "power2", opacity: 0, y: -1600 })
// })

</script>

<template>
    <Button class="table"></Button>
</template>

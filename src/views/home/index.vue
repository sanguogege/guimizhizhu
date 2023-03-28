<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from "vue";
// console.log(calendar.solar2lunar(2021, 3, 21));

import Table from "@/components/home/table";

// onMounted(() => {
//     const line = gsap.timeline();
//     line.from(".tablebox ", { duration: 3, opacity: 0, ease: "power2", display: "block", y: -1700 })
// })

</script>

<template>
    <div class="tablebox">
        <Table class="thistable"></Table>
    </div>
</template>
<style scoped>
.tablebox {
    overflow: hidden;
}

.thistable {
    margin-top: 100px;
}
</style>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from "vue";
import { createStartBg } from '@/utils/canvas/stars';
import Table from "@/components/home/table";

import canvasBgFun from '@/utils/watchcanvas';


canvasBgFun(createStartBg)

onMounted(() => {
    const line = gsap.timeline();
    line.from(".tablebox ", { duration: 3, opacity: 0, ease: "power2", display: "block", y: -1700 })
})
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

.aa {
    color: #fff;
}
</style>

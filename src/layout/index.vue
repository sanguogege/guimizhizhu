<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { sideRouter } from "@/router/index"
import gsap from 'gsap';
import { onMounted } from 'vue';



onMounted(() => {
    const line = gsap.timeline();
    line.from(".head ", { duration: 5, opacity: 0, ease: "power2", display: "flex", x: -600 })
})


</script>
<template>
    <div class="head">
        <div class="head_logo">
            <img class="img" src="@/assets/img/logo.png" alt="">
        </div>
        <transition>
            <div class="head_link">
                <RouterLink v-for="item in sideRouter" :to="item.path">{{ item.meta.name }}</RouterLink>
            </div>
        </transition>
    </div>
    <!-- <button @click.once="update()">更新数据库</button> -->
    <div class="body">
        <RouterView />
    </div>
</template>
<style scoped>
.head {
    position: absolute;
    top: 10px;
    left: 4px;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 100px;
    overflow: hidden;
    height: 60px;
    z-index: 99;
}

.head_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    background-color: #0ef8f8;
    overflow: hidden;
}

.head:hover .head_logo .img {
    transform: rotate(180deg);
}

.head_logo .img {
    width: 40px;
    height: 40px;
    transition: transform 1s ease-in-out;
}

.head_link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 0;
    overflow: hidden;
    background-image: linear-gradient(to right, #0ef8f8, #02a3a3);
    transition: all 1s ease-in-out;
}

.head:hover .head_link {
    width: 530px;
}

.head_link a {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    height: var(--head-width);
    padding: 0 10px;
}

.head_link a:last-child {
    padding-right: 40px;
}

.body {
    margin-top: 80px;
}
</style>
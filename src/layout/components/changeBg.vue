<script setup lang="ts">
import { UserGlobalStore } from '@/stores/UserGlobalStore';

const user = UserGlobalStore();

function switchPage(type: string) {
    const now = user.pagetype;
    if (now.value !== type) {
        now.value = type
    }
}


</script>
<template>
    <div class="box">
        <span class="boxtitle">切换背景</span>
        <div class="boxcnt">
            <span @click="switchPage('best')">性能模式</span>
            <span @click="switchPage('normal')">普通模式</span>
            <span @click="switchPage('canvas')">观赏模式</span>
        </div>
    </div>
</template>
<style scoped>
.box {
    display: block;
    width: 100px;
}

.boxtitle {
    display: block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
}

.boxcnt {
    height: 0;
    overflow: hidden;
    transition: all 1.3s;
}

.boxcnt span {
    display: block;
    width: 80px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    cursor: pointer;
    margin-top: 2px;
}

.boxcnt span:hover {
    color: #fff;
    background-color: blueviolet;
}

.box:hover .boxcnt {
    height: 96px;
}
</style>
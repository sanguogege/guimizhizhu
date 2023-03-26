<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { creatDataBase, useDataBase } from "@/utils/webDb";
const database: any = useDataBase();


const update = async () => {
    await database.remove();
    creatDataBase()
    setTimeout(function () {
        location.reload()
    }, 2000)
}

</script>
<template>
    <div class="head">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/yuan">源质</RouterLink>
        <RouterLink to="/org">组织</RouterLink>
        <RouterLink to="/sequence">序列</RouterLink>
    </div>
    <el-button type="primary" @click.once="update()">更新数据库</el-button>
    <div>
        <RouterView />
    </div>
</template>
<style scoped>
.head {
    display: block;
    width: 100%;
    height: 80px;
    background-color: antiquewhite;
}
</style>
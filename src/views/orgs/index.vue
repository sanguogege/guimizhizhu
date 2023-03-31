<script setup lang="ts">
import { switchArray } from "@/utils/checkdata";
import { useDataBase } from "@/utils/webDb";
const database: any = useDataBase();
const res = await database.orgs.find().exec();


const orgs = switchArray(res);
console.log(orgs);

</script>
<template>
    <div class="orgs">
        <div class="org" v-for="item in orgs">
            <div class="org_title">{{ item.type }}</div>
            <div class="org_cnt">
                <div class="org_name">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.orgs {
    display: block;
}
</style>
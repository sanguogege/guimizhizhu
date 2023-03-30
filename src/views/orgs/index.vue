<script setup lang="ts">
import { switchArray } from "@/utils/checkdata";
import { useDataBase } from "@/utils/webDb";
const database: any = useDataBase();
const orgsDocument = await database.collections.orgs;


const res = await orgsDocument.findOne({
    selector: {
        name: '黑夜教会'
    }
}).exec();
console.log(res.toMutableJSON());
// const orgs = switchArray(orgsDocument);

</script>
<template>
    <!-- <div class="orgs">
                                                                                    <div class="org" v-for="item in orgs">
                                                                                        {{ item.name }}
                                                                                    </div>
                                                                                </div> -->
</template>
<style scoped></style>
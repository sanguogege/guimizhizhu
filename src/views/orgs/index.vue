<script setup lang="ts">
import { switchArray } from "@/utils/checkdata";
import { useDataBase } from "@/utils/webDb";
const database: any = useDataBase();
const res = await database.orgs.find().exec();


const orgs = switchArray(res);
console.log(orgs);

</script>
<template>
    <!-- <div class="orgs">
                                                                                                                        <div class="org" v-for="item in orgs">
                                                                                                                            {{ item.name }}
                                                                                                                        </div>
                                                                                                                    </div> -->
</template>
<style scoped></style>
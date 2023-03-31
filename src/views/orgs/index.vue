<script setup lang="ts">
import { switchArray } from "@/utils/checkdata";
import { useDataBase } from "@/utils/webDb";
const database: any = useDataBase();
const res = await database.orgs.find().exec();


const orgs = switchArray(res);

const dataOrgs: any = Object.values(orgs.reduce((pre: any, e: any) => {
    if (!pre[e.type]) {
        pre[e.type] = {
            type: e.type,
            names: [e.name]
        }
    } else {
        pre[e.type].names.push(e.name)
    }
    return pre
}, {}))

</script>
<template>
    <div class="orgs">
        <div class="org" v-for="item in dataOrgs">
            <div class="org_title">{{ item.type }}</div>
            <div class="org_cnt">
                <div class="org_name" v-for="el in item.names">{{ el }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.orgs {
    display: block;
    width: 1600px;
    margin: auto;
}

.org {
    display: block;
    display: 1200px;
    margin: auto;
}

.org_title {
    height: 40px;
    background-color: aliceblue;
}

.org_cnt {
    display: flex;

}

.org_name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: aqua;
}
</style>
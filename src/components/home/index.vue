<script setup lang="ts">

const props = defineProps(['data', 'org', "taluopai", "role", "yuan"])

let showvalue: any;
let tourl: any;
let isSingle: boolean

if (!!props['data']) {
    showvalue = props['data'].name
    tourl = "/sequence/" + props['data'].type + "/" + props['data'].name
    isSingle = true
} else if (!!props['org']) {
    const back = changeRouter(props['org'])
    isSingle = back.isSingle
    if (back.isSingle) {
        showvalue = back.router
        tourl = "/orgs/" + back.router;
    } else {
        showvalue = back.router
        const other: any = addString(showvalue.join("/"))
        tourl = ["/orgs/" + other[0], "/orgs/" + other[1]]
    }
} else if (!!props['taluopai']) {
    showvalue = props['taluopai']
    tourl = "/taluopai/" + props['taluopai']
    isSingle = true
} else if (!!props['role']) {
    const back = changeRouter(props['role'])
    isSingle = back.isSingle
    if (back.isSingle) {
        showvalue = back.router
        tourl = "/role/" + back.router;
    } else {
        showvalue = back.router
        tourl = ["/role/" + back.router[0], "/role/" + back.router[1]]
    }
} else if (!!props['yuan']) {
    if (typeof (props['yuan']) == "string") {
        showvalue = props['yuan']
        tourl = "/yuan/" + props['yuan']
    } else {
        showvalue = props['yuan'].title
        tourl = "/yuan/" + props['yuan'].name
    }
    isSingle = true
} else {
    showvalue = "一"
    tourl = "/orgs"
    isSingle = true
}


function changeRouter(router: string) {
    if (router.indexOf("/") != -1) {
        return {
            router: router.split("/"),
            isSingle: false
        }
    } else {
        return {
            router: router,
            isSingle: true
        }
    }
}

function addString(name: string) {
    const nameArray: Array<string> = ["皇室", "家族"];
    for (let key = 0; key < nameArray.length; key++) {
        if (name.indexOf(nameArray[key]) != -1) {
            const mewname = name.split("/");
            mewname[0] = mewname[0] + nameArray[key]
            return mewname
        } else if (key == nameArray.length - 1) {
            return name.split("/");
        }
    }
};

</script>
<template>
    <template v-if="isSingle">
        <router-link class="" :to="tourl"> {{ showvalue }}</router-link>
    </template>
    <template v-else>
        <router-link class="" :to="tourl[0]"> {{ showvalue[0] }}</router-link>/
        <router-link class="" :to="tourl[1]"> {{ showvalue[1] }}</router-link>
    </template>
</template>
<style scoped>
.aaa:hover {
    background-color: aqua;
}
</style>
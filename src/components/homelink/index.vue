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
    showvalue = back
    tourl = ["/orgs/" + back[0], "/orgs/" + back[1]]
} else if (!!props['taluopai']) {
    showvalue = props['taluopai']
    tourl = "/taluopai/" + props['taluopai']
    isSingle = true
} else if (!!props['role']) {
    const back = changeRouter(props['role'])
    showvalue = back
    tourl = ["/role/" + back[0], "/role/" + back[1]]
} else {
    console.log(typeof (props['yuan']) == "string");
    showvalue = props['yuan']
    tourl = "/yuan/" + props['yuan']
    isSingle = true
}


function changeRouter(router: string) {
    if (router.indexOf("/") != -1) {
        isSingle = false
        return router.split("/")
    } else {
        isSingle = true
        return router
    }
}

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
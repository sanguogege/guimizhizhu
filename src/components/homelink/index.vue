<script setup lang="ts">
const props = defineProps(['data'])
console.log(props['data']);
</script>
<template>
    <div class="aaa">
        111
    </div>
</template>
<style scoped>
.aaa {
    padding: 4px;
}

.aaa:hover {
    background-color: aqua;
}
</style>
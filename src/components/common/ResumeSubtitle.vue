<script setup lang="ts">
    const props = defineProps<{ name: string; }>();
</script>

<template>
    <div class="tooltip">{{ props.name }}</div>
</template>

<style scoped>
.tooltip {
    color: #007B86;
    background: #F0F9F9;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    padding: 3px 20px;
    border-left: 3px solid #007B86;
    margin-top: 40px;
    margin-bottom: 10px;
}
</style>

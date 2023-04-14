<script setup lang="ts">
    import {useProps} from "@/utils";
    import Title from "./common/ResumeSubtitle.vue";

    const props = defineProps<{ certs: string[] }>();
    const certs = useProps(props, (p) => p.certs);
</script>

<template>
    <Title name="资质证书" />
    <template v-for="cert, index in certs" :key="index">
        <p>{{ cert }}</p>
    </template>
</template>

<style scoped>
</style>

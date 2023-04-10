<script setup lang="ts">
    import { ref } from 'vue';
    import ResumeSubtitle from './common/ResumeSubtitle.vue';
    import MultiContent from './common/MultiContent.vue';
    const props = defineProps<{ advantage: string; }>();
    const advantage = ref(props.advantage);
</script>

<template>
    <ResumeSubtitle name="个人优势" />
    <MultiContent :content="advantage" />
</template>

<style scoped>
</style>

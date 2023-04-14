<script setup lang="ts">
    import Title from "./common/ResumeSubtitle.vue";
    import type { OpenSourceHistory } from "../types/config.type";
    import Content from "./common/MultiContent.vue";
    import {useProps} from "@/utils";
    import TwoColumn from "./common/TwoColumn.vue";
    import Gap from "./common/SpGap.vue";
    const props = defineProps<{ opensource: OpenSourceHistory[] }>();
    const projects = useProps(props, (p) => p.opensource);
</script>

<template>
    <Title name="开源项目" />
    <template v-for="project,index in projects" :key="index">
        <TwoColumn>
            <template v-slot:left>
                {{ project.name }}<Gap/><span style="color:#777; font-size: 14px;">{{ project.link }}</span>
            </template>
        </TwoColumn>
        <template v-if="project.description">
            <p class="desc-tip">描述</p>
            <Content :content="project.description" />
        </template>
        <template v-if="project.contribution">
            <p class="desc-tip">贡献</p>
            <Content :content="project.contribution" />
        </template>
        <div v-if="projects.length !== index" style="margin-top: 10px;"></div>
    </template>
</template>

<style scoped>
.desc-tip {
    font-weight: bold;
    font-size: 15px;
    margin-top: 5px;
}
</style>

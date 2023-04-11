<script setup lang="ts">
    import ResumeSubtitle from "./common/ResumeSubtitle.vue";
    import type { ProjectHistory } from "../types/config.type";
    import TwoColumn from "./common/TwoColumn.vue";
    import Gap from "./common/SpGap.vue";
    import MultiContent from "./common/MultiContent.vue";
    import {useProps} from "@/utils";

    const props = defineProps<{ projects: ProjectHistory[] }>();
    const projects = useProps(props, () => props.projects);
</script>

<template>
    <ResumeSubtitle name="项目经历" />
    <template v-for="project, index in projects" :key="index">
        <TwoColumn>
            <template v-slot:left>
                {{ project.projectName }}<Gap/>{{ project.job }}<Gap/><span style="font-size: 16px; color: #777; font-weight: normal;">{{ project.company }}</span>
            </template>
            <template v-slot:right>
                {{ project.startAt }}-{{ project.endAt || "至今" }}
            </template>
        </TwoColumn>
        <div class="desc-tip">内容：</div>
        <MultiContent :content="project.content" />
        <div class="desc-tip">业绩：</div>
        <MultiContent :content="project.achievement" />
        <div v-if="index !== projects.length - 1" style="margin-top: 10px;"></div>
    </template>
</template>

<style scoped>
.desc-tip {
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
}
</style>

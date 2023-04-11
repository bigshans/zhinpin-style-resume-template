<script setup lang="ts">
    import ResumeSubtitle from "./common/ResumeSubtitle.vue";
    import MultiContent from "./common/MultiContent.vue";
    import TwoColumn from "./common/TwoColumn.vue";
    import Gap from "./common/SpGap.vue";
    import type { EducationHistory } from "../types/config.type";
    import {useProps} from "@/utils";

    const props = defineProps<{ education: EducationHistory[] }>();
    const edus = useProps(props, (props) => props.education);
</script>

<template>
    <ResumeSubtitle name="教育经历" />
    <template v-for="edu, index in edus" :key="index">
        <TwoColumn>
            <template v-slot:left>
                {{ edu.school }}<Gap/>{{ edu.level }}<Gap/>{{ edu.major }}
            </template>
            <template v-slot:right>
                {{ edu.startAt }}-{{ edu.endAt || "至今" }}
            </template>
        </TwoColumn>
        <div style="margin-top: 10px;">
            <MultiContent :content="edu.adward" />
        </div>
        <div v-if="index !== edus.length - 1" style="margin-top: 10px;"></div>
    </template>
</template>

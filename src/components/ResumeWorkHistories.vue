<script setup lang="ts">
    import {ref} from 'vue';
    import ResumeSubtitle from './common/ResumeSubtitle.vue';
    import MultiContent from './common/MultiContent.vue';
    import TwoColumn from './common/TwoColumn.vue';
    import Gap from './common/SpGap.vue';
    import type { WorkHistory } from '../types/config.type';

    const props = defineProps<{ history: WorkHistory[]; }>();
    const histories = ref(props.history);
</script>

<template>
    <ResumeSubtitle name="工作经历" />
    <template v-for="history,index in histories" :key="index">
        <div class="job">
            <TwoColumn>
                <template v-slot:left>
                    {{ history.company }}<Gap/>{{ history.job }}
                </template>
                <template v-slot:right>
                    {{ history.workStart }}-{{history.workEnd || "至今"}}
                </template>
            </TwoColumn>
        </div>
        <div class="subtitle">内容：</div>
        <MultiContent :content="history.content" />
        <div class="subtitle">业绩：</div>
        <MultiContent :content="history.achievement" />
        <div class="gap"></div>
    </template>
</template>

<style scoped>
.subtitle {
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
}
.gap ~ .job {
    margin-top: 10px;
}
</style>

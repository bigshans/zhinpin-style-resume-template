<script setup lang="ts">
    import { resume } from "./config";
    import ResumeHeader from "./components/ResumeHeader.vue";
    import ResumePersonalAdvantage from "./components/ResumePersonalAdvantage.vue";
    import ResumeWorkHistories from "./components/ResumeWorkHistories.vue";
    import ResumeProjectHistories from "./components/ResumeProjectHistories.vue";
    import ResumeOpenSource from "./components/ResumeOpenSource.vue";
    import ResumeEducation from "./components/ResumeEducation.vue";
    import ResumeCertifications from "./components/ResumeCertifications.vue";
</script>

<template>
    <div class="wrapper">
        <ResumeHeader :props="resume" />
        <ResumePersonalAdvantage :advantage="resume.advantaged" />
        <ResumeWorkHistories :history="resume.workHistories" />
        <ResumeProjectHistories :projects="resume.projectHistories" />
        <ResumeOpenSource v-if="resume.opensourceHistories" :opensource="resume.opensourceHistories" />
        <ResumeEducation :education="resume.educationHistories" />
        <ResumeCertifications v-if="resume.certifications" :certs="resume.certifications" />
    </div>
</template>

<style scoped>
.wrapper {
    padding: 10% 5%;
}
</style>

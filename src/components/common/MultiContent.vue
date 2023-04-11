<script setup lang="ts">
    import {useProps} from '@/utils';

    const props = defineProps<{ content: string; }>();
    const lines = useProps(props, (props) => parse(props.content));

    function parse(content: string) {
        return content.split('\n')
        .map((l) => parseLine(l));
    }

    function parseLine(line: string) {
        return line
               // 粗体标签支持
               .replace(/\*{2}(.*?)\*{2}/g, (match) => match.replace("**", "<b>")
                                                                .replace("**", "</b>"))
               // 斜体标签支持
               .replace(/\*(.*?)\*/g, (match) => match.replace("*", "<i>"))
                                                      .replace("*", "</i>");
    }
</script>

<template>
    <p v-for="line,index in lines" :key="index" v-html="line"></p>
</template>

<style>
b {
    font-weight: bolder;
}
</style>

<script setup lang="ts">
    import {useProps} from '@/utils';
    import type {HeaderProps} from '../types/header.type';
    const props = defineProps<{ props: HeaderProps }>();
    const info = useProps(props, (props) => props.props);
    function getWorkExperience() {
        const start = new Date(info.value.workStart);
        const lastDay = info.value.lastDay && new Date(info.value.lastDay) || new Date();
        return Math.ceil((lastDay.getTime() - start.getTime()) / 31536000000);
    }
    function getAge()
    {
        const birthday = info.value.birth;
        //出生时间 毫秒
        var birthDayTime = new Date(birthday).getTime(); 
        //当前时间 毫秒
        var nowTime = new Date().getTime(); 
        //一年毫秒数(365 * 86400000 = 31536000000)
        return Math.floor((nowTime - birthDayTime) / 31536000000);
    }
</script>

<template>
    <div id="header">
        <div class="name">{{info.name}}</div>
        <p class="work-intent">
            {{info.gender}} | 年龄：{{getAge()}} | 电话：{{info.phone}} {{ info.wechat ? `|${info.wechat}` : '' }}
            <br>
            {{getWorkExperience()}} 年工作经验 | 求职意向：{{info.workFor}} | 期望城市：{{info.workBase}}
        </p>
    </div>
</template>

<style scoped>
#header {
    text-align: center;
    line-height: 1.5;
}
.name {
    font-weight: bold;
    font-size: 35px;
}
.work-intent {
    margin-top: 10px;
}
</style>

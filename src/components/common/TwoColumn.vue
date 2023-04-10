<template>
    <div class="row">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
}
.left {
    font-weight: bold;
    font-size: 18px;
    line-height: 1em;
}
.right {
    font-size: 14px;
}
</style>

<template>
    <div class="textBox full flex column  justifyCenter gap20 pad20">
        <h2 class="textBoxTitle" v-html="content.title"></h2>
        <div class="scratchBox">
            <DecorScratch />
        </div>
        <h3 class="textBoxSubtitle" v-html="content.subtitle"></h3>
        <p class="textBoxText" v-html="content.text"></p>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object
})
</script>

<style scoped>
.scratchBox {
    width: 50%;
}
.textBox:deep(.initial) {
   color: var(--brand-sec);
}
.textBox:deep(.highlighted) {
    color: var(--brand-main);
    font-weight:700;
}
.textBoxTitle {
    font-family: var(--cursive-font);
    font-size: 32px;
    color: var(--brand-sec);
}
.textBoxSubtitle {
    font-size: 26px;
}
.textBoxText {
    line-height: 24px;
    letter-spacing: 0.75px;
    }
</style>
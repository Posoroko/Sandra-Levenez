<template>
    <div class="textBox full flex column  justifyCenter gap50 pad20">
        <div class="flex column gap10">
            <h2 class="bodyTitle" v-html="content.title"></h2>
            <div class="scratchBox">
                <DecorScratch />
            </div>
        </div>
        <h3 class="bodySubtitle" v-html="content.subtitle"></h3>
        <p class="bodyText1" v-html="content.text"></p>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object
})
</script>

<style scoped>

.textBox:deep(.initial) {
   color: var(--brand-sec);
}
.textBox:deep(.highlighted) {
    color: var(--brand-main);
    font-weight:700;
}


</style>
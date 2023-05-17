<template>
    <div class="textBox full flex column justifyCenter gap30 pad20">
        <div class="flex column" v-if="content.title">
            <h2 class="bodyTitle">
                {{ content.title }}
            </h2>
            <div class="scratchBox">
                <DecorScratch />
            </div>
        </div>
        <h3 class="bodySubtitle">
            {{ content.subtitle }}
        </h3>
        <ul class="palmaresList flex column alignStart gap10">
            <li class="bodyText relative palmaresListItem flex" v-for="(item, index) in content.list" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    content: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.palmaresListItem {
    text-align: left;
    padding-left: 25px;
}
.palmaresListItem::before {
    width: 25px;
    height: 100%;
    content: "\2022";
    font-weight: 900;
    position: absolute;
    left: 0;
    list-style-type: disc;
    color: var(--brand-sec);
    list-style-position: inside;
    /* border: 1px solid var(--brand-sec); */
    display: flex;
    justify-content: center;
}
</style>
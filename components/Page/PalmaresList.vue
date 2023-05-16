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
        <ul class="palmaresList flex column gap10">
            <li class="bodyText palmaresListItem flex alignCenter" v-for="(item, index) in content.list" :key="index">

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
}
.palmaresListItem::before {
    width: 20px;
    height: 100%;
    content: "\2022";
    font-weight: 900;
    display: inline-block;
    list-style-type: disc;
    color: var(--brand-sec);
    list-style-position: inside;
}
</style>
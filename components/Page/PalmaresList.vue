<template>
    <div class="flex column gap20">
        <h1 class="bodyTitle" v-if="content.title">
            {{ content.title }}
        </h1>
        <h3 class="bodySubtitle">
            {{ content.subtitle }}
        </h3>
        <ul class="palmaresList flex column gap10">
            <li class="bodyText palmaresListItem flex alignCenter" v-for="(item, index) in content.list" :key="index">
                <p>
                    {{ item }}
                </p>
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
.palmaresList {
    
}

.palmaresListItem::before {
    width: 10px;
    content: "\2022";
    font-weight: 900;
    display: inline-block;
    list-style-type: disc;
    color: var(--brand-sec);
    list-style-position: inside;
}
</style>
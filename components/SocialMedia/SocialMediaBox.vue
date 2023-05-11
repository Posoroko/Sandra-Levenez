<template>
    <ul :class="boxClass" class="">
        <li v-for="icon in icons" :key="icon.name" class="iconBox">
            <SocialMediaIcon :name="icon.name" :url="icon.url" width="null" />
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    boxClass: String,
    icons: Array
})
</script>

<style scoped>
.contactCardIconbox {
    
}
.contactCardIconbox .iconBox {
    width: clamp(40px, 4vw, 55px);
    aspect-ratio: 1/1;
}
.contactCardIconbox:deep(.iconPath) {
    fill: var(--brand-sec);
}
</style>
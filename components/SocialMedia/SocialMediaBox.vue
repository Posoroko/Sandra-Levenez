<template>
    <ul :class="boxClass">
        <li v-for="icon in icons" :key="icon.name">
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

</style>
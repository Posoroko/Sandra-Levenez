<template>
    <div>
        <PageMain :pageContent="accueil" />
        <OgImageStatic />
    </div>
</template>

<script setup>
import { accueil } from "@/assets/content/content"

useSeoMeta({
    title: 'Maison',
    // description: 'Sandra Levenez, coach sportive et athlète',
})
defineOgImageStatic({
    title: 'Sandra Levenez, coach',
    background: 'blue'
})
defineOgImageStatic()
</script>

<style scoped>

</style>


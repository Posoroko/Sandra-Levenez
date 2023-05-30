<template>
    <div>
        <PageMain :pageContent="coaching" />

        <OgImageStatic />
    </div>
</template>

<script setup>
import { coaching } from "@/assets/content/content"

definePageMeta({
    title: 'Coaching',
    description: 'Coaching selon la méthode Sandra Levenez',
    image: '/images/coaching.jpg',
})

defineOgImageStatic({
    title: 'Sandra Levenez, coach sportif',
    backgroundColor: 'blue'
})
// defineOgImageScreenshot()

</script>

<style scoped></style>
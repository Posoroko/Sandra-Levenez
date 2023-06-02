<template>
    <div>
        <PageMain :pageContent="coaching" />
    </div>
</template>

<script setup>
import { coaching } from "@/assets/content/content"

definePageMeta({
    title: 'Coaching',
    description: 'M.I.L.E.S., la méthode de Sandra Lévénez, double championne du monde de duathlon et cycliste pro.  Coaching par planification et suivi de vos entrainements.',
    image: '/images/coaching.jpg',
})

defineOgImageStatic({
    title: 'Sandra Lévénez, coach sportif',
    backgroundColor: 'blue'
})
// defineOgImageScreenshot()

</script>

<style scoped></style>
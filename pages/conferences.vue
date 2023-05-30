<template>
    <div>
        <PageMain :pageContent="conferences" />
    </div>
</template>

<script setup>
import { conferences } from "@/assets/content/content"

definePageMeta({
    title: 'Conférences',
    description: 'Sandra Levenez, sportive de haut niveau, vous propose des conférences sur le sport.',
    image: '/images/coaching.jpg',
})
</script>
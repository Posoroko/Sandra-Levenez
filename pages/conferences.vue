<template>
    <PageMain :pageContent="conferences" />
</template>

<script setup>
import { conferences } from "@/assets/content/content"

definePageMeta({
    title: 'SandraLevenez | Conférences',
    description: 'CSandra Levenez, sportive de haut niveau, vous propose des conférences sur le sport.',
    image: '/images/coaching.jpg',
})
</script>
<template>
    <div>
        <PageMain :pageContent="conferences" />
    </div>
</template>

<script setup>
import { conferences } from "@/assets/content/content"

definePageMeta({
    title: 'Conférences',
    description: 'Sandra Lévénez propose des conférences pour présenter et partager ses expériences de double championne du monde de duathlon et cycliste pro.',
    image: '/images/coaching.jpg',
})
</script>
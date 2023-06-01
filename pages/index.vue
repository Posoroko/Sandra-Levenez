<template>
    <div>
        <PageMain 
            :pageContent="accueil" 
            :section1WrapReverse="false"
            :section2WrapReverse="true"
            :section3WrapReverse="false" />

    </div>
</template>

<script setup>
import { accueil } from "@/assets/content/content"

useSeoMeta({
    title: 'Accueil',
    description: 'Sandra Levenez, sportive de haut niveau, vous propose des conférences sur le sport.',
    image: '/images/coaching.jpg',
})

</script>

<style scoped>

</style>


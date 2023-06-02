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
    description: "Sandra Lévénez, double championne du monde de duathlon et cycliste pro.  Coaching par planification et suivi, conférences et partage d'expériences.",
    image: '/images/coaching.jpg',
})

</script>

<style scoped>

</style>


<template>
    <HeaderMain>
        <div class="full">
            <img class="objectFitCover" :src="palmares.headerImage" alt="">
        </div>
    </HeaderMain>

    <SectionMain v-if="palmares.sectionLogo">
        <template v-slot:leftBox>
            <PagePalmaresList :content="palmares.sectionLogo" />
        </template>

        <template v-slot:rightBox>
            <SectionLogoStroke />
        </template>
    </SectionMain>

    <SectionMain>
        <template v-slot:leftBox>
            <SectionRoundImage :image="palmares.sectionPhoto1.image" />
            
        </template>

        <template v-slot:rightBox>
            <PagePalmaresList :content="palmares.sectionPhoto1" />
        </template>
    </SectionMain>

    <SectionMain>
        <template v-slot:leftBox>
            <PagePalmaresList :content="palmares.sectionPhoto2" />
        </template>

        <template v-slot:rightBox>
            <SectionRoundImage :image="palmares.sectionPhoto2.image" />
        </template>
    </SectionMain>

    
</template>

<script setup>
import { palmares } from '@/assets/content/content'

definePageMeta({
    title: "SandraLevenez | Mon palmarès",
    description: 'Palmarès de Sandra Levenez, sportive de haut niveau',
    image: '/images/coaching.jpg',
})
</script>
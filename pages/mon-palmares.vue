<template>
    <div>
        <HeaderMain>
            <div class="full">
                <img class="objectFitCover" :src="palmares.headerImageLarge" alt="">
            </div>
        </HeaderMain>

        <main>
            <div class="pathBar">
                <div class="mainWidth flex alignCenter gap20 pad20">
                    <NuxtLink class="pathLink" to="/" >Accueil</NuxtLink>
                    
                    <span class="icon chevron">chevron_right</span>

                    <NuxtLink class="pathLink underline" to="#">Mon Palmarès</NuxtLink>
                </div>
            </div>
            <SectionMain wrapReverse="false" v-if="palmares.sectionLogo">
                <template v-slot:leftBox>
                    <PagePalmaresList :content="palmares.sectionLogo" />
                </template>

                <template v-slot:rightBox>
                    <SectionLogoStroke />
                </template>
            </SectionMain>

            <SectionMain wrapReverse="true">
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
        </main>

    </div>    
</template>

<script setup>
import { palmares } from '@/assets/content/content'

definePageMeta({
    title: "SandraLevenez | Mon palmarès",
    description: 'Palmarès de Sandra Levenez, sportive de haut niveau',
    image: '/images/coaching.jpg',
})
</script>

<style scoped>
.pathLink {
    font-size: 20px;
    font-weight: 700;
    color: var(--brand-main);

}
.chevron {
    font-size: 24px;
    font-weight: 700;
    color: var(--brand-sec);
}
</style>
<template>
        <HeaderMain>

                <img v-if="route.path != '/'" class="headerimage headerImageLarge objectFitCover" :src="pageContent.headerImageLarge" alt="">
                <img v-if="route.path != '/'" class="headerimage headerImageMid objectFitCover" :src="pageContent.headerImageMid" alt="">
                <div class="h100" v-else>
                    <HeaderHome />
                </div>

        </HeaderMain>

        <main class="pageMain">
            <SectionMain :rowReverse="section1WrapReverse">
                <template v-slot:leftBox>
                    <SectionTextBox :content="pageContent.sectionPhoto" />
                </template>

                <template v-slot:rightBox>
                    <SectionRoundImage :image="pageContent.sectionPhoto.image" />
                </template>
            </SectionMain>

            <LazySectionMain :wrapReverse="section2WrapReverse">
                <template v-slot:leftBox>
                    <SectionQuote v-if="pageContent.sectionQuote.quote.length > 10" :text="pageContent.sectionQuote.quote" />
                    <SectionLogoStroke v-if="pageContent.sectionQuote.quote == 'logo'" />
                </template>

                <template v-slot:rightBox>
                    <SectionTextBox :content="pageContent.sectionQuote" />
                    <div v-if="pageContent.sectionQuote.button == 'palmares'" class="buttonBox pad20 w100 flex">
                        <NuxtLink to="mon-palmares" class="pageButton flex slignCenter gap10">
                            <div class="buttonLogoBox">
                                <DecorLogoFill />
                            </div>
                            <span class="buttonText centered">Mon palmarès</span>
                        </NuxtLink>
                    </div>
                </template>
            </LazySectionMain>

            <LazySectionMain :rowReverse="section3WrapReverse" v-if="pageContent.sectionLogo">
                <template v-slot:leftBox>
                    <SectionTextBox :content="pageContent.sectionLogo" />
                </template>

                <template v-slot:rightBox>
                    <SectionLogoStroke />
                </template>
            </LazySectionMain>
        </main>
</template>

<script setup>
const route = useRoute()
console.log(route.path)


const props = defineProps({
    pageContent: Object,
    section1WrapReverse: Boolean,
    section2WrapReverse: Boolean,
    section3WrapReverse: Boolean,
})
</script>

<style scoped>
.headerImageLarge {
    display: none;
}

@media (max-width: 1099px) {
    .headerImageLarge {
    display: none;
}
.headerImageMid {
    display: block;
}
}
@media (min-width: 1100px) {
    .headerImageLarge {
    display: block;
}
.headerImageMid {
    display: none;
}
}


</style>
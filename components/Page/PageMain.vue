<template>
        <HeaderMain>
            <div class="full">
                <img class="objectFitCover" :src="pageContent.headerImage" alt="">
            </div>
        </HeaderMain>

        <SectionMain>
            <template v-slot:leftBox>
                <SectionTextBox :content="pageContent.sectionPhoto" />
            </template>

            <template v-slot:rightBox>
                <SectionRoundImage :image="pageContent.sectionPhoto.image" />
            </template>
        </SectionMain>

        <SectionMain>
            <template v-slot:leftBox>
                <SectionQuote v-if="pageContent.sectionQuote.quote.length > 10" :text="pageContent.sectionQuote.quote" />
                <SectionLogoStroke v-if="pageContent.sectionQuote.quote == 'logo'" />
            </template>

            <template v-slot:rightBox>
                <SectionTextBox :content="pageContent.sectionQuote" />
                <div v-if="pageContent.sectionQuote.button == 'palmares'" class="buttonBox pad20 w100 flex">
                    <NuxtLink to="#" class="pageButton flex slignCenter gap10">
                        <div class="buttonLogoBox">
                            <DecorLogoFill />
                        </div>
                        <span class="buttonText centered">Mon palmarès</span>
                    </NuxtLink>
                </div>
            </template>
        </SectionMain>

        <SectionMain v-if="pageContent.sectionLogo">
            <template v-slot:leftBox>
                <SectionTextBox :content="pageContent.sectionLogo" />
            </template>

            <template v-slot:rightBox>
                <SectionLogoStroke />
            </template>
        </SectionMain>
</template>

<script setup>
const props = defineProps({
    pageContent: {
        type: Object,
        required: true
    }
})
</script>
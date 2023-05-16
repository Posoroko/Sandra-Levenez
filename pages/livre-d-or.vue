<template>
    <div>
        <HeaderMain>
            <div class="full">
                <img class="objectFitCover" src="/images/headers/header-livre.jpg" alt="">
            </div>
        </HeaderMain>

        <main class="pad20">
            <div class="mainWidth">
                <div class="">
                    <h1 class="bodyTitle">Livre d'or</h1>
                    <div class="bookScratchBox">
                        <DecorScratch />
                    </div>
                </div>
    
                <section class="marTop50" v-for="(array, indexArray) in messages" :key="indexArray">
                    <div class="mainWidth flex gap30 wrap justifyCenter cardContainer">
                        <article class="bookCard relative flex column gap25" v-for="(message, indexMessage) in array" :key="message.id">
                            <div class="flex column">
                                <div class="flex column gap10">
                                    <h3 class="bookCardTitle">{{ message.firstName }}</h3>
                                    <p class="flex justifyCenter">
                                        <span class="icon bookStar" v-for="indexMessage in 5" :key="indexMessage">star</span>
                                    </p>
                                </div>
                                <div class="bookCardTextBox marTop20">
                                    <div class="text bookListFormat flex column gap10" v-html="`${message.message}`">

                                    </div>
                                
                                </div> 
                            </div>
                            <div class="buttonBox centered">
                                <button class="pageButton flex slignCenter gap10 pointer" 
                                    :data-indexArray="indexArray"
                                    :data-indexMesage="indexMessage"
                                    :data-firstName="message.firstName"
                                
                                    @click.prevent="handleClick" 
                                    v-if="message.message.length > cardPreviewLength">
                                
                                    <div class="buttonLogoBox">
                                        <DecorLogoFill />
                                    </div>
                                
                                    <span class="buttonText centered">Lire la suite</span>
                                </button>
                            </div>
                        </article>
                    </div>
                    <div class="milesBox" v-if="indexArray == 0">
                        <DecorMiles />
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script setup>
import { readInModal } from '@/composables/utilities'

definePageMeta({
    title: "SandraLevenez | Livre d'or",
    description: 'Avis des clients de Sandra Levenez',
    image: '/images/coaching.jpg',
})

const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const cardPreviewLength = 500

const handleClick = (e) => {
    
    const btn = e.currentTarget
    // get color of card to inject in the modal
    const card = btn.parentNode.parentNode
    const color = window.getComputedStyle(card).backgroundColor

    const indexArray = btn.getAttribute('data-indexArray')
    const indexMessage = btn.getAttribute('data-indexMesage')
    const firstName = btn.getAttribute('data-firstName')
    const message = messages.value[indexArray][indexMessage].message

    readInModal(firstName, message, color)
}

const { data: messages } = await useAsyncData(
    "book",
    async () => {
        const items = await $fetch(`${directusItems}Sandra_Levenez_book?sort[]=-date_published`) 
        const temp = [
            items.data.splice(0, 3), 
            items.data
        ]
        console.log(temp)
        return temp
    }
    ,
    { server: true }
)
</script>

<style scoped>
.bookScratchBox {
    width: 250px;
}
.bookCard {
    width: min(350px, 100%);
    /* height: 600px; */
    padding: 25px min(5vw, 30px) 0 min(5vw, 30px);
    border-radius: 10px;
    overflow: hidden;
}
.bookCardTextBox {
    width: 100%;
    height: min(350px, 25vw);
    border-radius: 10px;
    /* overflow: hidden; */
}

.dots, .bookCardTextBox:deep(*) {
    color: white;
    font-size: clamp(14px, 2vw, 16px);
    letter-spacing: 1px;
    line-height: 26px;
}
.cardContainer .bookCard:nth-child(3n+1){
    background-color: var(--brand-funk);
}
.cardContainer .bookCard:nth-child(3n+2) {
    background-color: var(--brand-sec);
}
.cardContainer .bookCard:nth-child(3n+3) {
    background-color: var(--brand-main);
}
.buttonBox{
    padding: 50px 0 30px 0;
    width: 105%;
    transform: translateX(-2.5%);
}
.cardContainer .bookCard:nth-child(3n+1) .buttonBox {
    background: linear-gradient(0deg, rgba(243,201,63,1) 0%, rgba(243,201,63,0.5256303204875701) 90%, rgba(243,201,63,0) 100%);
}
.cardContainer .bookCard:nth-child(3n+2) .buttonBox {
    background: linear-gradient(0deg, rgba(239,158,66,1) 0%, rgba(239,158,66,0.4864146342130602) 90%, rgba(239,158,66,0) 100%);
}
.cardContainer .bookCard:nth-child(3n+3) .buttonBox {
    background: linear-gradient(0deg, rgba(68,22,161,1) 0%, rgba(68,22,161,0.7217087518601191) 80%, rgba(68,22,161,0) 100%);
}
.bookCardTitle {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: white;
}
.bookStar {
    font-size: 30px;
    color: white;
}
.milesBox {
    padding: min(10vw, 150px) 20px;
}

</style>
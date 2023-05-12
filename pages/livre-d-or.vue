<template>
    <HeaderMain>
        <div class="full">
            <img class="objectFitCover" src="/images/headers/header-livre.png" alt="">
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
                    <article class="bookCard flex column justifyBetween gap25" v-for="(message, indexMessage) in array" :key="message.id">
                        <div class="flex column">
                            <div class="flex column gap10">
                                <h3 class="bookCardTitle">{{ message.firstName }}</h3>
                                <p class="flex justifyCenter">
                                    <span class="icon bookStar" v-for="indexMessage in 5" :key="indexMessage">star</span>
                                </p>
                            </div>
                            <p class="bookCardText marTop20">
                                {{ message.message.slice(0, cardPreviewLength) }}
                                <span class="dots" v-if="message.message.length > cardPreviewLength">...</span>
                            </p> 
                        </div>
                        <div class="buttonBox centered w100 flex">
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
</template>

<script setup>
import { readInModal } from '@/composables/utilities'
const appConfig = useAppConfig();
const directusItems = appConfig.directus.items;
const cardPreviewLength = 500

const handleClick = (e) => {
    
    const btn = e.currentTarget
    const indexArray = btn.getAttribute('data-indexArray')
    const indexMessage = btn.getAttribute('data-indexMesage')
    const firstName = btn.getAttribute('data-firstName')
    const message = messages.value[indexArray][indexMessage].message

    readInModal(firstName, message)
}

const { data: messages } = await useAsyncData(
    "book",
    async () => {
        const items = await $fetch(`${directusItems}Sandra_Levenez_book`) 
        const temp = [
            items.data.splice(0, 3), items.data
        ]
        // const temp = {
        //     latests: items.data.splice(0, 3),
        //     rest: items.data
        // }
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
    width: 30%;
    padding: 20px 30px;
    border-radius: 10px;
}
.dots, .bookCardText {
    color: white;
    letter-spacing: 1px;
    line-height: 26px;
}
.cardContainer .bookCard:nth-child(3n+1) {
    background-color: var(--brand-funk);
}
.cardContainer .bookCard:nth-child(3n+2) {
    background-color: var(--brand-sec);
}
.cardContainer .bookCard:nth-child(3n+3) {
    background-color: var(--brand-main);
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
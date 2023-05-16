<template>
    <footer class="flex column alignCenter marTop100">

        <div class="mainWidth pad20">
            <address class="contactCard">
                <div class="logoBox centered">
                    <DecorLogoFull />
                </div>
            
                <div class="contactCardScratchBox scratcBox1"> 
                    <DecorSmallScratchThin /> 
                </div>
            
                <div class="contactBox flex column justifyCenter alignStart gap20">
                    <a :href="`tel:${contact.telephone}`" class="contactBoxLine flex alignCenter gap10">
                        <span class="contactCard_icon icon callIcon">call</span>
                        <span class="contactCard_text reactiveLink">{{ contact.telephone }}</span>
                    </a>

                    <a :href="`mailto:${contact.email}`" class="contactBoxLine flex alignCenter gap10">
                        <span class="contactCard_icon icon">alternate_email</span>
                        <span class="contactCard_text reactiveLink">{{ contact.email }}</span>
                    </a>

                    <div class="contactBoxLine flex alignCenter gap10">
                        <span class="contactCard_icon icon">location_on</span>
                        <span class="contactCard_text">Bretagne</span>
                    </div>
                </div>
            
                <div class="contactCardScratchBox scratchBox2"> 
                    <DecorSmallScratchThin /> 
                </div>
                    
                <div class="socialBox">
                    <SocialMediaBox boxClass="contactCardIconbox" :icons="socialMedia" />
                </div>
            </address>
        </div>

        <nav class="bottomBar w100 flex alignCenter marTop100">
            <ul class="mainWidth flex gap10 justifyAround wrap">
                <li class="linkText"><NuxtLink to="/">ACCUEIL</NuxtLink></li>
                    <div class="bottomBarScratchBox"> <DecorSmallScratch /> </div>
                <li class="linkText"><NuxtLink to="/plan-du-site">PLAN DU SITE</NuxtLink></li>
                    <div class="bottomBarScratchBox"> <DecorSmallScratch /> </div>
                <li class="linkText"><NuxtLink to="/mentions-legales">MENTIONS LEGALES</NuxtLink></li>
                    <div class="bottomBarScratchBox"> <DecorSmallScratch /> </div>
                <li class="linkText"><a href="https://www.comkreiz.com/" target="_blank">WEB DESIGNER : COM KREIZ</a></li>
                    <div class="bottomBarScratchBox"> <DecorSmallScratch /> </div>
                <li class="linkText "><a class="raleWay" href="https://posoroko.com/" target="_blank">DEV : STUDIO POSOROKO</a></li>
            </ul>
        </nav>
<!-- scratchBox -->
    </footer>
</template>

<script setup>
const appConfig = useAppConfig()

const contact = appConfig.contact

import { socialMedia } from '@/assets/content/content'

</script>

<style scoped>

.contactCard {
    width: 100%;
    padding: 20px 2vw;
    border: 2px solid var(--brand-main);
    border-radius: 3vw;
    display: flex;
    flex-wrap: wrap;
}
.contactBox {
    padding: 20px;
}
.contactCard_icon {
    font-size: 24px;
    color: var(--brand-sec);
    font-style: normal;
}
.contactCard_text {
    font-family: "Montserrat", sans-serif;
    font-size: clamp(16px, 2vw, 24px);
    font-weight: 700;
    font-style: normal;
    color: var(--brand-main);
}
.contactBoxLine:hover .reactiveLink {
    color: var(--brand-sec);
}
.bottomBar {
    min-height: 50px;
    background-color: var(--brand-sec);
    padding: 0 20px;
}
.bottomBarScratchBox {
   margin: 5px;
   display: grid;
   place-items: center;
}
.linkText{
    font-size: 13px;
    text-decoration: underline white;
    margin: 10px 0;
}
.linkText a {
    color: white;
}

@media (max-width: 639px) {
    .contactCard {
        width: 100%;
        margin: auto;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
}


@media (min-width: 640px) and (max-width: 999px) {
    .contactCard {
        width: 80%;
        margin: auto;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
    .socialBox {
        width: 100%;
        margin-top: 25px;
    }
    .socialBox:deep(.contactCardIconbox) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
}
@media (max-width: 999px) {
    .logoBox {
        width: 100%;
    }
    .scratchBox {
        display: block;
        transform: rotate(90deg);
        width: 75vw;
    }
    .socialBox:deep(.contactCardIconbox) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 20px;
    }
}
@media (min-width: 1000px) {
    .contactCard {
        
        justify-content: space-between;
    }
    .socialBox:deep(.contactCardIconbox) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
}

.contactCardScratchBox {
    margin: 5px;
    position: relative;
    pointer-events: none;
}
.contactCardScratchBox:deep(.thinScratchSVG) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

/* contact scratch format */

@media (max-width: 999px) {

    .contactCardScratchBox {
        height: 20px;
        width: 100%;
        
    }
    .contactCardScratchBox:deep(.thinScratchSVG) {
        height: 35vw;
        transform: translate(-50%, -50%) rotate(90deg);
    }

}
@media (min-width: 1000px) {
    .contactCardScratchBox {
        display: block;
        /* width: 20px;
        align-self: stretch; */
    }
    .contactCardScratchBox:deep(.thinScratchSVG) {
        height: 100%;
    }
}
@media (max-width: 999px) {

    .bottomBarScratchBox {
        display: none;
    }

}

</style>
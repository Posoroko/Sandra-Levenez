<template>
    <header class="smallHeader HeaderSmallHeight relative">
        <HeaderScratch />
    </header>

    <main class="planMain mainWidth pad20">
        
        <div class="mainWidth marTop50">
            <div class="flex column gap10 w50">
                <h2 class="bodySubitle">Plan du site</h2>
                <!-- <div class="scratchBox">
                    <DecorScratch />
                </div> -->
            </div>

            <ul class="levelZero flex column marTop20">
                <li class="levelOne flex alignCenter gap10">
                    <!-- <span class="icon">circle</span> -->
                    <NuxtLink class="levelOneTitle bodyText1" to="/">Accueil</NuxtLink>
                </li>

                <li class="levelTwo flex alignCenter gap10">
                    <span class="icon">circle</span>
                    <NuxtLink class="levelOneTitle bodyText1" to="/mon-palmares">Mon Palmarès</NuxtLink>
                </li>

                <li class="levelOne flex alignCenter gap10">
                    <!-- <span class="icon">circle</span> -->
                <NuxtLink class="levelOneTitle bodyText1" to="/coaching">Coaching</NuxtLink>
            </li>

                <li class="levelOne flex alignCenter gap10">
                    <!-- <span class="icon">circle</span> -->
                    <NuxtLink class="levelOneTitle bodyText1" to="/conferences">Conférences</NuxtLink>
                </li>

                <li class="levelOne flex alignCenter gap10">
                    <!-- <span class="icon">circle</span> -->
                    <NuxtLink class="levelOneTitle bodyText1" to="/livre-d-or">Livre d'or</NuxtLink>
                </li>

                <li class="levelOne flex alignCenter gap10">
                    <!-- <span class="icon">circle</span> -->
                    <NuxtLink class="levelOneTitle bodyText1" to="/mentions-legales">Mentions légales</NuxtLink>
                </li>

                
            </ul>
    </div>
</main></template>

<script setup>

</script>

<style scoped>
@media (max-width: 940px) {
    .smallHeader {
        display: none;
    }
}
.planMain {
    margin-top: 15vh;
}

.icon {
    font-size: 8px;
    /* color: var(--brand-sec); */
}


.levelZero {
    font-size: 24px;
    list-style: disc;
}

.levelOne {

    padding-left: 40px;
    margin-top: 20px;
    list-style: disc;
}



.levelTwo {

    padding-left: 60px;
    margin-top: 10px;
}

</style>



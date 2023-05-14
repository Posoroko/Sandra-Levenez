<template>
    <main class="planMain mainWidth ">
        <h1>Plan du site</h1>
        <div class="mainWidth marTop50">
            <ul class="levelZero flex column gap20 ">
                <li class="levelOne flex alignCenter gap10">
                    <span class="icon">circle</span>
                    <NuxtLink class="levelOneTitle" to="/">Accueil</NuxtLink>
                </li>

                <li class="levelTwo flex alignCenter gap10">
                    <span class="icon">circle</span>
                    <NuxtLink class="levelOneTitle" to="/mon-palmares">Mon Palmarès</NuxtLink>
                </li>

                <li class="levelOne flex alignCenter gap10">
                    <span class="icon">circle</span>
                <NuxtLink class="levelOneTitle" to="/coaching">Coaching</NuxtLink>
            </li>

                <li class="levelOne flex alignCenter gap10">
                    <span class="icon">circle</span>
                    <NuxtLink class="levelOneTitle" to="/conferences">Conférences</NuxtLink>
                </li>

                

                <li class="levelOne flex alignCenter gap10">
                    <span class="icon">circle</span>
                    <NuxtLink class="levelOneTitle" to="/livre-d-or">Livre d'or</NuxtLink>
                </li>

                
            </ul>
    </div>
</main></template>

<script setup>

</script>

<style scoped>
.planMain {
    margin-top: 25vh;
}

.icon {
    font-size: 12px;
    color: var(--brand-sec);
}


.levelZero {
    font-size: 24px;
    list-style: disc;
}

.levelOne {
    font-size: 20px;
    padding-left: 40px;
    list-style: disc;
}

.levelOneTitle {
    font-weight: 600;
}

.levelTwo {
    font-size: 16px;
    padding-left: 60px;
}

</style>



<template>
    <div class="topBarContainer relative flex alignCenter marTop20">
        
        <div class="topBar_bar w100 flex justifyBetween">
            <div class="logoCardPlaceHolder"></div>
            <TopBarTabBox />
            <TopBarBurgerMenu />

            <div class="topBarScratchBox"> <DecorSmallScratch /> </div>

            <TopBarSocialBox />
            
            <TopBarContactBox />
        </div>

        <NuxtLink to="/" class="topBar_logoCardBox absolute top0 bottom0 left0" aria-label="Logo du site et lien vers la page d'accueil">
            <TopBarLogoCard />
        </NuxtLink>
    </div>
</template>

<script setup>

</script>

<style scoped>
.topBarContainer {
    height: clamp(80px, 10vw, 150px);
    /* overflow: hidden; */
}
.logoCardPlaceHolder {
    height: clamp(80px, 10vw, 150px);
    aspect-ratio: 398/203; /* set by the dimensiosn of the svg file */
}
@media (max-width: 400px) {
    .topBarContainer {
        height: 60px;
    }
}

</style>

<style>

.topBar_bar{
    height: 50px;
    background-color: #fff;
    padding: 5px;
    box-shadow: 5px 5px 10px black;
}
.topBar_bar_icon {
    color: var(--brand-sec);
}


.separatorBox {
    width: 20px;
}
@media (max-width: 939px) {
    .logoCardPlaceHolder {
        width: 200px;
    }
    .topBar_bar .tabBox,
    .topBarScratchBox {
        display: none;
    }
    .topBar_bar .burgerBox {
        display: flex;
    }
    .topBarSocialIconbox {
        display: none;
    }
    .topBarContactBox {
        display: flex;
    }
}
@media (max-width: 1049px) {

    .topBar_bar .topBarScratchBox {
        display: none;
    }

}
@media (min-width: 1050px) {

    .topBar_bar .topBarScratchBox {
        display: block;
    }

}
@media (min-width: 940px) {
    .topBar_bar .tabBox {
        display: flex;
    }
    .topBar_bar .burgerBox {
        display: none;
    }
    .topBarSocialIconbox {
        display: flex;
    }
    .topBarContactBox {
        display: none;
    }
}
</style>
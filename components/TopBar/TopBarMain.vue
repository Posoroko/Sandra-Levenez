<template>
    <div class="topBarContainer relative flex alignCenter">
        
        <div class="topBar_bar w100 flex justifyBetween">
            <div class="logoCardPlaceHolder"></div>
            <TopBarTabBox />
            <TopBarBurgerMenu />

            <div class="separatorBox h100">
                <DecorScratch way="vertical"/>
            </div>

            <TopBarSocialBox />
            <TopBarContactBox />
        </div>

        

        <div class="topBar_logoCardBox absolute top0 bottom0 left0">
            <TopBarLogoCard />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.topBarContainer {
    height: clamp(80px, 10vw, 150px);
}
.logoCardPlaceHolder {
    height: clamp(80px, 10vw, 150px);
    aspect-ratio: 398/203; /* set by the dimensiosn of the svg file */
}


</style>

<style>

.topBar_bar{
    height: 50px;
    background-color: #fff;
    padding: 5px;
}
.topBar_bar_icon {
    color: var(--brand-sec);
}
.topBar_bar_text {
    font-size: 16px;
    color: var(--brand-main);
}

.separatorBox {
    width: 20px;
}
@media (max-width: 939px) {
    .topBar_bar .tabBox {
        display: none;
    }
    .topBar_bar .burgerBox {
        display: flex;
    }
    .topBar_bar .separatorBox {
        display: none;
    }
    .topBarSocialIconbox {
        display: none;
    }
    .topBarContactBox {
        display: flex;
    }
}
@media (min-width: 940px) {
    .topBar_bar .tabBox {
        display: flex;
    }
    .topBar_bar .burgerBox {
        display: none;
    }
    .topBar_bar .separatorBox {
        display: block;
    }
    .topBarSocialIconbox {
        display: flex;
    }
    .topBarContactBox {
        display: none;
    }
}
</style>
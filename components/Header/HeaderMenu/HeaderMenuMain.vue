<template>
    <nav class="menuBox mainWidth">
        <NuxtLink class="menuButton menuButton1" to="/coaching">
            <img class="menuButtonImage" src="/images/montre.jpg" alt="">
            <div class="cover cover1"></div>
            <p class="buttonText">COACHING</p>
        </NuxtLink>

        <NuxtLink class="menuButton menuButton2" to="/conferences">
            <img class="menuButtonImage" src="/images/venue.jpg" alt="">
            <div class="cover cover2"></div>
            <p class="buttonText">CONFÉRENCES</p>
        </NuxtLink>

        <NuxtLink class="menuButton menuButton3" to="#">
            <img class="menuButtonImage" src="/images/gesture.jpg" alt="">
            <div class="cover cover3"></div>
            <p class="buttonText">LIVRE D'OR</p>
        </NuxtLink>
    </nav>
</template>

<style scoped>
.menuBox {
    
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
}
.menuButton {
    width: 20%;
    aspect-ratio: 1/1;
    border-radius: 15px;
    border: 2px solid white;
    display: block;
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 10px black;
}
.menuButton1 {
    /* border-top-left-radius: 15px; */
    /* border-bottom-left-radius: 15px; */
}

.menuButton2 {
    transform: translateX(-2px);
}
.menuButton3 {
    /* border-top-right-radius: 15px; */
    /* border-bottom-right-radius: 15px; */
    transform: translateX(-4px);
}
.menuButton2 {
    transform: translateX(-2px);
}
.menuButton3 {
    transform: translateX(-4px);
}

@media (max-width: 939px) {
    .menuBox {
        display: none;
    }
}
@media (min-width: 940px) {
    .menuBox {
        display: flex;
    }
}
.menuButtonImage {
    width: 101%;
    height: 101%;
    object-fit: cover;
}
.cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.8;
    transition: 300ms ease;
}
.cover1 {
    background-color: var(--brand-main);
}
.cover2 {
    background-color: var(--brand-sec);
}
.cover3 {
    background-color: var(--brand-funk);
}
.buttonText {
    font-family: "AnotherShabby";
    font-size: clamp(22px, 2vw, 30px);
    color: white;
    position: absolute;
    bottom: 10%;
    right: 15px;
}

.menuButton:hover .cover{
    opacity: 1;
    transition: 300ms ease;
}
</style>
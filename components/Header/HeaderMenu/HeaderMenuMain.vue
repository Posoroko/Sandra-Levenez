<template>
    <nav class="menuBox flex">
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

        <NuxtLink class="menuButton menuButton3" to="/livre-d-or">
            <img class="menuButtonImage" src="/images/gesture.jpg" alt="">
            <div class="cover cover3"></div>
            <p class="buttonText">LIVRE D'OR</p>
        </NuxtLink>
    </nav>
</template>
<script setup>
const emits = defineEmits(['closeMenu'])



</script>

<style scoped>
.menuBox {
    width: 100%;
    
    
}

.menuButton {
    aspect-ratio: 1/1;
    border-radius: 15px;
    border: 2px solid white;
    display: block;
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 10px black;
}
.menuButton:hover .cover{
    opacity: 1;
    transition: 300ms ease;
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
    font-size: clamp(22px, 1.5vw, 30px);
    color: white;
    position: absolute;
    bottom: 10%;
    right: 15px;
}



@media (max-width: 939px) {
    .menuBox {
        /* height: 450px; */
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .menuButton {
        width: 100%;
        height: min(100px, 17vh);
    }
    .menuButton2 {
    transform: translateY(-2px);
    }
    .menuButton3 {
        transform: translateY(-4px);
    }
}
@media (min-width: 940px) {
    .menuBox {
        flex-direction: row;
        justify-content: center;
        position: absolute;
        bottom: 50%;
        left: 0%;
        transform: translateY(50%);
    }
    .menuButton {
        /* width: max(180px, 12vw); */
        height: 250px;
    }
    .menuButton2 {
        transform: translateX(-2px);
    }   
    .menuButton3 {
        transform: translateX(-4px);
    }
}
</style>
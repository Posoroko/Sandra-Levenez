<template>
    <div class="pilejeBox flex alignCenter column">
        <p class="whiteText italic">Mon partenaire nutrition</p>
        <img class="pilejePNG w100" src="/images/pileje.png" alt="">
    </div>
</template>

<style scoped>
.pilejeBox {
    width: min(250px, 40vw);
    position: absolute;
    right: 20px;
    bottom: max(50px, 15vh);
    background-color: #0000001c;
    border-radius: 10px;
    padding: 10px;
}
.pilejeBox p {
    font-weight: 600;
}
@media (max-width: 554px) {
    .pilejePNG {
        width: 100%;
    }
}
@media (min-width: 555px) {
    .pilejePNG {
        width: 60%;
    }
}
</style>
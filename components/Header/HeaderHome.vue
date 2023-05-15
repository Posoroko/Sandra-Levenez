<template>
    <div class="h100 flex gap10">
        <div class="header_leftBox"> 
            <img src="/images/headers/accueil1.png" alt="">
        </div>

        <div class="header_rightBox flex column gap10">
            <div class="header_rightTopBox">
                <img src="/images/headers/accueil2.png" alt="">
            </div>

            <div class="header_rightBottomBox">
                <img src="/images/headers/accueil3.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.header_leftBox, 
.header_rightBox {
    width: 50%;
    height: 100vh;
    overflow: hidden;
}
.header_rightBottomBox,
.header_rightTopBox {
    width: 100%;
    height: 50%;
}

.header_leftBox img,
.header_rightBottomBox img,
.header_rightTopBox img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.header_leftBox img,
.header_rightTopBox img {
    object-position: left;
}
@media (max-width: 414px) {
    .header_leftBox img{
        object-position: -75px;
    }
}
@media (min-width: 415px) and (max-width: 575px) {
    .header_leftBox img{
        object-position: -50px;
    }
}

</style>
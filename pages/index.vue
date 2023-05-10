<template>
    <HeaderMain>
        <div class="full flex gap5">
            <div class="header_leftBox w50 h100">
                <img class="leftImage" src="/images/headers/accueil1.png" alt="">
            </div>

            <div class="header_rightBox w50 h100 flex column gap5 ">
                <div class="header_rightBox_top w100 h50">
                    <img class="rightImage" src="/images/headers/accueil2.png" alt="">
                </div>

                <div class="header_rightBox_bottom w100 h50">
                    <img class="rightImage" src="/images/headers/accueil3.png" alt="">
                </div>
            </div>
        </div>
        
    </HeaderMain>
</template>

<style scoped>
.header_leftBox {
    overflow: hidden;
}
.leftImage {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: left;
}
.rightImage{
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}
</style>


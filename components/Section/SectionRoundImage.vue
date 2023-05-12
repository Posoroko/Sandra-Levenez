<template>
    <div class="roundImageFrame relative">
        <div class="halfCircleFrame1" :class="{ 'active': imgHover }">
            <div class="halfCircle1"></div>
        </div>
        
        <div class="halfCircleFrame2" :class="{ 'active': imgHover }">
            <div class="halfCircle2"></div>
        </div>

        <div class="imageFrame" :class="{ 'active': imgHover }">
            <img class="objectFitCover pointer" 
            :data-url_large="image.url_Large"
            @mouseenter="imgHover = !imgHover" :src="image.url_Small" 
            @mouseout="imgHover = !imgHover"
            @click.prevent="handleImageClick"
            alt="">
        </div>
    </div> 
</template>

<script setup>
import { openImageInModal } from '@/composables/utilities'
const props = defineProps({
    image: Object,
    text: String
})
const imgHover = ref(false)

const handleImageClick = (e) => {
    openImageInModal(e.target.getAttribute('data-url_large'))
}



</script>

<style scoped>

.roundImageFrame {
    width: 75%;
    aspect-ratio: 1/1;
}
.imageFrame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    overflow: hidden;
    transition: 300ms ease;
}
.imageFrame.active {
    transform: translate(-50%, -50%) scale(1.01);
    box-shadow: -2px 2px 10px black;
    transition: 300ms ease;
}
.halfCircleFrame1 {
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    position: absolute;
    transition: 300ms ease;
}
.halfCircleFrame1.active {
    transform: translate(-50%, -50%) rotate(30deg);
    transition: 300ms ease;
}
.halfCircle1 {
    width: 50%;
    height: 100%;
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
    border: 2px solid var(--brand-sec);
}

.halfCircleFrame2 {
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(20deg);
    position: absolute;
    transition: 300ms ease;
}
.halfCircleFrame2.active {
    transform: translate(-50%, -50%) rotate(120deg);
    transition: 300ms ease;
}
.halfCircle2 {
    width: 50%;
    height: 100%;
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
    background-color: var(--brand-main);
}
</style>
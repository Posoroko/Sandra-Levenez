<template>
    <div class="roundImageFrame relative">
        <div class="halfCircleFrame1">
            <div class="halfCircle1"></div>
        </div>
        
        <div class="halfCircleFrame2">
            <div class="halfCircle2"></div>
        </div>

        <div class="imageFrame">
            <img class="objectFitCover" :src="image" alt="">
        </div>
    </div>  
</template>

<script setup>
const props = defineProps({
    image: String,
    text: String
})
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
}
.halfCircleFrame1 {
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    position: absolute;
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
}
.halfCircle2 {
    width: 50%;
    height: 100%;
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
    background-color: var(--brand-main);
}
</style>
<template>
    <div class="quoteBox full flex column alignCenter">
        <div class="markBox markBoxLeft">
            <svg version="1.1" class="quotesSVG h100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 49.9 40.3" style="enable-background:new 0 0 49.9 40.3;" xml:space="preserve">
            
                <path class="st0" d="M24.8,37.9c0,0-2.2,2-2.4,1.9c-0.3-0.1-0.5-0.4-0.7-0.5c-0.6-0.4-1.3-0.9-1.9-1.3c-1.9-1.3-3.8-2.7-5.7-4
            c-1.9-1.3-3.7-2.6-5.6-4c-1.8-1.2-3.6-2.4-5.2-3.9c-0.9-0.8-1.7-1.8-2.2-3c-0.5-1.2-0.6-2.7-0.5-4c0.2-2,1.4-3.7,3-5
            c1.6-1.4,3.4-2.5,5.1-3.8c1.8-1.3,3.7-2.6,5.5-3.9c2.6-1.8,5.2-3.7,7.8-5.5c0.2-0.1,0.3-0.2,0.5-0.4c0.3,0.1,2.4,1.8,2.4,1.9
            c0,0.2-13.7,17.3-13.7,17.5C11.1,20.1,24.7,37.7,24.8,37.9"/>
                <path class="st0" d="M49,37.9c0,0-2.2,2-2.4,1.9c-0.3-0.1-0.5-0.4-0.7-0.5c-0.6-0.4-1.3-0.9-1.9-1.3c-1.9-1.3-3.8-2.7-5.7-4
            c-1.9-1.3-3.7-2.6-5.6-4c-1.8-1.2-3.6-2.4-5.2-3.9c-0.9-0.8-1.7-1.8-2.2-3c-0.5-1.2-0.6-2.7-0.5-4c0.2-2,1.4-3.7,3-5
            c1.6-1.4,3.4-2.5,5.1-3.8c1.8-1.3,3.7-2.6,5.5-3.9C41,4.7,43.6,2.8,46.2,1c0.2-0.1,0.3-0.2,0.5-0.4c0.3,0.1,2.4,1.8,2.4,1.9
            c0,0.2-13.7,17.3-13.7,17.5C35.4,20.1,48.9,37.7,49,37.9"/>
                </svg>
        </div>

        <div class="quoteText" v-html="text"></div>

        <div class="markBox quoteBoxRight">
            <svg version="1.1" class="quotesSVG h100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 49.9 40.3" style="enable-background:new 0 0 49.9 40.3;" xml:space="preserve">
            
                <path class="st0" d="M24.8,37.9c0,0-2.2,2-2.4,1.9c-0.3-0.1-0.5-0.4-0.7-0.5c-0.6-0.4-1.3-0.9-1.9-1.3c-1.9-1.3-3.8-2.7-5.7-4
            c-1.9-1.3-3.7-2.6-5.6-4c-1.8-1.2-3.6-2.4-5.2-3.9c-0.9-0.8-1.7-1.8-2.2-3c-0.5-1.2-0.6-2.7-0.5-4c0.2-2,1.4-3.7,3-5
            c1.6-1.4,3.4-2.5,5.1-3.8c1.8-1.3,3.7-2.6,5.5-3.9c2.6-1.8,5.2-3.7,7.8-5.5c0.2-0.1,0.3-0.2,0.5-0.4c0.3,0.1,2.4,1.8,2.4,1.9
            c0,0.2-13.7,17.3-13.7,17.5C11.1,20.1,24.7,37.7,24.8,37.9"/>
                <path class="st0" d="M49,37.9c0,0-2.2,2-2.4,1.9c-0.3-0.1-0.5-0.4-0.7-0.5c-0.6-0.4-1.3-0.9-1.9-1.3c-1.9-1.3-3.8-2.7-5.7-4
            c-1.9-1.3-3.7-2.6-5.6-4c-1.8-1.2-3.6-2.4-5.2-3.9c-0.9-0.8-1.7-1.8-2.2-3c-0.5-1.2-0.6-2.7-0.5-4c0.2-2,1.4-3.7,3-5
            c1.6-1.4,3.4-2.5,5.1-3.8c1.8-1.3,3.7-2.6,5.5-3.9C41,4.7,43.6,2.8,46.2,1c0.2-0.1,0.3-0.2,0.5-0.4c0.3,0.1,2.4,1.8,2.4,1.9
            c0,0.2-13.7,17.3-13.7,17.5C35.4,20.1,48.9,37.7,49,37.9"/>
                </svg>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    text: String
})

</script>

<style scoped>
.markBox {
    width: 80%;
    height: 40px;
}
.quoteBoxRight {
    transform: rotate(180deg);
}
/* .quoteBox:deep(.quoteText) {
    text-align: center;
    font-size: 30px;
    font-family: "AnotherShabby";
} */
.quoteText {
    width: 60%;
    text-align: center;
    font-size: 30px;
    font-family: "AnotherShabby";
    color: var(--brand-main);
}
.st0 {
    fill: var(--brand-main);
}
</style>
<template>
    <section class="w100 marTop50 flex">
        <div class="mainWidthContainer mainWidth h100 flex justifyCenter alignCenter" :class="[{ 'reverseWrap': wrapReverse }, { 'defaultWrap': !wrapReverse }]">
            <div class="sectionHalfBox leftBox h100" >
                <slot name="leftBox" />
            </div>

            <div class="sectionHalfBox rightbox h100 centered">
                <slot name="rightBox" />
            </div>
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    wrapReverse: Boolean
})
</script>
<style>
.defaultWrap {
    flex-wrap: wrap;
}
.reverseWrap {
    flex-wrap: wrap-reverse;
}
@media (max-width: 849px){
    .mainWidthContainer{
        gap: 50px;
    }

}

@media (max-width: 639px){
    .sectionHalfBox {
        width: 100%;
    }
}
@media (min-width: 640px) and (max-width: 849px) {
    .sectionHalfBox {
        width: 80%;
    }
}



@media (min-width: 850px) {
    .sectionHalfBox {
        width: 50%;
    }
}
</style>
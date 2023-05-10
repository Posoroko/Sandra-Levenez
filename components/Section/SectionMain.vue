<template>
    <section class="w100 marTop250 flex ">
        <div class="mainWidthContainer mainWidth h100 flex justifyCenter alignCenter wrap">
            <div class="sectionHalfBox leftBox h100">
                <slot name="leftBox" />
            </div>

            <div class="sectionHalfBox rightbox h100 centered">
                <slot name="rightBox" />
            </div>
        </div>
    </section>
</template>

<style>
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
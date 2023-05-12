<template>
    <slot />
    
    <TopBarMain />

    <FooterMain />

    <ModalImage />
    <ModalText />
</template>

<style>
.topBarContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>
<template>
    <header class="">
        <HeaderScratch />
        <slot/>

        <HeaderPileje />

        <HeaderMenuMain />

    </header>
</template>

<style scoped>
header {
    width: 100vw;
    height: 100vh;
    position: relative;
    margin-bottom: min(10vw, 150px);
}
</style>
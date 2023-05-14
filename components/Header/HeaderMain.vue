<template>
    <header class="">
        <HeaderScratch />
        <slot/>

        <HeaderPileje />
    </header>
</template>

<style scoped>
header {
    width: 100%;
    /* height: 100vh; */
    position: relative;
    margin-bottom: min(10vw, 150px);
    overflow: no-scroll;
}
</style>
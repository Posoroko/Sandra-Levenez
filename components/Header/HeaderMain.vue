<template>
    <header class="">
        <HeaderScratch />
        <slot/>

        
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: min(100vh, 1080px);
    position: relative;
    margin-bottom: min(10vw, 150px);
}
</style>
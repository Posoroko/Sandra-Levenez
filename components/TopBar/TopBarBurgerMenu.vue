<template>
    <div class="burgerBox alignCenter relative">
        <p class="icon menuIcon pointer" @click="menu = !menu">menu</p>

        <div class="menuBox absolute" :class="[{ 'open' : menu}, {'closed' : !menu}]">
            eric
        </div>
    </div>
</template>

<script setup>
const menu = ref(false)
</script>

<style scoped>
.menuIcon {
    font-size: 30px;
    color: var(--brand-main);
}
.menuBox {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    background-color: #fff;
}
.open {
    width: 100px;
    height: 100px;

    /* opacity: 1; */
    transition:  300ms  ease;
}
.closed {
    width: 0px;
    height: 0px;

    /* opacity: 0; */
    transition:  300ms  ease;
}
</style>
<template>
    <div class="burgerBox alignCenter relative">
        <p class="icon menuIcon pointer" @click="openMenu">menu</p>

        <div class="burgerMenuBox absolute flex column justifyEnd" :class="[{ 'open' : menuIsOpen }, {'closed' : !menuIsOpen }]">
            <p class="flex justifyEnd pad20">
                <span class="modalCloseBtn icon pointer z_2000" @click="closeMenu">close</span>
            </p>
            <HeaderMenuMain />
            
        </div>
    </div>
</template>

<script setup>
const menuIsOpen = ref(false)


const openMenu = (e) => {
    if (!menuIsOpen.value) {
        menuIsOpen.value = true
        setTimeout(() => {
            window.addEventListener('click', handleWindowEvents, true)
            window.addEventListener('scroll', handleWindowEvents, true)
        }, 10)
    }
}

const handleWindowEvents = (e) => {
    //close menu on scroll
    if (e.type == "scroll") {
        closeMenu()
        return
    }

    //close menu on click outside of the menu
    if (e.target.closest(".menuPanel") == null) {
        closeMenu()
    }
}

const closeMenu = () => {
    menuIsOpen.value = false
    window.removeEventListener('click', handleWindowEvents, true)
}


</script>

<style scoped>
.menuIcon {
    font-size: 30px;
    color: var(--brand-main);
}
.burgerMenuBox {
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    /* overflow: hidden; */
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 2px 6px 5px black;
    overflow: hidden;
}
.open {
    width: min(450px, 90vw);
    height: 375px;
    padding: 20px;
    transition:  300ms  ease;
}
.closed {
    width: 0px;
    height: 0px;
    transition:  300ms  ease;
}
</style>
<template>
    <div class="topBarContactBox">
        <span class="contact_icon icon">call</span>
        <span class="contact_icon icon">email</span>
        <span class="contact_icon icon">location_on</span>
    </div>
</template>

<style scoped>
.topBarContactBox {
    margin-right: min(1vw, 20px);
    align-items: center;
    gap: clamp(10px, 1vw, 20px);
}
.contact_icon {
    font-size: 20px;
    color: var(--brand-sec);
}
</style>
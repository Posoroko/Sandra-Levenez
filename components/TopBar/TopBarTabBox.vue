<template>
    <div class="tabBox flex alignCenter">
        <a :href="`tel:${contact.telephone}`" class="topBarTab">
            <span class="topBar_bar_icon icon">call</span>
            <span class="topBar_bar_text reactiveLink">{{ contact.telephone }}</span>
        </a>

        <a :href="`mailto:${contact.email}`" class="topBarTab">
            <span class="topBar_bar_icon icon">email</span>
            <span class="topBar_bar_text reactiveLink">{{ contact.email }}</span>
        </a>

        <div class="topBarTab">
            <span class="topBar_bar_icon icon">location_on</span>
            <span class="topBar_bar_text">Bretagne</span>
        </div>
    </div>
</template>

<script setup>
const appConfig = useAppConfig()

const contact = appConfig.contact
</script>
<style scoped>
.tabBox {
    gap: clamp(5px, 1.5vw, 30px);
}
.topBarTab {
    display: flex;
    align-items: center;
    gap: clamp(2px, 1vw, 15px);
}
.topBar_bar_icon {
    font-size: 25px;
}
.topBar_bar_text {
    font-size: 16px;
    font-weight: 600;
    color: var(--brand-main);
}
.topBarTab:hover .reactiveLink {
    color: var(--brand-sec);
}
</style>
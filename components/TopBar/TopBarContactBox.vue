<script setup>
const appConfig = useAppConfig()
const contact = appConfig.contact
</script>

<template>
    <div class="topBarContactBox">
        <a :href="`tel:${contact.telephone}`" class="topBarTab">
            <span class="contact_icon icon callIcon">call</span>
        </a>

        <a :href="`mailto:${contact.email}`" class="topBarTab">
            <span class="contact_icon icon ">alternate_email</span>
        </a>

        <span class="contact_icon icon ">location_on</span>
    </div>
</template>

<style scoped>
.topBarContactBox {
    height: 100%;
    width: 200px;
    margin-right: min(1vw, 20px);
    align-items: center;
    justify-content: flex-end;
    gap: clamp(10px, 1vw, 20px);
}
.contact_icon {
    font-size: 20px;
    color: var(--brand-sec);
}
</style>
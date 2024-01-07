<script setup>
const appConfig = useAppConfig()
const contact = appConfig.contact

const locToolTip = ref(false);


onMounted(() => {
    document.addEventListener('click', (e) => {
        if (e.target.dataset.name == 'locToolTip') {
            locToolTip.value = !locToolTip.value
            return;
        }
        if(locToolTip.value) {
            locToolTip.value = false;
        }
    })
    document.addEventListener('scroll', (e) => {

        if (locToolTip.value) {
            locToolTip.value = false;
        }
    })
})

</script>

<template>
    <div class="topBarContactBox relative">
        <a :href="`tel:${contact.telephone}`" class="topBarTab">
            <span class="contact_icon icon callIcon">call</span>
        </a>

        <a :href="`mailto:${contact.email}`" class="topBarTab">
            <span class="contact_icon icon ">alternate_email</span>
        </a>

        <div class="pointer" data-name="locToolTip">
            <span class="contact_icon icon">location_on</span>
            <span class="toolTip flex alignCenter gap10" :class="{ 'active' : locToolTip }">
                <span class="contact_icon icon">location_on</span>
                <span>Bretagne</span>
            </span>
        </div>
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
.toolTip {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
    color: var(--brand-main);
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #fff;
    border-radius : 5px;
    box-shadow: 2px 2px 5px black;
    opacity: 0;
    transition: 300ms ease;
}
.toolTip.active {
    opacity: 1;
    transition: 300ms ease;
}
span {
    pointer-events: none;
}
</style>
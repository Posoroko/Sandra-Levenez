<template>
    <SocialMediaBox boxClass="topBarSocialIconbox" :icons="icons" />
</template>

<script setup>
const icons = [
    {
        name: "facebook",
        url: "https://www.facebook.com/sandra.levenez"
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/sl_bzh/"
    },
    {
        name: "twitter",
        url: "https://twitter.com/slevenez?lang=fr"
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/sandra-l%C3%A9v%C3%A9nez-270727257/"
    }

]
</script>

<style>
.topBarSocialIconbox {
    margin-right: min(1vw, 20px);
    align-items: center;
    gap: clamp(5px, 1vw, 10px);
}
.topBarSocialIconbox .socialNetworkIconSVG {
    width: clamp(20px, 2vw, 30px);
    fill: var(--brand-sec);
}
</style>
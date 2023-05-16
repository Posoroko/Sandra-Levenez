<template>
    <a v-if="name == 'facebook'" :href="url" class="full">
        <svg version="1.1" class="socialNetworkIconSVG faceBookSVG" :class="{ 'widthFromProps' : width != 'null' }" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <path class="iconPath facebookPath" d="M12.9,28V16h-4v-4h4V9.9c0-4.1,2-5.9,5.4-5.9c1.6,0,2.5,0.1,2.9,0.2V8h-2.3c-1.4,0-1.9,0.8-1.9,2.3V12h4.2l-0.6,4h-3.6v12
        H12.9z"/>
        </svg>
    </a>
    
    <a v-if="name == 'instagram'" :href="url">
        <svg version="1.1" class="socialNetworkIconSVG instagramSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <path class="iconPath instagramPath" d="M11.5,5C7.9,5,5,7.9,5,11.5v9.1c0,3.6,2.9,6.5,6.5,6.5h9.1c3.6,0,6.5-2.9,6.5-6.5v-9.1C27,7.9,24.1,5,20.5,5H11.5z M11.5,7
            h9.1C23,7,25,9,25,11.5v9.1c0,2.5-2,4.5-4.5,4.5h-9.1C9,25,7,23,7,20.5v-9.1C7,9,9,7,11.5,7z M21.9,9.2c-0.5,0-0.9,0.4-0.9,0.9
            s0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9S22.4,9.2,21.9,9.2z M16,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,10,16,10z M16,12
            c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S13.8,12,16,12z"/>
        </svg>
    </a>

    <a v-if="name == 'twitter'" :href="url">
        <svg version="1.1" class="socialNetworkIconSVG twitterSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <path class="iconPath twitterPath" d="M29,7.9c-1,0.4-2,0.7-3.1,0.8c1.1-0.7,1.9-1.7,2.3-3c-1,0.6-2.2,1.1-3.4,1.3c-1-1-2.4-1.7-3.9-1.7c-2.9,0-5.3,2.4-5.3,5.3
            c0,0.4,0,0.8,0.1,1.2c-4.4-0.2-8.4-2.3-11-5.6C4.4,7.2,4.1,8.1,4.1,9.1c0,1.9,0.9,3.5,2.4,4.4c-0.9,0-1.7-0.3-2.4-0.7c0,0,0,0,0,0.1
            c0,2.6,1.8,4.7,4.3,5.2c-0.4,0.1-0.9,0.2-1.4,0.2c-0.3,0-0.7,0-1-0.1c0.7,2.1,2.6,3.7,5,3.7c-1.8,1.4-4.1,2.3-6.6,2.3
            c-0.4,0-0.9,0-1.3-0.1c2.4,1.5,5.2,2.4,8.2,2.4c9.8,0,15.2-8.1,15.2-15.2c0-0.2,0-0.5,0-0.7C27.4,10,28.3,9,29,7.9z"/>
        </svg>
    </a>

    <a v-if="name == 'linkedin'" :href="url">
        <svg version="1.1" class="socialNetworkIconSVG linkedinSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
            <path class="iconPath linkedinPath" d="M7.6,5.1c-1.7,0-3,1-3,2.5c0,1.4,1.3,2.5,3,2.5c1.7,0,3-1.1,3-2.5C10.5,6.1,9.2,5.1,7.6,5.1z M5.1,11.1
            c-0.3,0-0.5,0.2-0.5,0.5v14.5c0,0.3,0.2,0.5,0.5,0.5h5c0.3,0,0.5-0.2,0.5-0.5V11.6c0-0.3-0.2-0.5-0.5-0.5H5.1z M12.6,11.1
            c-0.3,0-0.5,0.2-0.5,0.5v14.5c0,0.3,0.2,0.5,0.5,0.5h4.5c0.3,0,0.5-0.2,0.5-0.5v-7.5v-0.1v-0.1c0-1.2,0.9-2.2,2.1-2.2
            c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0c1.2,0.1,2.1,1.1,2.1,2.2v7.8c0,0.3,0.2,0.5,0.5,0.5h4.5c0.3,0,0.5-0.2,0.5-0.5v-8.5
            c0-3.2-1.7-6.5-5.6-6.5c-1.8,0-3.1,0.7-3.9,1.2v-0.7c0-0.3-0.2-0.5-0.5-0.5H12.6z"/>
        </svg>
    </a>

    
</template>

<script setup>

const props = defineProps({
    name: String,
    url: String,
    width: String
})


</script>





<style scoped>
.iconPath {
    fill: var(--brand-sec);
    transition: 300ms ease;
}
.socialNetworkIconSVG:hover .iconPath{
    fill: var(--brand-main);
    transition: 300ms ease;
}


</style>
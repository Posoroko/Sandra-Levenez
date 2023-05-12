<template>
    <dialog id="text-modal" class="modal">
        <span class="modalCloseBtn icon pointer" @click="closeModal('text-modal')">close</span>
    </dialog>
</template>

<script setup>
import { closeModal } from '@/composables/utilities'
</script>

<style scoped>
#image-modal {
    margin: auto;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    overflow: visible;
}
#image-modal::backdrop {
    background-color: rgba(0, 0, 0, 0.671);
    backdrop-filter: blur(3px);
}

#image-modal:deep(.modalImage_img) {
    width: min(90vw, 1000px);
    box-shadow: 5px 5px 10px black;
    border-radius: 10px;
}
.modalCloseBtn {
    width: 35px;
    height: 35px;
    text-align: center;
    font-size: 30px;
    color: white;
    background-color: rgba(0, 0, 0, 0.452);
    border-radius: 5px;
    transition: 300ms ease;
    position: absolute;
    top: 10px;
    right: 10px;
}
.modalCloseBtn:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.781);
    transform: rotate(90deg);
}
</style>
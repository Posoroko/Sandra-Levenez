export const openImageInModal = (imageUrl) => {
    toggleSiteScroll()
    const imageModal = document.getElementById('image-modal')

    const newImgNode = createImageElement(imageUrl)

    imageModal.appendChild(newImgNode)

    imageModal.showModal()
}

export const closeModal = (id) => {
    toggleSiteScroll()
    let modal = document.getElementById(id)
    console.log(modal)
    let img = modal.querySelector('.modalImage_img')
    img.remove()
    modal.close()
}

const createImageElement = (imageUrl) => {
    const img = document.createElement('img')
    img.src = imageUrl
    img.classList.add('modalImage_img')
    return img
}


const toggleSiteScroll = () => {
    if(document.body.classList.contains('noScroll')) {
        document.body.classList.remove('noScroll')
    } else {
        document.body.classList.add('noScroll')
    }
}
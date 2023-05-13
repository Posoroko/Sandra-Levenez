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

    if(id === 'image-modal') {
        let img = modal.querySelector('.modalImage_img')
        img.remove()
    }
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

export const readInModal = (firstName, text, color) => {
    const modal = document.getElementById('text-modal')
    modal.style.backgroundColor = color

    const h1 = modal.querySelector('.modalTitle')
    h1.innerHTML = firstName
    
    const modalText = modal.querySelector('.modalText')
    modalText.innerHTML = text
    
    
    toggleSiteScroll()
    
    modal.showModal()
}

// export const readInModal = (firstName, text) => {
//     const modal = document.getElementById('text-modal')
//     const h3 = document.createElement('h3')
//     h3.classList.add('modalTitle')
//     h3.innerText = firstName
//     modal.appendChild(h3)

//     const p = document.createElement('p')
//     p.innerText = text
//     p.classList.add('modalText')
//     modal.appendChild(p)



//     toggleSiteScroll()

//     modal.showModal()
// }
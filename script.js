const images = [
    './images/image-product-1.jpg', 
    './images/image-product-2.jpg', 
    './images/image-product-3.jpg', 
    './images/image-product-4.jpg'
]

let currentImage = 0 

let mobileImage = document.getElementById('mobileImage');
let forwardButton = document.getElementById('forward');
let backwardButton = document.getElementById('backward');

forwardButton.addEventListener('click', () => changeImage(1))
backwardButton.addEventListener('click', () => changeImage(-1))

function changeImage(direction){
    currentImage += direction

    if(currentImage < 0){
        currentImage = images.length - 1
    }
    else if(currentImage >= images.length - 1){
        currentImage = 0
    }

    mobileImage.src = images[currentImage]
}

let count = document.querySelector('.count');
let currentCount = 0

function itemsIncrease() {
    currentCount ++ 
    count.innerText = currentCount
}

function itemsDecrease() {
    if(currentCount){currentCount -- }
    count.innerText = currentCount
}

let cartItems = 0

function cartCount(){
    let cartCount = document.querySelector('.cart-count');
    cartCount.style.display = 'block';
    cartItems ++
    cartCount.innerText = cartItems
}

const bigImage = document.getElementById('big-image');

function swapImage(newImage, newAlt){
    bigImage.src = newImage
    bigImage.alt = newAlt
}

const smallImgs = document.querySelectorAll('.s-im')

function clickedSmallImg(event){
    smallImgs.forEach(smallImg => {
        smallImg.classList.remove('selected')
    })

    event.target.classList.add('selected')
}

smallImgs.forEach(smallImg => {
    smallImg.addEventListener('click', clickedSmallImg)
})


function handleMobMenu(){
    let mobileMenuContainer = document.querySelector('.mobile-menu-items')
    mobileMenuContainer.classList.remove('closed')
}

document.querySelector('.close-menu').onclick = function(){
    document.querySelector('.mobile-menu-items').classList.add('closed')
}

let lightBoxProductImage = document.getElementById('light-box-product-image')
bigImage.onclick = function(e){
    document.querySelector('.light-box-container').classList.add('open')
    lightBoxProductImage.src = e.target.src
}

document.getElementById('light-box-close').onclick = function(){
    document.querySelector('.light-box-container').classList.remove('open')
}

let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

function handleLightBoxImage(direction){
    currentCount += direction
    if(currentCount < 0){
        currentCount = images.length-1
    }else if(currentCount > images.length-1){
        currentCount = 0
    }

    lightBoxProductImage.src = images[currentCount]
}

prev.addEventListener('click', function(){handleLightBoxImage(-1)})
next.addEventListener('click', function(){handleLightBoxImage(1)})
const cardImg = document.querySelector('.img__section')
const cardHeading = document.querySelector('.section__heading')
const cardText = document.querySelector('.section__text')
const button = document.querySelector('button')


fetch('https://backoffice.nodemy.vn/api/products?populate=*')
.then(res => 
    res.json()
)
.then(products => {
    let data = products.data[0]

    cardImg.classList.remove('loading')
    cardHeading.classList.remove('loading')
    cardText.classList.remove('loading')
    button.classList.remove('loading')

    cardImg.innerHTML = `<img src="https://backoffice.nodemy.vn${data?.attributes?.image?.data[0]?.attributes?.url}">`
    cardHeading.innerText = `${data?.attributes?.name}`
    cardText.innerText = `${data?.attributes?.description}`
    button.innerText = 'Read More'
})
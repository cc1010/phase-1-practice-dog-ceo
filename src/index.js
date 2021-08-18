console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// Challenge 1
fetch(imgUrl)
.then(respone => respone.json())
.then(data => {
    const listIMG = data.message
    console.log(listIMG)
    for (const imgSRC of listIMG) {
        const dogImageContainer = document.getElementById('dog-image-container')
        const newIMG = document.createElement('img')
       
        newIMG.src = imgSRC
        newIMG.style.height = "100px"
        newIMG.style.display = 'block'
         dogImageContainer.appendChild(newIMG)
    }
})


// Challenge 2
fetch(breedUrl)
.then(respone => respone.json())
.then(data => {

    const breeds = data.message
    let letter = ''
    let dogBreeds = document.getElementById('dog-breeds')

    document.getElementById('breed-dropdown').onchange = function() {
        letter = this.value
        dogBreeds.innerHTML = ''

        for (const breed in breeds) {
            const li = document.createElement('li')
            li.innerText = breed
            
           if (letter == breed[0]){
               //console.log(letter)
                dogBreeds.appendChild(li)
            }
        li.addEventListener('click', ()=>{
            li.style.color = 'green'
            })
        }
    }         

})






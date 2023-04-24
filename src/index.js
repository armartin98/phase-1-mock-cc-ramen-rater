// write your code here
// see all ramen images in the div #ramen-menu
//  display an image  foreach of the ramen using img tag inside the #ramen-menu
// click an image and see all the info about that ramen in the #ramen-detail div

function ramenRater(){
    fetch('http://localhost:3000/ramens')
        .then(resp => resp.json())
        .then(ramen => {
            console.log(ramen)
            ramenImages(ramen)
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log(e)
                const newObj = [{
                    name: newName.value,
                    restaurant: newRestaurant.value,
                    image: newImage.value,
                    rating: newRating.value,
                    comment: newComment.value
                }]
                ramenImages(newObj)
            })
        })
}
ramenRater()

const ramenMenu = document.querySelector("#ramen-menu")
const ramenDetail = document.querySelector("#ramen-detail")
const detailImage = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const ramenRestaurant = document.querySelector(".restaurant")
const ratingDisplay = document.querySelector("#rating-display")
const commentDisplay = document.querySelector("#comment-display")
const form = document.querySelector("#new-ramen")

const newName = document.querySelector("#new-name")
const newRestaurant = document.querySelector("#new-restaurant")
const newImage = document.querySelector("#new-image")
const newRating = document.querySelector("#new-rating")
const newComment = document.querySelector("#new-comment")


function ramenImages(ramens){
    ramens.forEach(ramenObj => {
        const ramenImage = document.createElement('img')
        ramenImage.src = ramenObj.image
        ramenMenu.appendChild(ramenImage)

        ramenImage.addEventListener('click', () => {
            detailImage.src = ramenObj.image
            detailImage.alt = ramenObj.name
            ramenName.innerText = ramenObj.name
            ramenRestaurant.innerText = ramenObj.restaurant 
            ratingDisplay.innerText = ramenObj.rating
            commentDisplay.innerText = ramenObj.comment
        })
    });
}


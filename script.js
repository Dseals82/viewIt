const setActive = (el) => {
    const list = document.querySelectorAll('.menu-list-items');
    list.forEach((item) =>{
        if(item.classList.contains('active')){
            item.classList.remove('active')
        }
    })
    el.classList.add('active')

}

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
let clickCounter = 0;
arrows.forEach((arrow,i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener('click', () => {
        clickCounter++;
        if(itemNumber - (4 + clickCounter) >= 0){
            movieLists[i].style.transform = `translate(${movieLists[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
        }else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
        
    })
    console.log(movieLists[i].querySelectorAll("img").length)

})
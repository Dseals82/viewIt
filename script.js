const setActive = (el) => {
    const list = document.querySelectorAll('.menu-list-items');
    list.forEach((item) =>{
        if(item.classList.contains('.active-nav-link')){
            item.classList.remove('.active-nav-link')
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
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
            movieLists[i].style.transform = `translate(${movieLists[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
        }else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
        
    })
    console.log(Math.floor(window.innerWidth / 270))

})

const toggleNode = document.querySelector(".toggle-node");
const items = document.querySelectorAll(".container, .movie-list-container, .navbar-container, .sidebar, .sidebar-icons, .toggle");

toggleNode.addEventListener("click", ()=> {
    items.forEach((item) => {
        item.classList.toggle("active");
    })
    toggleNode.classList.toggle("active");
});
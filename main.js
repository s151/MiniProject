let movieData;
let fridayPremier=document.getElementById("fridayPremier");
let comingWrapper= document.getElementById("comingWrapper");
let topRated = document.getElementById("topRatedWrapper");
const loadData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/movies.json');
    xhr.onload = loadThis;
    xhr.send();
}
window.onload = loadData();
function loadThis() {
    movieData = JSON.parse(this.responseText).movies;
    console.log("This is movie data "+movieData);
    loadMovie();
}
function loadMovie(){
  for(const{movieImg,movieTitle,movieDescription,movieCategory} of movieData){
    console.log(movieImg,movieTitle,movieDescription,movieCategory);
    if(movieCategory=="Friday releases"){
    container=document.createElement('div');
    container.classList.add("box");
    container.innerHTML=`
    <div class="box-img">
     <img src="${movieImg}" alt="This is movie image">
    </div>
    <div class="movies-description">
            <h2>${movieTitle}</h2>
            <p>${movieDescription}</p>
            <a href="movies/moviepage.html" class="watch">Watch Now</a>
    </div>`;
    fridayPremier.appendChild(container);
    }
    else if(movieCategory=="Coming Soon"){
      comingContainer = document.createElement('div');
      comingContainer.classList.add("box");
      comingContainer.innerHTML=`
      <div class="box-img">
      <img src="${movieImg}" alt="Upcoming Movie">
      </div>
      <div class="movies-description">
      <h2>${movieTitle}</h2>
      <p>${movieDescription}</p>
      <a href="movies/moviepage.html" class="watch">Watch Now</a>
      </div> `;
      comingWrapper.appendChild(comingContainer);
    }
  else if(movieCategory=="Top Rated"){
     topContainer = document.createElement('div');
     topContainer.classList.add("swiper-slide","box");
     topContainer.innerHTML=`
     <div class="box-img">
      <img src="${movieImg}" alt="Top Rated Movie">
      </div>
      <div class="movies-description">
      <h2>${movieTitle}</h2>
      <p>${movieDescription}</p>
      <a href="movies/moviepage.html" class="watch">Watch Now</a>
      </div>
     `;
     topRated.appendChild(topContainer);
  }
  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 55000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  });
}
}

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  //this implies the header background changes only when its not on top of screen
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
 window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
 }
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 50000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});
let search = document.getElementById("searchHere");
search.addEventListener("input",function(){  //whenever anything is written in the field this gets triggered
    let searchVal = search.value;
console.log("input fired",searchVal);
let card = document.getElementsByClassName("box");
Array.from(card).forEach(function(element){
  console.log(element);
  element.style.display="block";
    let cardTxt = element.getElementsByTagName("h2")[0].innerText;
    // let movie_img= element.getElementsByTagName("img");
    console.log(cardTxt); //this will have the movie names
    if(cardTxt.includes(searchVal)){
        element.style.display="block";
        console.log("visible");
    }
    else{
        element.style.display="none";
        // console.log("hidden");
    }
})
});

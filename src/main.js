import { getPicture } from './js/pixabay-api'
import { photosTemplate } from './js/render-functions'
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import "izitoast/dist/css/iziToast.min.css";


const formRef = document.querySelector(".search");
const resultRef = document.querySelector(".result");
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');

let page = 1;
let maxPage = 0;
let pageSize = 15;
let inputValue;


loader.style.display = "none";

formRef.addEventListener('submit', createSearch);
loadMore.addEventListener('click', onLoadMoreClick);

async function createSearch(e) {
    e.preventDefault();
    
    resultRef.innerHTML = "";

    page = 1;

  inputValue = formRef.elements.input.value.trim();
    if (inputValue) {
        try {
            const data = await getPicture(inputValue, page);
          maxPage = Math.ceil(data.totalHits / pageSize);
            const markup = photosTemplate(data.hits);
            resultRef.innerHTML = markup;
            const gallery = new SimpleLightbox('.result li a');
            gallery.refresh();            
        } catch (err) {
            console.log(err);
             iziToast.show({
            message: "Sorry, there are no images matching your search query. Please try again!",
            timeout: 5000,
            position: "topRight",
            color: 'red'
        })
        }  
  }

  formRef.reset();
  checkBtnStatus();
      
}

async function onLoadMoreClick() {

  page += 1;
    try {
        const data = await getPicture(inputValue, page);
        const markup = photosTemplate(data.hits);
      resultRef.insertAdjacentHTML('beforeend', markup);
      const gallery = new SimpleLightbox('.result li a');
            gallery.refresh();   
  } catch (err) {
    console.log(err);
  }

  myScroll();
  
  checkBtnStatus();
  message();
}



function checkBtnStatus() {
  if (page >= maxPage) {
      loadMore.style.display = 'none';       
  } else {
      loadMore.style.display = 'block';
  }
}

function message() {
  if (page >= maxPage) {
    iziToast.show({
            message: "We're sorry, but you've reached the end of search results.",
            timeout: 5000,
            position: "topRight",
            color: 'green',
       })    
  }
}

function myScroll() {
  const height = resultRef.firstChild.getBoundingClientRect().height;

  scrollBy({
    top: height*2,
    behavior: 'smooth',
  });
}
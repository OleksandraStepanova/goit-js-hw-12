import iziToast from "izitoast";
import axios from "axios";
import "izitoast/dist/css/iziToast.min.css";

const loader = document.querySelector('.loader');

export async function getPicture(query, currentPage) {
  loader.style.display = "block";


  const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
      key: '43034088-8742da6bcfba06a1e287112c2',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: currentPage,
  });
    
    const url = `${BASE_URL}?${params}`;

  const res = await axios.get(url);
      loader.style.display = "none";
      if (res.data.totalHits > 0) {        
        return res.data;
      }
      else {
        iziToast.show({
            message: "Sorry, there are no images matching your search query. Please try again!",
            timeout: 5000,
            position: "topRight",
            color: 'red'
        })
        return res.data;
      }      
}


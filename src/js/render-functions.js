
function photoTemplate({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    return `<li class="picture-card">
  <a class="sourse" href ='${largeImageURL}'>
  <img
    src='${webformatURL}'
    alt= '${tags}'
    class="photo-item"    
  />
  </a>  
 <ul class="discription">
   <li>Likes:<br>${likes}</li>
   <li>Vives:<br>${views}</li>
   <li>Comments:<br>${comments}</li>
   <li>Downloads:<br>${downloads}</li>
 </ul>
</li>`;
}

export function photosTemplate(arr) {
    return arr.map(photoTemplate).join(' ');    
}
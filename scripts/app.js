//select movie poster original image
let moviePoster = document.querySelector('.movie-poster');
//select modal window layer
let modal = document.querySelector('#myModal');
//select close button
let closeBtn = document.querySelector('.closeBtn');
//select modal window image
let modalImage = document.querySelector('.movie-poster-modal');


moviePoster.addEventListener('click', ()=>{
    console.log('image clicked');
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

window.addEventListener('click', ()=>{
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});
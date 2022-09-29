document.addEventListener("DOMContentLoaded", e => {
    const img = document.querySelector('.visible-pannel');
    const text = document.querySelector('.toggle-pannel');


    let isVisible =  false;
    console.log(isVisible);
    img.addEventListener('click', ()=>{
            isVisible = !isVisible;
            isVisible ? text.classList.add('is-visible'): text.classList.remove('is-visible');
            console.log(isVisible);
    });
});
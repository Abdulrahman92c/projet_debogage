let img = document.querySelector('img');
let text = document.querySelector('.toggle-pannel');
for(i = 0;i<img.length;i++){
    let Itms = new ToggleItem(img[i], text[i]);
}


let isVisible =  false;
console.log(isVisible);
img.addEventListener('click', ()=>{
            isVisible = !isVisible;
            isVisible ? text.classList.add('is-visible'): text.classList.remove('is-visible');
            
});

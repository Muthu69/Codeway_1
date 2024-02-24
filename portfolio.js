function scrollToElement(elementSelector , instance=0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length> instance){
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const link0 = document.getElementById("link0");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");  

link0.addEventListener('click', ()=>{
    scrollToElement('.content');
}) 

link1.addEventListener('click', ()=>{
    scrollToElement('.header');
}) 

link2.addEventListener('click', ()=>{
    scrollToElement('.socials');
})

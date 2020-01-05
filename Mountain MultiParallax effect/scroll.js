window.addEventListener('scroll', (event)=>{
    var scrolled = window.pageYOffset/75;
    // console.log(scrolled);
    var layers = document.querySelectorAll('.page1 img');
    l = layers.length;
    for(var i=0; i<l; i++){
        layers[i].style.transform = 'translateY(-'+scrolled*i+'%)';
    }
    var gradient = document.querySelector('#gradient');
    // gradient.style.transform = 'translateY(-'+scrolled*(l-1)+'%)'
    gradient.style.transform = 'translateY(-'+scrolled*(l-2)+'%)'
});
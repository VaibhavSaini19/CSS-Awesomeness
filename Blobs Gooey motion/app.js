let container = document.getElementById("container");
let blob_nums = 25
for (let i = 0; i < blob_nums; i++) {
    let gooeyBox = document.createElement("div");
    gooeyBox.className = "box";
    // gooeyBox.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    container.appendChild(gooeyBox);
}

setInterval(()=>{
    let gooey = document.querySelectorAll('.box');
    for(let i=0; i<gooey.length; i++){
        gooey[i].style.left = Math.floor(Math.random()*90) + 'vw';
        gooey[i].style.top = Math.floor(Math.random()*90) + 'vh';
    }
}, 2000);
